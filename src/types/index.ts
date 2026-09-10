// Core simulation types

export interface Simulation {
  id: string;
  name: string;
  url: string;
  size: number;
  lastModified: Date;
}

export interface VehicleState {
  timestamp: number;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number; w: number };
  speed: number;
  acceleration: number;
  yawRate: number;
  jerk: number;
}

export interface ReplayState {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  playbackRate: number;
  isLoading: boolean;
  isSeeking: boolean;
  isBuffering: boolean;  // True when waiting for data to load at current playback position
}

export interface TelemetryPoint {
  timestamp: number;
  speed: number;
  acceleration: number;
  jerk: number;
  yawRate: number;
}

export interface MCAPChunkInfo {
  offset: number;
  length: number;
  startTime: number;
  endTime: number;
  messageCount: number;
}

export interface MCAPIndex {
  startTime: number;
  endTime: number;
  duration: number;
  chunks: MCAPChunkInfo[];
  messageCount: number;
}

export interface CachedChunk {
  info: MCAPChunkInfo;
  data: ArrayBuffer;
  messages: VehicleState[];
}
