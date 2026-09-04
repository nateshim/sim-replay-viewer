import { McapIndexedReader } from '@mcap/core';
import * as lz4 from 'lz4js';
import type { MCAPFileIndex } from './types';
import type { VehicleState, TelemetryPoint } from '../types';

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
 * Supports aborting in-flight requests when disposed
 */
class HttpRangeReader {
  private url: string;
  private fileSize: number | null = null;
  private abortController: AbortController;
  private isAborted: boolean = false;

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
  }

  /**
   * Abort all in-flight requests
   */
  abort(): void {
    this.isAborted = true;
    this.abortController.abort();
  }
}

/**
 * Represents a loaded time range with its data
 */
interface LoadedRange {
  startTime: number;
  endTime: number;
  states: VehicleState[];
  telemetry: TelemetryPoint[];
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
    // Check if this range overlaps with existing - merge if so
    const overlapping = this.ranges.filter(
      (r) => !(range.endTime < r.startTime || range.startTime > r.endTime)
    );

    if (overlapping.length > 0) {
      // Remove overlapping ranges
      this.ranges = this.ranges.filter(
        (r) => range.endTime < r.startTime || range.startTime > r.endTime
      );

      // Merge all states and telemetry
      const allStates = [...range.states];
      const allTelemetry = [...range.telemetry];

      for (const r of overlapping) {
        allStates.push(...r.states);
        allTelemetry.push(...r.telemetry);
      }

      // Sort and dedupe by timestamp
      allStates.sort((a, b) => a.timestamp - b.timestamp);
      allTelemetry.sort((a, b) => a.timestamp - b.timestamp);

      const mergedRange: LoadedRange = {
        startTime: Math.min(range.startTime, ...overlapping.map((r) => r.startTime)),
        endTime: Math.max(range.endTime, ...overlapping.map((r) => r.endTime)),
        states: this.dedupeByTimestamp(allStates),
        telemetry: this.dedupeByTimestamp(allTelemetry),
      };

      this.ranges.push(mergedRange);
    } else {
      // Evict oldest if at capacity
      if (this.ranges.length >= this.maxRanges) {
        this.ranges.shift();
      }
      this.ranges.push(range);
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

  constructor(url: string) {
    this.url = url;
  }

  /**
   * Load MCAP file index (metadata only, not message data)
   * This is fast and allows immediate playback UI
   */
  async loadIndex(): Promise<MCAPFileIndex> {
    // Abort any previous reader
    this.httpReader?.abort();

    const httpReader = new HttpRangeReader(this.url);
    this.httpReader = httpReader;
    this.reader = await McapIndexedReader.Initialize({
      readable: httpReader,
      decompressHandlers,
    });

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
      return;
    }

    // Check if already loading this range
    const rangeKey = `${rangeStart.toFixed(2)}-${rangeEnd.toFixed(2)}`;
    const existingLoad = this.loadingRanges.get(rangeKey);
    if (existingLoad) {
      return existingLoad;
    }

    // Start loading
    const loadPromise = this.doLoadRange(rangeStart, rangeEnd);
    this.loadingRanges.set(rangeKey, loadPromise);

    try {
      await loadPromise;
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

    const startTimeNs = BigInt(Math.floor(startTime * 1e9));
    const endTimeNs = BigInt(Math.floor(endTime * 1e9));

    // Base time for converting absolute to relative timestamps
    const baseTime = this.index.startTime;

    const states: VehicleState[] = [];
    const telemetry: TelemetryPoint[] = [];
    const parseErrors: string[] = [];

    // Debug: log first few messages to understand structure
    let msgCount = 0;
    const loggedTopics = new Set<string>();

    // Read only messages in the time range
    for await (const msg of this.reader.readMessages({
      startTime: startTimeNs,
      endTime: endTimeNs,
    })) {
      // Convert absolute timestamp to relative (0 to duration)
      const absoluteTimestamp = Number(msg.logTime) / 1e9;
      const timestamp = absoluteTimestamp - baseTime;
      const channel = this.reader.channelsById.get(msg.channelId);

      if (!channel) continue;

      // Get schema name for this channel
      const schema = this.reader.schemasById.get(channel.schemaId);
      const schemaName = schema?.name ?? 'unknown';

      // Debug: log first message of each topic/schema combination
      const topicKey = `${channel.topic}:${schemaName}`;
      if (!loggedTopics.has(topicKey) && msgCount < 20) {
        loggedTopics.add(topicKey);
        msgCount++;
        console.log(`Topic: ${channel.topic}, Schema: ${schemaName}, Encoding: ${channel.messageEncoding}`);
        try {
          const decoder = new TextDecoder();
          const jsonStr = decoder.decode(msg.data);
          const parsed = JSON.parse(jsonStr);
          console.log(`  Data sample:`, JSON.stringify(parsed, null, 2).slice(0, 500));
        } catch (e) {
          console.log(`  Data: [Binary, ${msg.data.length} bytes]`);
        }
      }

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
    }

    // Sort by timestamp
    states.sort((a, b) => a.timestamp - b.timestamp);
    telemetry.sort((a, b) => a.timestamp - b.timestamp);

    // Add to cache using relative times
    const relativeStartTime = startTime - baseTime;
    const relativeEndTime = endTime - baseTime;
    this.rangeCache.addRange({
      startTime: relativeStartTime,
      endTime: relativeEndTime,
      states,
      telemetry,
    });

    // Log loading results for debugging (show relative times)
    console.log(
      `Loaded range ${relativeStartTime.toFixed(2)}-${relativeEndTime.toFixed(2)}s: ${states.length} vehicle states`
    );

    // Log if no data was parsed (for debugging)
    if (states.length === 0) {
      console.warn(
        `No vehicle states parsed for range ${relativeStartTime.toFixed(2)}-${relativeEndTime.toFixed(2)}s.`,
        `Available schemas: ${this.schemasInfo.join(', ')}`,
        parseErrors.length > 0 ? `Parse errors: ${parseErrors.join('; ')}` : ''
      );
    }
  }

  /**
   * Prefetch chunks for upcoming playback
   */
  async prefetchRange(currentTime: number, playbackRate: number): Promise<void> {
    if (!this.index) return;

    // Prefetch ahead based on playback rate
    const prefetchAhead = this.chunkDuration * Math.max(1, playbackRate);
    const prefetchTime = currentTime + prefetchAhead;

    if (prefetchTime <= this.index.endTime && !this.rangeCache.hasTimestamp(prefetchTime)) {
      // Don't await - let it load in background
      this.loadTimeRange(prefetchTime).catch((err) => {
        console.warn('Prefetch failed:', err);
      });
    }
  }

  /**
   * Parse raw message data into VehicleState
   */
  private parseVehicleState(
    data: Uint8Array,
    timestamp: number,
    _topic: string,
    encoding: string,
    schemaName: string
  ): { state: VehicleState | null; error?: string } {
    // Only process pose-related schemas
    const poseSchemas = ['Pose', 'PoseInFrame', 'foxglove.PoseInFrame', 'geometry_msgs/Pose', 'nav_msgs/Odometry'];
    const isPoseSchema = poseSchemas.some(s => schemaName.includes(s) || schemaName === s);

    if (!isPoseSchema) {
      return { state: null }; // Skip non-pose messages silently
    }

    // For protobuf encoding, we can't parse without the schema definition
    if (encoding === 'protobuf') {
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

      // Debug: log first message of each schema type
      if (!this.loggedSchemas.has(schemaName)) {
        this.loggedSchemas.add(schemaName);
        console.log(`Sample ${schemaName} message - ALL FIELDS:`, Object.keys(parsed));
        console.log(`Full message:`, JSON.stringify(parsed, null, 2).slice(0, 1500));
      }

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

      // Debug: log parsed positions to compare with trajectory
      if (!this.loggedSchemas.has(`${schemaName}_parsed`)) {
        this.loggedSchemas.add(`${schemaName}_parsed`);
        console.log(`Successfully parsed ${schemaName}: pos=(${position.x.toFixed(2)}, ${position.y.toFixed(2)}), timestamp=${timestamp.toFixed(2)}`);
      }
      // Log a few more positions to see if they change
      if (timestamp < 1.0 || (timestamp > 5.0 && timestamp < 5.5)) {
        console.log(`Vehicle pos at t=${timestamp.toFixed(2)}: (${position.x.toFixed(2)}, ${position.y.toFixed(2)})`);
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
    if (states.length === 0) return null;

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
    if (low === 0) return states[0];
    if (low >= states.length) return states[states.length - 1];

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

    // Find the Pose topic/channel to filter messages
    let poseTopics: string[] = [];
    for (const [, channel] of this.reader.channelsById) {
      const schema = this.reader.schemasById.get(channel.schemaId);
      if (schema?.name === 'Pose') {
        poseTopics.push(channel.topic);
      }
    }

    console.log('loadFullTrajectory: Pose topics:', poseTopics);

    if (poseTopics.length === 0) {
      console.log('loadFullTrajectory: No Pose topics found');
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
      // Read only Pose messages by filtering topics
      for await (const msg of this.reader.readMessages({ topics: poseTopics })) {
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
          const decoder = new TextDecoder();
          const jsonStr = decoder.decode(msg.data);
          const parsed = JSON.parse(jsonStr);

          if (parsed.pos) {
            const timestamp = Number(msg.logTime) / 1e9 - baseTime;

            // Skip if too close to last point (downsample for performance)
            if (timestamp - lastTimestamp < minInterval) continue;
            lastTimestamp = timestamp;

            const x = Number(parsed.pos.x) || 0;
            const y = Number(parsed.pos.y) || 0;
            const z = Number(parsed.pos.z) || 0;

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
   * Clean up resources
   */
  dispose(): void {
    // Abort all in-flight HTTP requests
    this.httpReader?.abort();
    this.httpReader = null;
    this.reader = null;
    this.index = null;
    this.rangeCache.clear();
    this.loadingRanges.clear();
  }
}
