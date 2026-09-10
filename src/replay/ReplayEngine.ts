import type { ReplayState, VehicleState, TelemetryPoint } from '../types';
import type { MapData, SceneEntity } from '../mcap/types';
import { MCAPLoader } from '../mcap/loader';

export type ReplayEventType =
  | 'stateChange'
  | 'timeUpdate'
  | 'loaded'
  | 'error'
  | 'dataLoading'
  | 'trajectoryUpdate'
  | 'mapDataUpdate'
  | 'chunkLoaded';

export type ReplayEventCallback = (data: unknown) => void;

/**
 * Core replay engine that manages simulation playback
 * Separates simulation time from render time per AGENTS.md
 * Uses progressive chunked loading for fast initial render
 */
export class ReplayEngine {
  private loader: MCAPLoader | null = null;
  private state: ReplayState;
  private lastUpdateTime: number = 0;
  private lastStateEmitTime: number = 0;
  private lastPrefetchTime: number = 0;
  private animationFrameId: number | null = null;
  private eventListeners: Map<ReplayEventType, Set<ReplayEventCallback>> = new Map();
  private isPrefetching: boolean = false;
  private isLoadingCurrentTime: boolean = false;
  private backgroundLoadAborted: boolean = false;

  // Throttle React state updates to ~10 per second
  private readonly STATE_EMIT_INTERVAL = 100;
  // Prefetch more aggressively - every 500ms
  private readonly PREFETCH_INTERVAL = 500;

  constructor() {
    this.state = {
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      playbackRate: 1,
      isLoading: false,
      isSeeking: false,
      isBuffering: false,
    };
  }

  /**
   * Load MCAP file from URL
   * Returns quickly after first chunk loads - trajectory and map load in background
   */
  async loadSimulation(url: string): Promise<void> {
    console.log('[ReplayEngine] loadSimulation starting...');
    const totalStartTime = performance.now();

    this.updateState({ isLoading: true });
    this.emit('stateChange', this.state);
    this.backgroundLoadAborted = false;

    try {
      // Clean up previous loader
      if (this.loader) {
        this.loader.dispose();
        this.loader = null;
      }

      const loader = new MCAPLoader(url);
      this.loader = loader;

      // Load index first (fast - metadata only)
      console.log('[ReplayEngine] Step 1: Loading index...');
      const indexStartTime = performance.now();
      const index = await loader.loadIndex();
      console.log(`[ReplayEngine] Step 1 complete: Index loaded in ${(performance.now() - indexStartTime).toFixed(0)}ms`);

      // Check if disposed during async operation
      if (this.loader !== loader || this.backgroundLoadAborted) {
        return;
      }

      this.updateState({
        duration: index.duration,
        currentTime: 0,
      });

      // Step 2: Load first chunk AND map data in PARALLEL
      // Each uses its own reader instance, so they don't conflict
      console.log('[ReplayEngine] Step 2: Loading first chunk AND map data in parallel...');
      const parallelStartTime = performance.now();

      const [/* chunkResult */, mapData] = await Promise.all([
        loader.loadTimeRange(0),        // Primary reader - poses for playback
        loader.loadMapData(),           // Map reader - semantic map, drivable area, etc.
      ]);

      console.log(`[ReplayEngine] Step 2 complete: Parallel load in ${(performance.now() - parallelStartTime).toFixed(0)}ms`);

      // Check if disposed during async operation
      if (this.loader !== loader || this.backgroundLoadAborted) {
        return;
      }

      // Emit map data immediately (loaded in parallel)
      if (mapData) {
        this.emit('mapDataUpdate', mapData);
      }

      // Mark as loaded - scene can render now with first chunk + map
      this.updateState({ isLoading: false });
      this.emit('loaded', { duration: index.duration });
      this.emit('stateChange', this.state);

      console.log(`[ReplayEngine] Initial load complete. Total blocking time: ${(performance.now() - totalStartTime).toFixed(0)}ms`);

      // Emit initial trajectory from first chunk
      const initialTrajectory = this.getTrajectory();
      console.log(`[ReplayEngine] Initial trajectory after first chunk: ${initialTrajectory.length} points`);
      if (initialTrajectory.length > 0) {
        this.emit('trajectoryUpdate', initialTrajectory);
      }

      // Start background loading for remaining chunks (map already loaded)
      this.startBackgroundLoading(loader);

    } catch (error) {
      this.updateState({ isLoading: false });
      this.emit('error', error);
      throw error;
    }
  }

  /**
   * Load remaining chunks in background
   * Map data is now loaded in parallel with first chunk (using dedicated reader)
   */
  private async startBackgroundLoading(loader: MCAPLoader): Promise<void> {
    console.log('[ReplayEngine] Starting background chunk loading...');

    // Proactively load remaining chunks for smooth playback
    // Map data was already loaded in parallel during initial load
    await this.proactivelyLoadChunks(loader);
  }

  /**
   * Proactively load chunks ahead of playback
   */
  private async proactivelyLoadChunks(loader: MCAPLoader): Promise<void> {
    const index = loader.getIndex();
    if (!index) {
      console.log('[ReplayEngine] proactivelyLoadChunks: No index available');
      return;
    }

    const chunkDuration = 5; // seconds per chunk
    const totalChunks = Math.ceil(index.duration / chunkDuration);
    console.log(`[ReplayEngine] proactivelyLoadChunks: Duration=${index.duration.toFixed(2)}s, totalChunks=${totalChunks}`);

    // Load chunks sequentially in background
    for (let i = 1; i < totalChunks && i < 10; i++) { // Load up to 10 chunks proactively
      if (this.loader !== loader || this.backgroundLoadAborted) {
        return;
      }

      const targetTime = i * chunkDuration;

      try {
        await loader.loadTimeRange(targetTime);

        // Check if still valid
        if (this.loader !== loader || this.backgroundLoadAborted) {
          return;
        }

        // Emit updated trajectory after each chunk loads
        const trajectory = this.getTrajectory();
        console.log(`[ReplayEngine] Chunk ${i}/${totalChunks} loaded, emitting trajectoryUpdate with ${trajectory.length} points`);
        this.emit('trajectoryUpdate', trajectory);
        this.emit('chunkLoaded', { chunkIndex: i, totalChunks });

      } catch (err) {
        console.warn(`Background chunk ${i} load failed:`, err);
        // Continue loading other chunks
      }
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

        // Update trajectory with new data
        const trajectory = this.getTrajectory();
        this.emit('trajectoryUpdate', trajectory);
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
   * Get dynamic objects (other vehicles) at current time
   */
  getCurrentDynamicObjects(): SceneEntity[] | null {
    if (!this.loader) return null;
    return this.loader.getDynamicObjectsAtTime(this.state.currentTime);
  }

  /**
   * Get vehicle trajectory from currently loaded data
   */
  getTrajectory(): Array<{ x: number; y: number; z: number }> {
    const trajectory = this.loader?.getTrajectory() ?? [];
    console.log(`[ReplayEngine.getTrajectory] ${trajectory.length} points`);
    return trajectory;
  }

  /**
   * Load the complete trajectory for the entire simulation
   * @deprecated Use progressive trajectory from chunks instead
   */
  async loadFullTrajectory(): Promise<Array<{ x: number; y: number; z: number }>> {
    return this.loader?.loadFullTrajectory() ?? [];
  }

  /**
   * Load map data (semantic map, drivable area, point cloud)
   * @deprecated Use background loading via mapDataUpdate event instead
   */
  async loadMapData(): Promise<MapData> {
    return this.loader?.loadMapData() ?? {
      semanticMap: null,
      drivableArea: null,
      pointCloud: null,
      markers: null,
      dynamicObjects: null,
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
    this.backgroundLoadAborted = true;
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
   * Handles chunked loading, buffering, and prefetching during playback
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
          isBuffering: false,
        });
        this.emit('timeUpdate', { currentTime: this.state.duration });
        this.emit('stateChange', this.state);
        return;
      }

      // Check if data is available for the new time
      if (this.loader && !this.loader.hasDataForTime(newTime)) {
        // Data not available - enter buffering state
        if (!this.state.isBuffering) {
          console.log(`[ReplayEngine] Buffering at ${newTime.toFixed(2)}s - waiting for data to load`);
          this.updateState({ isBuffering: true });
          this.emit('stateChange', this.state);
        }

        // Start loading if not already loading
        if (!this.isLoadingCurrentTime) {
          this.isLoadingCurrentTime = true;
          this.loader.loadTimeRange(newTime)
            .then(() => {
              // Data loaded - exit buffering and continue playback
              console.log(`[ReplayEngine] Data loaded for ${newTime.toFixed(2)}s - resuming playback`);
              this.updateState({ isBuffering: false });
              this.emit('stateChange', this.state);

              // Emit trajectory update when new chunk loads
              const trajectory = this.getTrajectory();
              this.emit('trajectoryUpdate', trajectory);
            })
            .catch((err) => {
              console.warn('Failed to load data during playback:', err);
              this.updateState({ isBuffering: false });
              this.emit('stateChange', this.state);
            })
            .finally(() => {
              this.isLoadingCurrentTime = false;
            });
        }

        // Don't advance time while buffering - keep the loop running to check when data is ready
        this.animationFrameId = requestAnimationFrame(loop);
        return;
      }

      // Data is available - clear buffering state if it was set
      if (this.state.isBuffering) {
        this.updateState({ isBuffering: false });
        this.emit('stateChange', this.state);
      }

      // Prefetch upcoming data more aggressively
      const shouldPrefetch = this.loader &&
        !this.isPrefetching &&
        (now - this.lastPrefetchTime) >= this.PREFETCH_INTERVAL;

      if (shouldPrefetch) {
        this.lastPrefetchTime = now;
        this.isPrefetching = true;

        // Prefetch 2 chunks ahead
        const prefetchTime = this.state.currentTime + 10 * this.state.playbackRate;
        if (prefetchTime <= this.state.duration) {
          this.loader!.prefetchRange(this.state.currentTime, this.state.playbackRate)
            .catch((err) => {
              console.warn('Prefetch failed:', err);
            })
            .finally(() => {
              this.isPrefetching = false;
            });
        } else {
          this.isPrefetching = false;
        }
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
