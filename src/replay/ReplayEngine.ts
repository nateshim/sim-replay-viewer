import type { ReplayState, VehicleState, TelemetryPoint } from '../types';
import type { MapData } from '../mcap/types';
import { MCAPLoader } from '../mcap/loader';

export type ReplayEventType = 'stateChange' | 'timeUpdate' | 'loaded' | 'error' | 'dataLoading';
export type ReplayEventCallback = (data: unknown) => void;

/**
 * Core replay engine that manages simulation playback
 * Separates simulation time from render time per AGENTS.md
 * Uses chunked loading - only loads data as needed
 */
export class ReplayEngine {
  private loader: MCAPLoader | null = null;
  private state: ReplayState;
  private lastUpdateTime: number = 0;
  private lastStateEmitTime: number = 0;
  private animationFrameId: number | null = null;
  private eventListeners: Map<ReplayEventType, Set<ReplayEventCallback>> = new Map();
  private prefetchScheduled: boolean = false;

  // Throttle React state updates to ~10 per second
  private readonly STATE_EMIT_INTERVAL = 100;

  constructor() {
    this.state = {
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      playbackRate: 1,
      isLoading: false,
      isSeeking: false,
    };
  }

  /**
   * Load MCAP file from URL
   * Uses chunked loading - only loads index and initial chunk
   */
  async loadSimulation(url: string): Promise<void> {
    this.updateState({ isLoading: true });
    this.emit('stateChange', this.state);

    try {
      // Clean up previous loader
      if (this.loader) {
        this.loader.dispose();
        this.loader = null;
      }

      const loader = new MCAPLoader(url);
      this.loader = loader;

      // Load index first (fast - metadata only)
      const index = await loader.loadIndex();

      // Check if disposed during async operation
      if (this.loader !== loader) {
        return; // Engine was disposed or new load started
      }

      this.updateState({
        duration: index.duration,
        currentTime: 0,
      });

      // Load initial chunk (around time 0)
      await loader.loadTimeRange(0);

      // Check if disposed during async operation
      if (this.loader !== loader) {
        return; // Engine was disposed or new load started
      }

      this.updateState({ isLoading: false });
      this.emit('loaded', { duration: index.duration });
      this.emit('stateChange', this.state);
    } catch (error) {
      this.updateState({ isLoading: false });
      this.emit('error', error);
      throw error;
    }
  }

  /**
   * Start playback
   */
  play(): void {
    if (this.state.isPlaying) return;

    this.updateState({ isPlaying: true });
    this.lastUpdateTime = performance.now();
    this.startAnimationLoop();
    this.emit('stateChange', this.state);
  }

  /**
   * Pause playback
   */
  pause(): void {
    if (!this.state.isPlaying) return;

    this.updateState({ isPlaying: false });
    this.stopAnimationLoop();
    this.emit('stateChange', this.state);
  }

  /**
   * Toggle play/pause
   */
  togglePlayPause(): void {
    if (this.state.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Seek to specific time
   * Loads data for the target time if not already loaded
   */
  seek(time: number): void {
    const clampedTime = Math.max(0, Math.min(time, this.state.duration));
    this.updateState({
      currentTime: clampedTime,
      isSeeking: true,
    });
    this.emit('timeUpdate', { currentTime: clampedTime });
    this.emit('stateChange', this.state);

    // Load data for the seek target if needed
    if (this.loader && !this.loader.hasDataForTime(clampedTime)) {
      this.emit('dataLoading', { time: clampedTime });
      this.loader.loadTimeRange(clampedTime).then(() => {
        this.updateState({ isSeeking: false });
        this.emit('stateChange', this.state);
      }).catch((err) => {
        console.warn('Failed to load data for seek:', err);
        this.updateState({ isSeeking: false });
        this.emit('stateChange', this.state);
      });
    } else {
      // Data already loaded, reset seeking flag after a short delay
      requestAnimationFrame(() => {
        this.updateState({ isSeeking: false });
      });
    }
  }

  /**
   * Set playback rate
   */
  setPlaybackRate(rate: number): void {
    this.updateState({ playbackRate: rate });
    this.emit('stateChange', this.state);
  }

  /**
   * Skip forward/backward
   */
  skip(seconds: number): void {
    this.seek(this.state.currentTime + seconds);
  }

  /**
   * Get current state
   */
  getState(): ReplayState {
    return { ...this.state };
  }

  /**
   * Get current vehicle state (interpolated)
   */
  getCurrentVehicleState(): VehicleState | null {
    if (!this.loader) return null;
    return this.loader.getStateAtTime(this.state.currentTime);
  }

  /**
   * Get all telemetry data
   */
  getTelemetry(): TelemetryPoint[] {
    return this.loader?.getAllTelemetry() ?? [];
  }

  /**
   * Get vehicle trajectory
   */
  getTrajectory(): Array<{ x: number; y: number; z: number }> {
    return this.loader?.getTrajectory() ?? [];
  }

  /**
   * Load the complete trajectory for the entire simulation
   */
  async loadFullTrajectory(): Promise<Array<{ x: number; y: number; z: number }>> {
    return this.loader?.loadFullTrajectory() ?? [];
  }

  /**
   * Load map data (semantic map, drivable area, point cloud)
   */
  async loadMapData(): Promise<MapData> {
    return this.loader?.loadMapData() ?? {
      semanticMap: null,
      drivableArea: null,
      pointCloud: null,
      markers: null,
    };
  }

  /**
   * Subscribe to events
   */
  on(event: ReplayEventType, callback: ReplayEventCallback): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }
    this.eventListeners.get(event)!.add(callback);
  }

  /**
   * Unsubscribe from events
   */
  off(event: ReplayEventType, callback: ReplayEventCallback): void {
    this.eventListeners.get(event)?.delete(callback);
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    this.stopAnimationLoop();
    this.loader?.dispose();
    this.loader = null;
    this.eventListeners.clear();
  }

  /**
   * Update internal state
   */
  private updateState(partial: Partial<ReplayState>): void {
    this.state = { ...this.state, ...partial };
  }

  /**
   * Emit event to listeners
   */
  private emit(event: ReplayEventType, data: unknown): void {
    this.eventListeners.get(event)?.forEach((callback) => callback(data));
  }

  /**
   * Start the animation loop
   * Handles chunked loading and prefetching during playback
   */
  private startAnimationLoop(): void {
    if (this.animationFrameId !== null) return;

    const loop = () => {
      if (!this.state.isPlaying) return;

      const now = performance.now();
      const deltaTime = (now - this.lastUpdateTime) / 1000; // Convert to seconds
      this.lastUpdateTime = now;

      // Advance simulation time based on wall-clock time and playback rate
      const newTime = this.state.currentTime + deltaTime * this.state.playbackRate;

      if (newTime >= this.state.duration) {
        // End of simulation
        this.updateState({
          currentTime: this.state.duration,
          isPlaying: false,
        });
        this.emit('timeUpdate', { currentTime: this.state.duration });
        this.emit('stateChange', this.state);
        return;
      }

      // Check if we need to load data for current time
      if (this.loader && !this.loader.hasDataForTime(newTime)) {
        // Pause briefly while loading
        this.loader.loadTimeRange(newTime).catch((err) => {
          console.warn('Failed to load data during playback:', err);
        });
      }

      // Schedule prefetch for upcoming data (don't block current frame)
      if (!this.prefetchScheduled && this.loader) {
        this.prefetchScheduled = true;
        // Use setTimeout to avoid blocking the animation frame
        setTimeout(() => {
          this.loader?.prefetchRange(this.state.currentTime, this.state.playbackRate);
          this.prefetchScheduled = false;
        }, 0);
      }

      this.updateState({ currentTime: newTime });
      this.emit('timeUpdate', { currentTime: newTime });

      // Throttle React state updates to avoid excessive re-renders
      if (now - this.lastStateEmitTime >= this.STATE_EMIT_INTERVAL) {
        this.lastStateEmitTime = now;
        this.emit('stateChange', this.state);
      }

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  /**
   * Stop the animation loop
   */
  private stopAnimationLoop(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
