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
