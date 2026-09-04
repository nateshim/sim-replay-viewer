import { McapIndexedReader } from '@mcap/core';
import type { MCAPFileIndex, ChunkData } from './types';
import type { VehicleState, TelemetryPoint } from '../types';

/**
 * Custom IReadable implementation for HTTP range requests
 */
class HttpRangeReader {
  private url: string;
  private fileSize: number | null = null;

  constructor(url: string) {
    this.url = url;
  }

  async size(): Promise<bigint> {
    if (this.fileSize === null) {
      const response = await fetch(this.url, { method: 'HEAD' });
      const contentLength = response.headers.get('content-length');
      this.fileSize = contentLength ? parseInt(contentLength, 10) : 0;
    }
    return BigInt(this.fileSize);
  }

  async read(offset: bigint, length: bigint): Promise<Uint8Array> {
    const start = Number(offset);
    const end = Number(offset + length) - 1;

    const response = await fetch(this.url, {
      headers: {
        Range: `bytes=${start}-${end}`,
      },
    });

    if (!response.ok && response.status !== 206) {
      throw new Error(`HTTP range request failed: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  }
}

/**
 * Cache for loaded chunks
 */
class ChunkCache {
  private cache: Map<string, ChunkData> = new Map();
  private maxSize: number;
  private accessOrder: string[] = [];

  constructor(maxSize: number = 10) {
    this.maxSize = maxSize;
  }

  get(key: string): ChunkData | undefined {
    const data = this.cache.get(key);
    if (data) {
      // Move to end of access order (LRU)
      this.accessOrder = this.accessOrder.filter((k) => k !== key);
      this.accessOrder.push(key);
    }
    return data;
  }

  set(key: string, data: ChunkData): void {
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      // Evict least recently used
      const oldest = this.accessOrder.shift();
      if (oldest) {
        this.cache.delete(oldest);
      }
    }
    this.cache.set(key, data);
    this.accessOrder = this.accessOrder.filter((k) => k !== key);
    this.accessOrder.push(key);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
    this.accessOrder = [];
  }
}

/**
 * MCAP file loader with indexed access
 */
export class MCAPLoader {
  private url: string;
  private reader: McapIndexedReader | null = null;
  private index: MCAPFileIndex | null = null;
  private chunkCache: ChunkCache = new ChunkCache(10);
  private allVehicleStates: VehicleState[] = [];
  private allTelemetry: TelemetryPoint[] = [];
  private isLoaded: boolean = false;
  private schemasInfo: string[] = [];

  constructor(url: string) {
    this.url = url;
  }

  /**
   * Load MCAP file index (metadata only, not full data)
   */
  async loadIndex(): Promise<MCAPFileIndex> {
    const httpReader = new HttpRangeReader(this.url);
    this.reader = await McapIndexedReader.Initialize({ readable: httpReader });

    // Build index from reader
    const chunkIndexes = [...this.reader.chunkIndexes]; // Convert readonly to mutable
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

    // Handle empty files
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
   * Load all data from MCAP file
   */
  async loadAllData(): Promise<void> {
    if (!this.reader) {
      await this.loadIndex();
    }

    if (!this.reader) {
      throw new Error('Failed to initialize MCAP reader');
    }

    const vehicleStates: VehicleState[] = [];
    const telemetryPoints: TelemetryPoint[] = [];
    const parseErrors: string[] = [];
    let messageCount = 0;

    // Read all messages
    for await (const msg of this.reader.readMessages()) {
      messageCount++;
      const timestamp = Number(msg.logTime) / 1e9;
      const channel = this.reader.channelsById.get(msg.channelId);

      if (!channel) continue;

      // Parse message data based on encoding
      const result = this.parseVehicleState(msg.data, timestamp, channel.topic, channel.messageEncoding);
      if (result.state) {
        vehicleStates.push(result.state);
        telemetryPoints.push({
          timestamp: result.state.timestamp,
          speed: result.state.speed,
          acceleration: result.state.acceleration,
          jerk: result.state.jerk,
          yawRate: result.state.yawRate,
        });
      } else if (result.error && parseErrors.length < 5) {
        parseErrors.push(result.error);
      }
    }

    // If no vehicle states were parsed, throw an error with details
    if (vehicleStates.length === 0) {
      const schemaList = this.schemasInfo.length > 0
        ? `\n\nSchemas found in file:\n- ${this.schemasInfo.join('\n- ')}`
        : '';
      const errorSamples = parseErrors.length > 0
        ? `\n\nParse errors (first ${parseErrors.length}):\n- ${parseErrors.join('\n- ')}`
        : '';

      throw new Error(
        `Failed to parse any vehicle state data from ${messageCount} messages. ` +
        `The MCAP file uses a data format that is not yet supported.${schemaList}${errorSamples}`
      );
    }

    // Sort by timestamp
    vehicleStates.sort((a, b) => a.timestamp - b.timestamp);
    telemetryPoints.sort((a, b) => a.timestamp - b.timestamp);

    this.allVehicleStates = vehicleStates;
    this.allTelemetry = telemetryPoints;
    this.isLoaded = true;
  }

  /**
   * Parse raw message data into VehicleState
   */
  private parseVehicleState(
    data: Uint8Array,
    timestamp: number,
    topic: string,
    encoding: string
  ): { state: VehicleState | null; error?: string } {
    try {
      // Try to parse as JSON (common encoding)
      const decoder = new TextDecoder();
      const jsonStr = decoder.decode(data);
      const parsed = JSON.parse(jsonStr);

      // Handle different message formats
      if (parsed.pose || parsed.position || parsed.x !== undefined) {
        return {
          state: {
            timestamp,
            position: {
              x: parsed.pose?.position?.x ?? parsed.position?.x ?? parsed.x ?? 0,
              y: parsed.pose?.position?.y ?? parsed.position?.y ?? parsed.y ?? 0,
              z: parsed.pose?.position?.z ?? parsed.position?.z ?? parsed.z ?? 0,
            },
            rotation: {
              x: parsed.pose?.orientation?.x ?? parsed.orientation?.x ?? parsed.qx ?? 0,
              y: parsed.pose?.orientation?.y ?? parsed.orientation?.y ?? parsed.qy ?? 0,
              z: parsed.pose?.orientation?.z ?? parsed.orientation?.z ?? parsed.qz ?? 0,
              w: parsed.pose?.orientation?.w ?? parsed.orientation?.w ?? parsed.qw ?? 1,
            },
            speed: parsed.twist?.linear?.x ?? parsed.speed ?? parsed.velocity ?? 0,
            acceleration: parsed.acceleration ?? parsed.accel ?? 0,
            yawRate: parsed.twist?.angular?.z ?? parsed.yaw_rate ?? parsed.yawRate ?? 0,
            jerk: parsed.jerk ?? 0,
          },
        };
      }

      // JSON parsed but no pose data found
      return {
        state: null,
        error: `Topic "${topic}": JSON parsed but no pose/position data found`,
      };
    } catch {
      // JSON parsing failed - this is likely a binary format
      return {
        state: null,
        error: `Topic "${topic}": Unable to parse ${encoding} encoding (binary format not supported)`,
      };
    }
  }

  /**
   * Get vehicle state at specific timestamp (with interpolation)
   */
  getStateAtTime(timestamp: number): VehicleState | null {
    if (!this.isLoaded || this.allVehicleStates.length === 0) {
      return null;
    }

    const states = this.allVehicleStates;

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

    // If dot is negative, negate one quaternion
    const bCopy = { ...b };
    if (dot < 0) {
      bCopy.x = -b.x;
      bCopy.y = -b.y;
      bCopy.z = -b.z;
      bCopy.w = -b.w;
      dot = -dot;
    }

    if (dot > 0.9995) {
      // Linear interpolation for very close quaternions
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
   * Get all telemetry data
   */
  getAllTelemetry(): TelemetryPoint[] {
    return this.allTelemetry;
  }

  /**
   * Get all vehicle states
   */
  getAllVehicleStates(): VehicleState[] {
    return this.allVehicleStates;
  }

  /**
   * Get trajectory (all positions)
   */
  getTrajectory(): Array<{ x: number; y: number; z: number }> {
    return this.allVehicleStates.map((s) => s.position);
  }

  /**
   * Get file index
   */
  getIndex(): MCAPFileIndex | null {
    return this.index;
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    this.reader = null;
    this.index = null;
    this.chunkCache.clear();
    this.allVehicleStates = [];
    this.allTelemetry = [];
    this.isLoaded = false;
  }
}
