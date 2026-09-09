import { McapIndexedReader } from '@mcap/core';
import * as lz4 from 'lz4js';
import type { MCAPFileIndex, MapData, SceneUpdate, SceneEntity, Grid, PointCloud } from './types';
import type { VehicleState, TelemetryPoint } from '../types';
import { decodeProtobuf, clearProtobufCache } from './protobufDecoder';

/**
 * Decompression handlers for MCAP chunks
 */
const decompressHandlers = {
  lz4: (buffer: Uint8Array, decompressedSize: bigint): Uint8Array => {
    return lz4.decompress(buffer, Number(decompressedSize));
  },
};

/**
 * Custom IReadable implementation for HTTP range requests
 * Uses limited concurrency to balance speed and browser resource limits
 */
class HttpRangeReader {
  private url: string;
  private fileSize: number | null = null;
  private abortController: AbortController;
  private isAborted: boolean = false;

  // Allow up to 3 concurrent requests (browser limit is typically 6 per host)
  private activeRequests: number = 0;
  private readonly maxConcurrent: number = 3;
  private requestQueue: Array<{
    offset: bigint;
    length: bigint;
    resolve: (data: Uint8Array) => void;
    reject: (err: Error) => void;
  }> = [];

  constructor(url: string) {
    this.url = url;
    this.abortController = new AbortController();
  }

  async size(): Promise<bigint> {
    if (this.isAborted) {
      throw new Error('Reader has been aborted');
    }
    if (this.fileSize === null) {
      const response = await fetch(this.url, {
        method: 'HEAD',
        signal: this.abortController.signal,
      });
      const contentLength = response.headers.get('content-length');
      this.fileSize = contentLength ? parseInt(contentLength, 10) : 0;
    }
    return BigInt(this.fileSize);
  }

  async read(offset: bigint, length: bigint): Promise<Uint8Array> {
    if (this.isAborted) {
      throw new Error('Reader has been aborted');
    }

    // If under concurrency limit, execute immediately
    if (this.activeRequests < this.maxConcurrent) {
      return this.executeRead(offset, length);
    }

    // Otherwise queue the request
    return new Promise((resolve, reject) => {
      this.requestQueue.push({ offset, length, resolve, reject });
    });
  }

  // Track request count for logging
  private requestCount = 0;

  /**
   * Execute an HTTP range request
   */
  private async executeRead(offset: bigint, length: bigint): Promise<Uint8Array> {
    this.activeRequests++;
    this.requestCount++;

    try {
      const start = Number(offset);
      const end = Number(offset + length) - 1;

      const response = await fetch(this.url, {
        headers: {
          Range: `bytes=${start}-${end}`,
        },
        signal: this.abortController.signal,
      });

      if (!response.ok && response.status !== 206) {
        throw new Error(`HTTP range request failed: ${response.status}`);
      }

      const buffer = await response.arrayBuffer();
      return new Uint8Array(buffer);
    } finally {
      this.activeRequests--;
      this.processQueue();
    }
  }

  /**
   * Process queued requests
   */
  private processQueue(): void {
    while (this.requestQueue.length > 0 && this.activeRequests < this.maxConcurrent) {
      const req = this.requestQueue.shift()!;
      if (this.isAborted) {
        req.reject(new Error('Reader has been aborted'));
      } else {
        this.executeRead(req.offset, req.length).then(req.resolve).catch(req.reject);
      }
    }
  }

  /**
   * Abort all in-flight requests
   */
  abort(): void {
    this.isAborted = true;
    this.abortController.abort();
    // Reject all queued requests
    for (const req of this.requestQueue) {
      req.reject(new Error('Reader has been aborted'));
    }
    this.requestQueue = [];
  }
}

/**
 * A frame of dynamic objects at a specific timestamp
 */
interface DynamicObjectFrame {
  timestamp: number;
  entities: SceneEntity[];
}

/**
 * Represents a loaded time range with its data
 */
interface LoadedRange {
  startTime: number;
  endTime: number;
  states: VehicleState[];
  telemetry: TelemetryPoint[];
  dynamicObjects: DynamicObjectFrame[];
}

/**
 * LRU Cache for loaded time ranges
 */
class RangeCache {
  private ranges: LoadedRange[] = [];
  private maxRanges: number;

  constructor(maxRanges: number = 5) {
    this.maxRanges = maxRanges;
  }

  /**
   * Find a range that contains the given timestamp
   */
  findRange(timestamp: number): LoadedRange | undefined {
    return this.ranges.find(
      (r) => timestamp >= r.startTime && timestamp <= r.endTime
    );
  }

  /**
   * Add a new range, evicting oldest if necessary
   */
  addRange(range: LoadedRange): void {
    console.log(`[RangeCache] Adding range ${range.startTime.toFixed(2)}-${range.endTime.toFixed(2)}s with ${range.states.length} states`);

    // Check if this range overlaps with existing - merge if so
    const overlapping = this.ranges.filter(
      (r) => !(range.endTime < r.startTime || range.startTime > r.endTime)
    );

    if (overlapping.length > 0) {
      console.log(`[RangeCache] Merging with ${overlapping.length} existing range(s)`);

      // Remove overlapping ranges
      this.ranges = this.ranges.filter(
        (r) => range.endTime < r.startTime || range.startTime > r.endTime
      );

      // Merge all states, telemetry, and dynamic objects
      const allStates = [...range.states];
      const allTelemetry = [...range.telemetry];
      const allDynamicObjects = [...(range.dynamicObjects || [])];

      for (const r of overlapping) {
        allStates.push(...r.states);
        allTelemetry.push(...r.telemetry);
        allDynamicObjects.push(...(r.dynamicObjects || []));
      }

      // Sort and dedupe by timestamp
      allStates.sort((a, b) => a.timestamp - b.timestamp);
      allTelemetry.sort((a, b) => a.timestamp - b.timestamp);
      allDynamicObjects.sort((a, b) => a.timestamp - b.timestamp);

      const mergedRange: LoadedRange = {
        startTime: Math.min(range.startTime, ...overlapping.map((r) => r.startTime)),
        endTime: Math.max(range.endTime, ...overlapping.map((r) => r.endTime)),
        states: this.dedupeByTimestamp(allStates),
        telemetry: this.dedupeByTimestamp(allTelemetry),
        dynamicObjects: this.dedupeByTimestamp(allDynamicObjects),
      };

      console.log(`[RangeCache] Merged range: ${mergedRange.startTime.toFixed(2)}-${mergedRange.endTime.toFixed(2)}s with ${mergedRange.states.length} states, ${mergedRange.dynamicObjects.length} dynamic frames`);
      this.ranges.push(mergedRange);
    } else {
      // Evict oldest if at capacity
      if (this.ranges.length >= this.maxRanges) {
        console.log(`[RangeCache] Evicting oldest range`);
        this.ranges.shift();
      }
      this.ranges.push(range);
    }

    // Log current cache state
    console.log(`[RangeCache] Now have ${this.ranges.length} range(s):`);
    for (const r of this.ranges) {
      console.log(`  ${r.startTime.toFixed(2)}-${r.endTime.toFixed(2)}s: ${r.states.length} states`);
    }
  }

  private dedupeByTimestamp<T extends { timestamp: number }>(items: T[]): T[] {
    const seen = new Set<number>();
    return items.filter((item) => {
      if (seen.has(item.timestamp)) return false;
      seen.add(item.timestamp);
      return true;
    });
  }

  /**
   * Get all loaded states sorted by timestamp
   */
  getAllStates(): VehicleState[] {
    const allStates: VehicleState[] = [];
    for (const range of this.ranges) {
      allStates.push(...range.states);
    }
    allStates.sort((a, b) => a.timestamp - b.timestamp);
    return this.dedupeByTimestamp(allStates);
  }

  /**
   * Get all loaded telemetry sorted by timestamp
   */
  getAllTelemetry(): TelemetryPoint[] {
    const allTelemetry: TelemetryPoint[] = [];
    for (const range of this.ranges) {
      allTelemetry.push(...range.telemetry);
    }
    allTelemetry.sort((a, b) => a.timestamp - b.timestamp);
    return this.dedupeByTimestamp(allTelemetry);
  }

  /**
   * Get all dynamic object frames sorted by timestamp
   */
  getAllDynamicObjects(): DynamicObjectFrame[] {
    const allFrames: DynamicObjectFrame[] = [];
    for (const range of this.ranges) {
      allFrames.push(...(range.dynamicObjects || []));
    }
    allFrames.sort((a, b) => a.timestamp - b.timestamp);
    return this.dedupeByTimestamp(allFrames);
  }

  /**
   * Get dynamic objects at a specific timestamp (finds closest frame)
   */
  getDynamicObjectsAtTime(timestamp: number): SceneEntity[] | null {
    const allFrames = this.getAllDynamicObjects();
    if (allFrames.length === 0) return null;

    // Binary search for closest frame
    let low = 0;
    let high = allFrames.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (allFrames[mid].timestamp < timestamp) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    // Return closest frame (prefer earlier frame if between two)
    if (low > 0 && Math.abs(allFrames[low - 1].timestamp - timestamp) < Math.abs(allFrames[low].timestamp - timestamp)) {
      return allFrames[low - 1].entities;
    }
    return allFrames[low].entities;
  }

  /**
   * Check if a timestamp is within any loaded range
   */
  hasTimestamp(timestamp: number): boolean {
    return this.findRange(timestamp) !== undefined;
  }

  clear(): void {
    this.ranges = [];
  }
}

/**
 * MCAP file loader with chunked/indexed access
 * Loads data on-demand rather than all at once
 */
export class MCAPLoader {
  private url: string;
  private httpReader: HttpRangeReader | null = null;
  private reader: McapIndexedReader | null = null;
  private index: MCAPFileIndex | null = null;
  private rangeCache: RangeCache = new RangeCache(5);
  private schemasInfo: string[] = [];
  private loadingRanges: Map<string, Promise<void>> = new Map();
  private loggedSchemas: Set<string> = new Set();

  // Chunk duration for loading (in seconds)
  private chunkDuration: number = 5;

  // Cached pose topics (computed once after index load)
  private poseTopics: string[] | null = null;

  constructor(url: string) {
    this.url = url;
  }

  /**
   * Get topics that contain pose/vehicle state data
   * Filters out LIDAR, map data, markers, etc. that are loaded separately
   */
  private getPoseTopics(): string[] {
    if (this.poseTopics) {
      return this.poseTopics;
    }

    if (!this.reader) {
      return [];
    }

    const topics: string[] = [];
    const poseSchemaNames = [
      'foxglove.PoseInFrame',
      'PoseInFrame',
      'Pose',
      'geometry_msgs/Pose',
      'nav_msgs/Odometry',
    ];

    // Exclude topics that are loaded separately via loadMapData()
    const excludedTopics = [
      '/semantic_map',
      '/drivable_area',
      '/LIDAR_TOP',
      '/markers/annotations',
    ];

    for (const [, channel] of this.reader.channelsById) {
      const schema = this.reader.schemasById.get(channel.schemaId);
      if (!schema) continue;

      // Check if this is a pose-related schema
      const isPoseSchema = poseSchemaNames.some(
        (name) => schema.name === name || schema.name.includes(name)
      );

      // Skip excluded topics (map data loaded separately)
      const isExcluded = excludedTopics.includes(channel.topic);

      if (isPoseSchema && !isExcluded) {
        topics.push(channel.topic);
      }
    }

    console.log(`[getPoseTopics] Found pose topics:`, topics);
    this.poseTopics = topics;
    return topics;
  }

  /**
   * Load MCAP file index (metadata only, not message data)
   * This is fast and allows immediate playback UI
   */
  async loadIndex(): Promise<MCAPFileIndex> {
    console.log('[loadIndex] Starting...');
    const indexStartTime = performance.now();

    // Abort any previous reader
    this.httpReader?.abort();

    const httpReader = new HttpRangeReader(this.url);
    this.httpReader = httpReader;

    console.log('[loadIndex] Initializing McapIndexedReader...');
    const readerInitStart = performance.now();
    this.reader = await McapIndexedReader.Initialize({
      readable: httpReader,
      decompressHandlers,
    });
    console.log(`[loadIndex] McapIndexedReader.Initialize() took ${(performance.now() - readerInitStart).toFixed(0)}ms`);

    // Log all topics in the MCAP file to understand what data is available
    console.log('[loadIndex] All topics in MCAP file:');
    for (const [id, channel] of this.reader.channelsById) {
      const schema = this.reader.schemasById.get(channel.schemaId);
      console.log(`  [${id}] ${channel.topic} -> ${schema?.name} (encoding: ${channel.messageEncoding})`);
    }

    // Build index from reader
    const chunkIndexes = [...this.reader.chunkIndexes];
    const channels = new Map(
      Array.from(this.reader.channelsById.entries()).map(([id, ch]) => [
        id,
        {
          id: ch.id,
          schemaId: ch.schemaId,
          topic: ch.topic,
          messageEncoding: ch.messageEncoding,
          metadata: ch.metadata,
        },
      ])
    );

    const schemas = new Map(
      Array.from(this.reader.schemasById.entries()).map(([id, schema]) => [
        id,
        {
          id: schema.id,
          name: schema.name,
          encoding: schema.encoding,
          data: schema.data,
        },
      ])
    );

    // Store schema info for error reporting
    this.schemasInfo = Array.from(this.reader.schemasById.values()).map(
      (s) => `${s.name} (encoding: ${s.encoding})`
    );

    // Calculate time range from chunk indexes
    let startTime = Number.MAX_SAFE_INTEGER;
    let endTime = 0;
    let messageCount = 0;

    for (const chunk of chunkIndexes) {
      const chunkStart = Number(chunk.messageStartTime) / 1e9;
      const chunkEnd = Number(chunk.messageEndTime) / 1e9;
      startTime = Math.min(startTime, chunkStart);
      endTime = Math.max(endTime, chunkEnd);
    }

    // Count messages
    for (const stats of this.reader.statistics?.channelMessageCounts?.entries() ?? []) {
      messageCount += Number(stats[1]);
    }

    if (startTime === Number.MAX_SAFE_INTEGER) {
      throw new Error('MCAP file contains no messages');
    }

    this.index = {
      startTime,
      endTime,
      duration: endTime - startTime,
      chunkIndexes,
      channels,
      schemas,
      messageCount,
    };

    console.log(`[loadIndex] Complete. Total time: ${(performance.now() - indexStartTime).toFixed(0)}ms`);
    console.log(`[loadIndex] Duration: ${(endTime - startTime).toFixed(2)}s, ${messageCount} messages, ${chunkIndexes.length} chunks`);

    return this.index;
  }

  /**
   * Load chunks for a specific time range
   * This is called on-demand as playback progresses or user seeks
   * @param targetTime - Relative playback time (0 to duration)
   */
  async loadTimeRange(targetTime: number): Promise<void> {
    if (!this.reader || !this.index) {
      throw new Error('Index not loaded. Call loadIndex() first.');
    }

    // Convert relative playback time to absolute MCAP timestamp
    const absoluteTargetTime = this.index.startTime + targetTime;

    // Calculate range to load (chunk around target time)
    const rangeStart = Math.max(this.index.startTime, absoluteTargetTime - this.chunkDuration / 2);
    const rangeEnd = Math.min(this.index.endTime, absoluteTargetTime + this.chunkDuration / 2);

    // Check if already loaded (using relative time for cache)
    if (this.rangeCache.hasTimestamp(targetTime)) {
      console.log(`[loadTimeRange] t=${targetTime.toFixed(2)}s already in cache, skipping`);
      return;
    }

    // Check if already loading this range
    const rangeKey = `${rangeStart.toFixed(2)}-${rangeEnd.toFixed(2)}`;
    const existingLoad = this.loadingRanges.get(rangeKey);
    if (existingLoad) {
      console.log(`[loadTimeRange] t=${targetTime.toFixed(2)}s already loading (range ${rangeKey}), waiting...`);
      return existingLoad;
    }

    console.log(`[loadTimeRange] Starting load for t=${targetTime.toFixed(2)}s (range ${rangeKey})`);

    // Start loading
    const loadPromise = this.doLoadRange(rangeStart, rangeEnd);
    this.loadingRanges.set(rangeKey, loadPromise);

    try {
      await loadPromise;
      console.log(`[loadTimeRange] Completed load for t=${targetTime.toFixed(2)}s`);
    } finally {
      this.loadingRanges.delete(rangeKey);
    }
  }

  /**
   * Actually load messages for a time range
   * @param startTime - Absolute MCAP start time
   * @param endTime - Absolute MCAP end time
   */
  private async doLoadRange(startTime: number, endTime: number): Promise<void> {
    if (!this.reader || !this.index) return;

    const loadStartTime = performance.now();

    const startTimeNs = BigInt(Math.floor(startTime * 1e9));
    const endTimeNs = BigInt(Math.floor(endTime * 1e9));

    // Base time for converting absolute to relative timestamps
    const baseTime = this.index.startTime;

    console.log(`[doLoadRange] Loading absolute time ${startTime.toFixed(2)} - ${endTime.toFixed(2)} (relative: ${(startTime - baseTime).toFixed(2)} - ${(endTime - baseTime).toFixed(2)})`);

    // Find pose topics to filter - we only need pose data for playback
    const poseTopics = this.getPoseTopics();
    console.log(`[doLoadRange] Filtering to pose topics: ${poseTopics.join(', ')}`);

    const states: VehicleState[] = [];
    const telemetry: TelemetryPoint[] = [];
    const parseErrors: string[] = [];

    // Debug: log first few messages to understand structure
    let msgCount = 0;

    console.log(`[doLoadRange] Starting message iteration...`);
    const iterStartTime = performance.now();

    // Read only pose messages in the time range (not LIDAR, map data, etc.)
    for await (const msg of this.reader.readMessages({
      startTime: startTimeNs,
      endTime: endTimeNs,
      topics: poseTopics,
    })) {
      // Convert absolute timestamp to relative (0 to duration)
      const absoluteTimestamp = Number(msg.logTime) / 1e9;
      const timestamp = absoluteTimestamp - baseTime;
      const channel = this.reader.channelsById.get(msg.channelId);

      if (!channel) continue;

      // Get schema name for this channel
      const schema = this.reader.schemasById.get(channel.schemaId);
      const schemaName = schema?.name ?? 'unknown';

      const result = this.parseVehicleState(
        msg.data,
        timestamp,
        channel.topic,
        channel.messageEncoding,
        schemaName
      );

      if (result.state) {
        states.push(result.state);
        telemetry.push({
          timestamp: result.state.timestamp,
          speed: result.state.speed,
          acceleration: result.state.acceleration,
          jerk: result.state.jerk,
          yawRate: result.state.yawRate,
        });
      } else if (result.error && parseErrors.length < 3) {
        parseErrors.push(result.error);
      }
      msgCount++;
    }

    console.log(`[doLoadRange] Pose iteration complete: ${msgCount} messages in ${(performance.now() - iterStartTime).toFixed(0)}ms`);

    // Now load dynamic objects (/markers/car and /markers/annotations) for this time range
    const dynamicObjects: DynamicObjectFrame[] = [];
    const dynamicIterStart = performance.now();
    let dynamicMsgCount = 0;

    // Topics that contain dynamic objects (vehicles, pedestrians, etc.)
    const dynamicTopics = ['/markers/car', '/markers/annotations'];
    const availableDynamicTopics = this.reader ? dynamicTopics.filter(topic =>
      Array.from(this.reader!.channelsById.values()).some(ch => ch.topic === topic)
    ) : [];

    if (availableDynamicTopics.length > 0) {
      for await (const msg of this.reader.readMessages({
        startTime: startTimeNs,
        endTime: endTimeNs,
        topics: availableDynamicTopics,
      })) {
        dynamicMsgCount++;
        const absoluteTimestamp = Number(msg.logTime) / 1e9;
        const timestamp = absoluteTimestamp - baseTime;
        const channel = this.reader.channelsById.get(msg.channelId);
        const schema = channel ? this.reader.schemasById.get(channel.schemaId) : null;

        if (schema) {
          try {
            const decoded = decodeProtobuf(msg.data, schema.data, schema.name);
            if (decoded && typeof decoded === 'object') {
              const sceneUpdate = decoded as SceneUpdate;
              if (sceneUpdate.entities && sceneUpdate.entities.length > 0) {
                // Find existing frame at this timestamp or create new one
                let frame = dynamicObjects.find(f => Math.abs(f.timestamp - timestamp) < 0.001);
                if (!frame) {
                  frame = { timestamp, entities: [] };
                  dynamicObjects.push(frame);
                }
                // Merge entities from different topics
                frame.entities.push(...sceneUpdate.entities);
              }
            }
          } catch (err) {
            // Skip decode errors
          }
        }
      }
    }

    console.log(`[doLoadRange] Dynamic objects iteration: ${dynamicMsgCount} messages, ${dynamicObjects.length} frames in ${(performance.now() - dynamicIterStart).toFixed(0)}ms`);

    // Sort by timestamp
    states.sort((a, b) => a.timestamp - b.timestamp);
    telemetry.sort((a, b) => a.timestamp - b.timestamp);
    dynamicObjects.sort((a, b) => a.timestamp - b.timestamp);

    // Add to cache using relative times
    const relativeStartTime = startTime - baseTime;
    const relativeEndTime = endTime - baseTime;
    this.rangeCache.addRange({
      startTime: relativeStartTime,
      endTime: relativeEndTime,
      states,
      telemetry,
      dynamicObjects,
    });

    // Log loading results for debugging (show relative times)
    console.log(
      `=== Loaded chunk ${relativeStartTime.toFixed(2)}-${relativeEndTime.toFixed(2)}s: ${states.length} vehicle states ===`
    );
    if (states.length > 0) {
      const first = states[0];
      const last = states[states.length - 1];
      console.log(`  Chunk positions: (${first.position.x.toFixed(2)}, ${first.position.y.toFixed(2)}) -> (${last.position.x.toFixed(2)}, ${last.position.y.toFixed(2)})`);
    }

    // Log total trajectory points after this chunk
    const totalStates = this.rangeCache.getAllStates();
    console.log(`  Total trajectory points after this chunk: ${totalStates.length}`);

    // Log if no data was parsed (for debugging)
    if (states.length === 0) {
      console.warn(
        `No vehicle states parsed for range ${relativeStartTime.toFixed(2)}-${relativeEndTime.toFixed(2)}s.`,
        `Available schemas: ${this.schemasInfo.join(', ')}`,
        parseErrors.length > 0 ? `Parse errors: ${parseErrors.join('; ')}` : ''
      );
    }

    console.log(`[doLoadRange] Total time: ${(performance.now() - loadStartTime).toFixed(0)}ms`);
  }

  /**
   * Prefetch chunks for upcoming playback
   */
  async prefetchRange(currentTime: number, playbackRate: number): Promise<void> {
    if (!this.index) return;

    // Prefetch ahead based on playback rate
    const prefetchAhead = this.chunkDuration * Math.max(1, playbackRate);
    const prefetchTime = currentTime + prefetchAhead;

    // Also clamp to duration
    const clampedPrefetchTime = Math.min(prefetchTime, this.index.duration);

    if (clampedPrefetchTime > currentTime && !this.rangeCache.hasTimestamp(clampedPrefetchTime)) {
      await this.loadTimeRange(clampedPrefetchTime);
    }
  }

  /**
   * Parse raw message data into VehicleState
   */
  private parseVehicleState(
    data: Uint8Array,
    timestamp: number,
    topic: string,
    encoding: string,
    schemaName: string
  ): { state: VehicleState | null; error?: string } {
    // Prefer /pose topic (foxglove.PoseInFrame) over /odom for vehicle position
    // /odom often contains odometry data that may drift or be nearly stationary
    // /pose typically contains the actual vehicle position
    const isPoseInFrame = schemaName === 'foxglove.PoseInFrame' || schemaName === 'PoseInFrame';
    const isOdom = topic === '/odom' && schemaName === 'Pose';

    // Only process pose-related schemas
    const poseSchemas = ['Pose', 'PoseInFrame', 'foxglove.PoseInFrame', 'geometry_msgs/Pose', 'nav_msgs/Odometry'];
    const isPoseSchema = poseSchemas.some(s => schemaName.includes(s) || schemaName === s);

    if (!isPoseSchema) {
      return { state: null }; // Skip non-pose messages silently
    }

    // Skip /odom if we have /pose available (foxglove.PoseInFrame)
    // We'll check this by preferring PoseInFrame when available
    if (isOdom && !isPoseInFrame) {
      // Still process /odom but with lower priority - the caller will need to handle dedup
      // For now, let's try to decode PoseInFrame messages first
    }

    // For protobuf encoding, we need to decode using the schema
    if (encoding === 'protobuf') {
      // Try to decode PoseInFrame protobuf messages
      if (isPoseInFrame) {
        const schema = this.reader?.schemasById.get(
          Array.from(this.reader?.channelsById.values() || [])
            .find(ch => ch.topic === topic)?.schemaId || 0
        );
        if (schema) {
          try {
            const decoded = decodeProtobuf(data, schema.data, schemaName);
            if (decoded && typeof decoded === 'object') {
              const poseInFrame = decoded as { pose?: { position?: { x: number; y: number; z: number }; orientation?: { x: number; y: number; z: number; w: number } } };
              if (poseInFrame.pose?.position) {
                // Log successful parse every 100 messages
                const logKey = `parsed_protobuf_${Math.floor(timestamp)}`;
                if (!this.loggedSchemas.has(logKey)) {
                  this.loggedSchemas.add(logKey);
                  console.log(`[parseVehicleState] Successfully parsed PoseInFrame at t=${timestamp.toFixed(2)}s: pos=(${poseInFrame.pose.position.x.toFixed(2)}, ${poseInFrame.pose.position.y.toFixed(2)})`);
                }
                return {
                  state: {
                    timestamp,
                    position: {
                      x: poseInFrame.pose.position.x ?? 0,
                      y: poseInFrame.pose.position.y ?? 0,
                      z: poseInFrame.pose.position.z ?? 0,
                    },
                    rotation: poseInFrame.pose.orientation ?? { x: 0, y: 0, z: 0, w: 1 },
                    speed: 0,
                    acceleration: 0,
                    yawRate: 0,
                    jerk: 0,
                  },
                };
              }
            }
          } catch (err) {
            console.warn(`Failed to decode PoseInFrame:`, err);
          }
        }
      }
      return {
        state: null,
        error: `Schema "${schemaName}": protobuf encoding requires schema definition`,
      };
    }

    try {
      // Try to parse as JSON
      const decoder = new TextDecoder();
      const jsonStr = decoder.decode(data);
      const parsed = JSON.parse(jsonStr);

      // Try various pose data structures
      let position = { x: 0, y: 0, z: 0 };
      let orientation = { x: 0, y: 0, z: 0, w: 1 };
      let speed = 0;
      let acceleration = 0;
      let yawRate = 0;
      let foundPose = false;

      // Structure 1: NuScenes format - pos, vel, accel, orientation, rotation_rate
      if (parsed.pos !== undefined) {
        position = {
          x: parsed.pos.x ?? 0,
          y: parsed.pos.y ?? 0,
          z: parsed.pos.z ?? 0,
        };
        foundPose = true;
      }
      if (parsed.orientation !== undefined) {
        orientation = {
          x: parsed.orientation.x ?? 0,
          y: parsed.orientation.y ?? 0,
          z: parsed.orientation.z ?? 0,
          w: parsed.orientation.w ?? 1,
        };
      }
      if (parsed.vel !== undefined) {
        // Velocity vector - compute speed as magnitude or use x component
        speed = parsed.vel.x ?? Math.sqrt(
          (parsed.vel.x ?? 0) ** 2 +
          (parsed.vel.y ?? 0) ** 2 +
          (parsed.vel.z ?? 0) ** 2
        );
      }
      if (parsed.accel !== undefined) {
        // Use x component of acceleration (forward acceleration)
        acceleration = parsed.accel.x ?? 0;
      }
      if (parsed.rotation_rate !== undefined) {
        // Use z component for yaw rate
        yawRate = parsed.rotation_rate.z ?? 0;
      }

      // Structure 2: Direct position/orientation at root
      if (!foundPose && parsed.position !== undefined) {
        position = {
          x: parsed.position.x ?? parsed.position[0] ?? 0,
          y: parsed.position.y ?? parsed.position[1] ?? 0,
          z: parsed.position.z ?? parsed.position[2] ?? 0,
        };
        foundPose = true;
        if (parsed.orientation !== undefined) {
          orientation = {
            x: parsed.orientation.x ?? parsed.orientation[0] ?? 0,
            y: parsed.orientation.y ?? parsed.orientation[1] ?? 0,
            z: parsed.orientation.z ?? parsed.orientation[2] ?? 0,
            w: parsed.orientation.w ?? parsed.orientation[3] ?? 1,
          };
        }
      }

      // Structure 3: Nested under pose
      if (!foundPose && parsed.pose?.position !== undefined) {
        position = {
          x: parsed.pose.position.x ?? 0,
          y: parsed.pose.position.y ?? 0,
          z: parsed.pose.position.z ?? 0,
        };
        foundPose = true;
        if (parsed.pose?.orientation !== undefined) {
          orientation = {
            x: parsed.pose.orientation.x ?? 0,
            y: parsed.pose.orientation.y ?? 0,
            z: parsed.pose.orientation.z ?? 0,
            w: parsed.pose.orientation.w ?? 1,
          };
        }
      }

      // Structure 4: x, y, z directly at root
      if (!foundPose && parsed.x !== undefined && parsed.y !== undefined) {
        position = {
          x: parsed.x,
          y: parsed.y,
          z: parsed.z ?? 0,
        };
        foundPose = true;
      }

      if (!foundPose) {
        return {
          state: null,
          error: `Schema "${schemaName}": No position data found in message`,
        };
      }

      // Use parsed values or fallbacks
      return {
        state: {
          timestamp,
          position,
          rotation: orientation,
          speed: speed || parsed.twist?.linear?.x || parsed.speed || parsed.velocity || 0,
          acceleration: acceleration || parsed.acceleration || 0,
          yawRate: yawRate || parsed.twist?.angular?.z || parsed.yaw_rate || 0,
          jerk: parsed.jerk ?? 0,
        },
      };
    } catch {
      return {
        state: null,
        error: `Schema "${schemaName}": Unable to parse ${encoding} as JSON`,
      };
    }
  }

  /**
   * Get vehicle state at specific timestamp (with interpolation)
   * Returns null if data for that time hasn't been loaded yet
   */
  getStateAtTime(timestamp: number): VehicleState | null {
    const states = this.rangeCache.getAllStates();
    if (states.length === 0) {
      // Log occasionally when no states available
      if (!this.loggedSchemas.has(`no_states_${Math.floor(timestamp)}`)) {
        this.loggedSchemas.add(`no_states_${Math.floor(timestamp)}`);
        console.warn(`getStateAtTime(${timestamp.toFixed(2)}): No states in cache!`);
      }
      return null;
    }

    // Debug: log state range periodically to track chunk loading progress
    const debugKey = `state_range_${Math.floor(timestamp / 3)}`; // Log every 3 seconds
    if (!this.loggedSchemas.has(debugKey)) {
      this.loggedSchemas.add(debugKey);
      const first = states[0];
      const last = states[states.length - 1];
      console.log(`=== getStateAtTime(${timestamp.toFixed(2)}) ===`);
      console.log(`  States in cache: ${states.length}`);
      console.log(`  Cache time range: ${first.timestamp.toFixed(2)}s - ${last.timestamp.toFixed(2)}s`);
      console.log(`  First pos: (${first.position.x.toFixed(2)}, ${first.position.y.toFixed(2)}, ${first.position.z.toFixed(2)})`);
      console.log(`  Last pos: (${last.position.x.toFixed(2)}, ${last.position.y.toFixed(2)}, ${last.position.z.toFixed(2)})`);

      // Check if positions actually change
      const posChange = {
        x: last.position.x - first.position.x,
        y: last.position.y - first.position.y,
        z: last.position.z - first.position.z,
      };
      console.log(`  Position change: (${posChange.x.toFixed(2)}, ${posChange.y.toFixed(2)}, ${posChange.z.toFixed(2)})`);

      // Check if timestamp is within range
      if (timestamp < first.timestamp || timestamp > last.timestamp) {
        console.warn(`  WARNING: Requested time ${timestamp.toFixed(2)} is OUTSIDE cache range!`);
      }
    }

    // Binary search for closest state
    let low = 0;
    let high = states.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (states[mid].timestamp < timestamp) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    // Handle edge cases
    if (low === 0) {
      // Requested time is before first state
      const state = states[0];
      if (timestamp < state.timestamp - 0.5) {
        console.warn(`[getStateAtTime] Requested t=${timestamp.toFixed(2)}s but earliest state is at ${state.timestamp.toFixed(2)}s`);
      }
      return state;
    }
    if (low >= states.length) {
      // Requested time is after last state - THIS IS THE PROBLEM CASE
      const state = states[states.length - 1];
      if (timestamp > state.timestamp + 0.5) {
        console.warn(`[getStateAtTime] Requested t=${timestamp.toFixed(2)}s but latest state is at ${state.timestamp.toFixed(2)}s - NEED TO LOAD MORE DATA`);
      }
      return state;
    }

    // Interpolate between two closest states
    const before = states[low - 1];
    const after = states[low];
    const t = (timestamp - before.timestamp) / (after.timestamp - before.timestamp);

    return this.interpolateStates(before, after, t);
  }

  /**
   * Check if data is loaded for a given timestamp
   */
  hasDataForTime(timestamp: number): boolean {
    return this.rangeCache.hasTimestamp(timestamp);
  }

  /**
   * Interpolate between two vehicle states
   */
  private interpolateStates(a: VehicleState, b: VehicleState, t: number): VehicleState {
    const lerp = (v1: number, v2: number) => v1 + (v2 - v1) * t;

    return {
      timestamp: lerp(a.timestamp, b.timestamp),
      position: {
        x: lerp(a.position.x, b.position.x),
        y: lerp(a.position.y, b.position.y),
        z: lerp(a.position.z, b.position.z),
      },
      rotation: this.slerpQuaternion(a.rotation, b.rotation, t),
      speed: lerp(a.speed, b.speed),
      acceleration: lerp(a.acceleration, b.acceleration),
      yawRate: lerp(a.yawRate, b.yawRate),
      jerk: lerp(a.jerk, b.jerk),
    };
  }

  /**
   * Spherical linear interpolation for quaternions
   */
  private slerpQuaternion(
    a: { x: number; y: number; z: number; w: number },
    b: { x: number; y: number; z: number; w: number },
    t: number
  ): { x: number; y: number; z: number; w: number } {
    let dot = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;

    const bCopy = { ...b };
    if (dot < 0) {
      bCopy.x = -b.x;
      bCopy.y = -b.y;
      bCopy.z = -b.z;
      bCopy.w = -b.w;
      dot = -dot;
    }

    if (dot > 0.9995) {
      return {
        x: a.x + (bCopy.x - a.x) * t,
        y: a.y + (bCopy.y - a.y) * t,
        z: a.z + (bCopy.z - a.z) * t,
        w: a.w + (bCopy.w - a.w) * t,
      };
    }

    const theta0 = Math.acos(dot);
    const theta = theta0 * t;
    const sinTheta = Math.sin(theta);
    const sinTheta0 = Math.sin(theta0);

    const s0 = Math.cos(theta) - (dot * sinTheta) / sinTheta0;
    const s1 = sinTheta / sinTheta0;

    return {
      x: a.x * s0 + bCopy.x * s1,
      y: a.y * s0 + bCopy.y * s1,
      z: a.z * s0 + bCopy.z * s1,
      w: a.w * s0 + bCopy.w * s1,
    };
  }

  /**
   * Get all currently loaded telemetry data
   */
  getAllTelemetry(): TelemetryPoint[] {
    return this.rangeCache.getAllTelemetry();
  }

  /**
   * Get dynamic objects (other vehicles) at a specific timestamp
   */
  getDynamicObjectsAtTime(timestamp: number): SceneEntity[] | null {
    return this.rangeCache.getDynamicObjectsAtTime(timestamp);
  }

  /**
   * Get all currently loaded vehicle states
   */
  getAllVehicleStates(): VehicleState[] {
    return this.rangeCache.getAllStates();
  }

  /**
   * Get trajectory from loaded data
   */
  getTrajectory(): Array<{ x: number; y: number; z: number }> {
    return this.rangeCache.getAllStates().map((s) => s.position);
  }

  /**
   * Load the full trajectory (all positions) for visualization
   * This loads all Pose messages to get the complete path
   */
  async loadFullTrajectory(): Promise<Array<{ x: number; y: number; z: number }>> {
    console.log('loadFullTrajectory called, reader:', !!this.reader, 'index:', !!this.index);

    if (!this.reader || !this.index) {
      console.log('loadFullTrajectory: No reader or index, returning empty');
      return [];
    }

    // Find pose topics - prefer foxglove.PoseInFrame over Pose
    // /pose (PoseInFrame) typically has the actual vehicle position
    // /odom (Pose) often has odometry data that may be stationary
    let poseTopics: string[] = [];
    let poseInFrameTopics: string[] = [];

    for (const [, channel] of this.reader.channelsById) {
      const schema = this.reader.schemasById.get(channel.schemaId);
      if (schema?.name === 'foxglove.PoseInFrame' || schema?.name === 'PoseInFrame') {
        poseInFrameTopics.push(channel.topic);
      } else if (schema?.name === 'Pose') {
        poseTopics.push(channel.topic);
      }
    }

    console.log('loadFullTrajectory: PoseInFrame topics found:', poseInFrameTopics);
    console.log('loadFullTrajectory: Pose topics found:', poseTopics);

    // Prefer PoseInFrame topics if available
    const topicsToUse = poseInFrameTopics.length > 0 ? poseInFrameTopics : poseTopics;
    const usePoseInFrame = poseInFrameTopics.length > 0;

    console.log('loadFullTrajectory: Using topics:', topicsToUse, usePoseInFrame ? '(PoseInFrame)' : '(Pose)');

    // Also log ALL channels and their schemas for debugging
    console.log('loadFullTrajectory: All channels:');
    for (const [id, channel] of this.reader.channelsById) {
      const schema = this.reader.schemasById.get(channel.schemaId);
      console.log(`  Channel ${id}: ${channel.topic} -> schema: ${schema?.name}`);
    }

    if (topicsToUse.length === 0) {
      console.log('loadFullTrajectory: No pose topics found');
      return [];
    }

    const positions: Array<{ x: number; y: number; z: number; timestamp: number }> = [];
    const baseTime = this.index.startTime;

    console.log('loadFullTrajectory: Reading Pose messages only...');

    // Limit trajectory points for performance (1 point per 0.1 seconds is plenty for visualization)
    const maxPoints = 10000;
    let lastTimestamp = -1;
    const minInterval = 0.1; // Minimum time between points in seconds
    let messageCount = 0;

    try {
      // Read pose messages by filtering topics
      for await (const msg of this.reader.readMessages({ topics: topicsToUse })) {
        messageCount++;

        // Log first message to confirm iteration is working
        if (messageCount === 1) {
          console.log('loadFullTrajectory: First message received');
        }

        if (positions.length >= maxPoints) {
          console.log('loadFullTrajectory: Reached max points limit');
          break;
        }

        try {
          let x = 0, y = 0, z = 0;
          let foundPosition = false;

          if (usePoseInFrame) {
            // Decode PoseInFrame protobuf message
            const channel = this.reader.channelsById.get(msg.channelId);
            const schema = channel ? this.reader.schemasById.get(channel.schemaId) : null;
            if (schema) {
              const decoded = decodeProtobuf(msg.data, schema.data, schema.name);
              if (decoded && typeof decoded === 'object') {
                const poseInFrame = decoded as { pose?: { position?: { x: number; y: number; z: number } } };
                if (poseInFrame.pose?.position) {
                  x = poseInFrame.pose.position.x ?? 0;
                  y = poseInFrame.pose.position.y ?? 0;
                  z = poseInFrame.pose.position.z ?? 0;
                  foundPosition = true;
                }
              }
            }
          } else {
            // Parse JSON Pose message
            const decoder = new TextDecoder();
            const jsonStr = decoder.decode(msg.data);
            const parsed = JSON.parse(jsonStr);

            if (parsed.pos) {
              x = Number(parsed.pos.x) || 0;
              y = Number(parsed.pos.y) || 0;
              z = Number(parsed.pos.z) || 0;
              foundPosition = true;
            }
          }

          if (foundPosition) {
            const timestamp = Number(msg.logTime) / 1e9 - baseTime;

            // Skip if too close to last point (downsample for performance)
            if (timestamp - lastTimestamp < minInterval) continue;
            lastTimestamp = timestamp;

            positions.push({ x, y, z, timestamp });

            // Log first few and last positions to debug
            if (positions.length <= 3) {
              console.log(`loadFullTrajectory point ${positions.length}: (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}) at t=${timestamp.toFixed(2)}`);
            }

            // Log progress every 100 points
            if (positions.length % 100 === 0) {
              console.log(`loadFullTrajectory: ${positions.length} points at (${x.toFixed(2)}, ${y.toFixed(2)})`);
            }
          }
        } catch {
          // Skip unparseable messages
        }
      }
    } catch (err) {
      console.error('loadFullTrajectory: Error reading messages:', err);
      // Return whatever we have so far
    }

    console.log(`loadFullTrajectory: Processed ${messageCount} messages, got ${positions.length} positions`);

    console.log(`loadFullTrajectory: Found ${positions.length} positions`);

    // Sort by timestamp and return just positions
    positions.sort((a, b) => a.timestamp - b.timestamp);

    // Debug: compare first and last positions to verify movement
    if (positions.length >= 2) {
      const first = positions[0];
      const last = positions[positions.length - 1];
      const dist = Math.sqrt(
        Math.pow(last.x - first.x, 2) +
        Math.pow(last.y - first.y, 2) +
        Math.pow(last.z - first.z, 2)
      );
      console.log(`loadFullTrajectory: Total distance traveled: ${dist.toFixed(2)}m`);
      console.log(`  First pos: (${first.x.toFixed(2)}, ${first.y.toFixed(2)}, ${first.z.toFixed(2)}) at t=${first.timestamp.toFixed(2)}s`);
      console.log(`  Last pos: (${last.x.toFixed(2)}, ${last.y.toFixed(2)}, ${last.z.toFixed(2)}) at t=${last.timestamp.toFixed(2)}s`);
    }

    return positions.map(p => ({ x: p.x, y: p.y, z: p.z }));
  }

  /**
   * Get file index
   */
  getIndex(): MCAPFileIndex | null {
    return this.index;
  }

  /**
   * Get schema info for error reporting
   */
  getSchemaInfo(): string[] {
    return this.schemasInfo;
  }

  /**
   * Load map data (semantic map, drivable area, point cloud)
   * These are typically static per simulation, so we load them once
   */
  async loadMapData(): Promise<MapData> {
    console.log('=== MCAPLoader.loadMapData called ===');
    const mapLoadStartTime = performance.now();

    if (!this.reader || !this.index) {
      console.warn('[loadMapData] No reader or index available');
      return { semanticMap: null, drivableArea: null, pointCloud: null, markers: null, dynamicObjects: null };
    }

    const mapData: MapData = {
      semanticMap: null,
      drivableArea: null,
      pointCloud: null,
      markers: null,
      dynamicObjects: null,
    };

    // Find channels for map-related topics
    const topicMap: Record<string, { channelId: number; schemaName: string; schemaData: Uint8Array }> = {};

    for (const [id, channel] of this.reader.channelsById) {
      const schema = this.reader.schemasById.get(channel.schemaId);
      if (!schema) continue;

      // We want: /semantic_map, /drivable_area, /LIDAR_TOP, /markers/annotations, /markers/car
      if (['/semantic_map', '/drivable_area', '/LIDAR_TOP', '/markers/annotations', '/markers/car'].includes(channel.topic)) {
        topicMap[channel.topic] = {
          channelId: id,
          schemaName: schema.name,
          schemaData: schema.data,
        };
      }
    }

    console.log('[loadMapData] Found topics:', Object.keys(topicMap));

    // Read one message from each topic (map data is typically static)
    const topics = Object.keys(topicMap);
    if (topics.length === 0) {
      console.log('[loadMapData] No map topics found');
      return mapData;
    }

    // Only read messages from the first second of the simulation
    // Map data is static, so first message of each topic is sufficient
    const startTimeNs = BigInt(Math.floor(this.index.startTime * 1e9));
    const endTimeNs = BigInt(Math.floor((this.index.startTime + 1) * 1e9));
    console.log(`[loadMapData] Time filter: first 1 second only`);

    let messageCount = 0;
    const iterStartTime = performance.now();

    try {
      for await (const msg of this.reader.readMessages({
        topics,
        startTime: startTimeNs,
        endTime: endTimeNs,
      })) {
        messageCount++;
        // Look up channel to get topic name
        const channel = this.reader.channelsById.get(msg.channelId);
        if (!channel) continue;

        const topic = channel.topic;
        const topicInfo = topicMap[topic];
        if (!topicInfo) continue;

        // Only process first message of each topic
        if (topic === '/semantic_map' && !mapData.semanticMap) {
          const decodeStart = performance.now();
          const decoded = decodeProtobuf(msg.data, topicInfo.schemaData, topicInfo.schemaName);
          if (decoded) {
            mapData.semanticMap = decoded as SceneUpdate;
            console.log(`[loadMapData] /semantic_map decoded in ${(performance.now() - decodeStart).toFixed(0)}ms, entities: ${mapData.semanticMap.entities?.length ?? 0}`);
          }
        } else if (topic === '/drivable_area' && !mapData.drivableArea) {
          const decodeStart = performance.now();
          const decoded = decodeProtobuf(msg.data, topicInfo.schemaData, topicInfo.schemaName);
          if (decoded) {
            mapData.drivableArea = decoded as Grid;
            console.log(`[loadMapData] /drivable_area decoded in ${(performance.now() - decodeStart).toFixed(0)}ms, size: ${mapData.drivableArea.columnCount}x${Math.floor((mapData.drivableArea.data?.length ?? 0) / (mapData.drivableArea.rowStride || 1))}`);
          }
        } else if (topic === '/LIDAR_TOP' && !mapData.pointCloud) {
          const decodeStart = performance.now();
          const decoded = decodeProtobuf(msg.data, topicInfo.schemaData, topicInfo.schemaName);
          if (decoded) {
            mapData.pointCloud = decoded as PointCloud;
            const numPoints = Math.floor((mapData.pointCloud.data?.length ?? 0) / (mapData.pointCloud.pointStride || 1));
            console.log(`[loadMapData] /LIDAR_TOP decoded in ${(performance.now() - decodeStart).toFixed(0)}ms, points: ${numPoints}`);
          }
        } else if (topic === '/markers/annotations' && !mapData.markers) {
          const decodeStart = performance.now();
          const decoded = decodeProtobuf(msg.data, topicInfo.schemaData, topicInfo.schemaName);
          if (decoded) {
            mapData.markers = decoded as SceneUpdate;
            console.log(`[loadMapData] /markers/annotations decoded in ${(performance.now() - decodeStart).toFixed(0)}ms, entities: ${mapData.markers.entities?.length ?? 0}`);
          }
        } else if (topic === '/markers/car' && !mapData.dynamicObjects) {
          const decodeStart = performance.now();
          const decoded = decodeProtobuf(msg.data, topicInfo.schemaData, topicInfo.schemaName);
          if (decoded) {
            mapData.dynamicObjects = decoded as SceneUpdate;
            console.log(`[loadMapData] /markers/car decoded in ${(performance.now() - decodeStart).toFixed(0)}ms, entities: ${mapData.dynamicObjects.entities?.length ?? 0}`);
          }
        }

        // Check if we have all the data we need
        if (mapData.semanticMap && mapData.drivableArea && mapData.pointCloud && mapData.markers && mapData.dynamicObjects) {
          break;
        }
      }
    } catch (err) {
      console.error('[loadMapData] Error reading messages:', err);
    }

    const iterTime = performance.now() - iterStartTime;
    const totalTime = performance.now() - mapLoadStartTime;
    console.log(`[loadMapData] Message iteration: ${messageCount} messages in ${iterTime.toFixed(0)}ms`);
    console.log(`[loadMapData] Complete. Total time: ${totalTime.toFixed(0)}ms`);
    return mapData;
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    clearProtobufCache();
    // Abort all in-flight HTTP requests
    this.httpReader?.abort();
    this.httpReader = null;
    this.reader = null;
    this.index = null;
    this.rangeCache.clear();
    this.loadingRanges.clear();
  }
}
