import type { ReplayState, VehicleState, TelemetryPoint } from '../types';
import { MCAPLoader } from '../mcap/loader';

export type ReplayEventType = 'stateChange' | 'timeUpdate' | 'loaded' | 'error';
export type ReplayEventCallback = (data: unknown) => void;

/**
 * Core replay engine that manages simulation playback
 * Separates simulation time from render time per AGENTS.md
 */
export class ReplayEngine {
  private loader: MCAPLoader | null = null;
  private state: ReplayState;
  private lastUpdateTime: number = 0;
  private animationFrameId: number | null = null;
  private eventListeners: Map<ReplayEventType, Set<ReplayEventCallback>> = new Map();

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

      this.loader = new MCAPLoader(url);

      // Load index first
      const index = await this.loader.loadIndex();
      this.updateState({
        duration: index.duration,
        currentTime: 0,
      });

      // Load all data
      await this.loader.loadAllData();

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
   */
  seek(time: number): void {
    const clampedTime = Math.max(0, Math.min(time, this.state.duration));
    this.updateState({
      currentTime: clampedTime,
      isSeeking: true,
    });
    this.emit('timeUpdate', { currentTime: clampedTime });
    this.emit('stateChange', this.state);

    // Reset seeking flag after a short delay
    requestAnimationFrame(() => {
      this.updateState({ isSeeking: false });
    });
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

      this.updateState({ currentTime: newTime });
      this.emit('timeUpdate', { currentTime: newTime });

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
