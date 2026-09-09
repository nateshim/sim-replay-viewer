import type { VehicleState } from '../types';
import type { ChunkIndex } from '@mcap/core';

export interface MCAPChannel {
  id: number;
  schemaId: number;
  topic: string;
  messageEncoding: string;
  metadata: Map<string, string>;
}

export interface MCAPSchema {
  id: number;
  name: string;
  encoding: string;
  data: Uint8Array;
}

export interface MCAPFileIndex {
  startTime: number;
  endTime: number;
  duration: number;
  chunkIndexes: ChunkIndex[];
  channels: Map<number, MCAPChannel>;
  schemas: Map<number, MCAPSchema>;
  messageCount: number;
}

export interface ParsedMessage {
  timestamp: number;
  channelId: number;
  topic: string;
  data: VehicleState | Record<string, unknown>;
}

export interface ChunkData {
  startTime: number;
  endTime: number;
  messages: ParsedMessage[];
  vehicleStates: VehicleState[];
}

// Foxglove SceneUpdate types
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Pose {
  position: Vector3;
  orientation: Quaternion;
}

export interface ScenePrimitive {
  pose?: Pose;
  color?: Color;
  // Different primitive types
  cubes?: Array<{ pose: Pose; size: Vector3; color: Color }>;
  spheres?: Array<{ pose: Pose; size: Vector3; color: Color }>;
  cylinders?: Array<{ pose: Pose; size: Vector3; color: Color; bottomScale?: number; topScale?: number }>;
  lines?: Array<{ type: number; pose: Pose; thickness: number; scaleInvariant: boolean; points: Vector3[]; color: Color; colors: Color[] }>;
  triangles?: Array<{ pose: Pose; points: Vector3[]; color: Color; colors: Color[]; indices: number[] }>;
  texts?: Array<{ pose: Pose; billboard: boolean; fontSize: number; scaleInvariant: boolean; color: Color; text: string }>;
  models?: Array<{ pose: Pose; scale: Vector3; color: Color; overrideColor: boolean; url: string; mediaType: string; data: Uint8Array }>;
}

export interface SceneEntity {
  timestamp?: { sec: number; nsec: number };
  frameId: string;
  id: string;
  lifetime?: { sec: number; nsec: number };
  frameLocked: boolean;
  metadata?: Array<{ key: string; value: string }>;
  arrows?: ScenePrimitive['lines'];
  cubes?: ScenePrimitive['cubes'];
  spheres?: ScenePrimitive['spheres'];
  cylinders?: ScenePrimitive['cylinders'];
  lines?: ScenePrimitive['lines'];
  triangles?: ScenePrimitive['triangles'];
  texts?: ScenePrimitive['texts'];
  models?: ScenePrimitive['models'];
}

export interface SceneUpdate {
  deletions?: Array<{ timestamp: { sec: number; nsec: number }; type: number; id: string }>;
  entities?: SceneEntity[];
}

// Foxglove Grid type (for map/drivable area)
export interface Grid {
  timestamp?: { sec: number; nsec: number };
  frameId: string;
  pose: Pose;
  columnCount: number;
  cellSize: Vector3;
  rowStride: number;
  cellStride: number;
  fields: Array<{ name: string; offset: number; type: number }>;
  data: Uint8Array;
}

// Foxglove PointCloud type
export interface PointCloud {
  timestamp?: { sec: number; nsec: number };
  frameId: string;
  pose: Pose;
  pointStride: number;
  fields: Array<{ name: string; offset: number; type: number }>;
  data: Uint8Array;
}

// Map data loaded from MCAP
export interface MapData {
  semanticMap: SceneUpdate | null;
  drivableArea: Grid | null;
  pointCloud: PointCloud | null;
  markers: SceneUpdate | null;
  dynamicObjects: SceneUpdate | null;  // /markers/car - other vehicles
}
