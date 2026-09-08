# Simulation Replay Viewer

A browser-based vehicle simulation replay viewer built with React, TypeScript, and Three.js. The application provides a YouTube-like playback experience for MCAP simulation files stored in S3, with 3D visualization, telemetry display, and efficient streaming of large files.

## Overview

This project is a client-side simulation replay tool designed to visualize autonomous vehicle simulation data. It loads MCAP files containing vehicle pose data, LIDAR point clouds, semantic maps, and telemetry, then renders them in an interactive 3D environment.

**Key capabilities:**
- Stream and visualize large MCAP files without downloading entirely
- Real-time 3D vehicle visualization with camera follow
- Progressive trajectory loading with chunked data access
- Telemetry sidebar with speed, acceleration, jerk, and yaw rate
- Timeline scrubbing and arbitrary seeking
- Variable playback rates (0.5x - 4x)
- Map visualization (semantic map, drivable area, LIDAR point cloud)

## Architecture

### Design Philosophy: Browser-First

This is explicitly a **browser-only application**. There is no backend server. All data processing happens client-side:

```
S3 (MCAP files)
       │
       ▼ (HTTP Range Requests)
┌──────────────────────────────────────────────────────────┐
│                      Browser                              │
│  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐  │
│  │ MCAPLoader  │───▶│ ReplayEngine │───▶│ Three.js    │  │
│  │ (chunked)   │    │ (time mgmt)  │    │ Scene       │  │
│  └─────────────┘    └──────────────┘    └─────────────┘  │
│         │                  │                   │          │
│         ▼                  ▼                   ▼          │
│  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐  │
│  │ RangeCache  │    │ React State  │    │ Vehicle/Map │  │
│  │ (LRU)       │    │ (UI only)    │    │ Rendering   │  │
│  └─────────────┘    └──────────────┘    └─────────────┘  │
└──────────────────────────────────────────────────────────┘
```

**Why no backend?**
- The workload is read-only: fetch simulation files → decode → visualize
- MCAP indexing enables efficient random access without server preprocessing
- Keeps deployment simple (static hosting)
- Reduces latency (no server round-trips for data)

### Core Components

#### 1. MCAP Loader (`src/mcap/loader.ts`)

The loader handles efficient access to large MCAP files:

```typescript
// Key concepts:
// 1. Index-first loading - metadata only, no message data
// 2. HTTP Range Requests - fetch only needed chunks
// 3. LRU Cache - bounded memory for loaded ranges
// 4. Protobuf decoding - on-demand schema compilation

class MCAPLoader {
  async loadIndex(): Promise<MCAPFileIndex>     // Fast - metadata only
  async loadTimeRange(time: number): Promise<void>  // Load chunk for time
  getStateAtTime(time: number): VehicleState | null // Interpolated lookup
}
```

**Design decisions:**
- **Chunked loading**: Files are loaded in 5-second chunks around the requested time
- **3-concurrent HTTP limit**: Balances speed vs browser resource limits
- **Protobuf schema caching**: Schemas compiled once, reused for all messages

#### 2. Replay Engine (`src/replay/ReplayEngine.ts`)

Manages simulation time separately from render time:

```typescript
// Simulation time advances based on wall-clock time, not frames
currentTime += deltaTime * playbackRate;

// This ensures correct playback at any FPS (30, 60, 120, etc.)
```

**Event-driven architecture:**
```typescript
type ReplayEventType =
  | 'stateChange'      // Playback state changed
  | 'timeUpdate'       // Current time updated
  | 'loaded'           // Initial load complete
  | 'trajectoryUpdate' // New trajectory data available
  | 'mapDataUpdate'    // Map data loaded
  | 'chunkLoaded';     // Background chunk loaded
```

**Progressive loading flow:**
1. Load index (fast - metadata only)
2. Load first chunk (blocking - needed for initial render)
3. Emit `loaded` - UI can render immediately
4. Background: load remaining chunks sequentially
5. Background: load map data (semantic map, LIDAR, etc.)

**Why serialize background loading?**
The MCAP reader (`McapIndexedReader`) doesn't support concurrent message iteration. Running `loadMapData()` and `proactivelyLoadChunks()` in parallel causes one to hang. They must run sequentially.

#### 3. Three.js Scene (`src/three/scene/SimulationScene.ts`)

Handles all 3D rendering imperatively (not through React state):

```typescript
// Coordinate system conversion (NuScenes ENU → Three.js)
// NuScenes: X=East, Y=North, Z=Up
// Three.js: X=Right, Y=Up, Z=Towards viewer

// Position conversion:
threePosition.set(nuscenes.x, nuscenes.z, -nuscenes.y);

// Quaternion conversion (yaw rotation axis: Z→Y):
threeQuat.set(ns.x, ns.z, -ns.y, ns.w);
```

**Performance considerations:**
- Reusable `THREE.Vector3`/`Quaternion` objects to avoid GC in animation loop
- Camera follows vehicle with lerp smoothing
- Map objects properly disposed when cleared

#### 4. React Integration (`src/hooks/useReplay.ts`)

Bridges the imperative ReplayEngine with React's declarative model:

```typescript
// Engine runs independently, emits events
// Hook subscribes and updates React state at controlled intervals

engine.on('stateChange', (newState) => setState(newState));
engine.on('trajectoryUpdate', (traj) => setFullTrajectory(traj));
```

**State update throttling:**
The engine throttles React state updates to ~10/second (`STATE_EMIT_INTERVAL = 100ms`). High-frequency updates (60 FPS vehicle position) go directly to Three.js, not through React.

### Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         MCAP File (S3)                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Header │ Schemas │ Channels │ Chunks... │ Index │ Footer │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ Range Request (Index + Target Chunk)
┌─────────────────────────────────────────────────────────────────┐
│                        MCAPLoader                                │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────────┐    │
│  │ loadIndex()  │──▶│ loadTimeRange│──▶│ parseVehicleState│    │
│  │ (schemas,    │   │ (decompress, │   │ (protobuf decode)│    │
│  │  channels)   │   │  iterate)    │   │                  │    │
│  └──────────────┘   └──────────────┘   └──────────────────┘    │
│         │                   │                    │              │
│         ▼                   ▼                    ▼              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    RangeCache (LRU)                      │   │
│  │  Range 0-5s: [VehicleState, VehicleState, ...]          │   │
│  │  Range 5-10s: [VehicleState, VehicleState, ...]         │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ getStateAtTime(t) with interpolation
┌─────────────────────────────────────────────────────────────────┐
│                       ReplayEngine                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Animation Loop (requestAnimationFrame)                     │  │
│  │   1. Calculate deltaTime                                   │  │
│  │   2. Advance currentTime += deltaTime * playbackRate       │  │
│  │   3. Check if chunk needed, load if not cached             │  │
│  │   4. Prefetch upcoming chunks                              │  │
│  │   5. Emit timeUpdate event                                 │  │
│  │   6. Throttled: emit stateChange for React                 │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
┌───────────────────┐ ┌─────────────┐ ┌──────────────────┐
│   Three.js Scene  │ │ React State │ │ Telemetry/Charts │
│ (60 FPS updates)  │ │ (10 Hz max) │ │                  │
└───────────────────┘ └─────────────┘ └──────────────────┘
```

## Project Structure

```
src/
├── App.tsx                    # Root component with routing
├── main.tsx                   # Entry point
├── types/
│   └── index.ts               # Core domain types (VehicleState, ReplayState, etc.)
├── mcap/
│   ├── loader.ts              # MCAP file loading with chunked HTTP access
│   ├── protobufDecoder.ts     # Protobuf schema parsing and message decoding
│   └── types.ts               # MCAP-specific types (SceneUpdate, Grid, PointCloud)
├── replay/
│   └── ReplayEngine.ts        # Core playback engine (time management, events)
├── three/
│   └── scene/
│       └── SimulationScene.ts # Three.js 3D scene (vehicle, trajectory, map)
├── hooks/
│   ├── useReplay.ts           # React hook bridging ReplayEngine to components
│   └── useFrameRate.ts        # FPS measurement hook
├── components/
│   ├── replay/
│   │   ├── SimulationViewer.tsx  # Main viewer page
│   │   └── PlaybackControls.tsx  # Play/pause, skip, speed controls
│   ├── timeline/
│   │   └── Timeline.tsx          # Scrubbing timeline
│   ├── telemetry/
│   │   └── TelemetrySidebar.tsx  # Speed, acceleration, yaw rate display
│   ├── metrics/
│   │   └── MetricPlot.tsx        # Time-series metric visualization
│   └── simulation-list/
│       └── SimulationList.tsx    # Simulation file browser
└── simulations/
    ├── simulationService.ts      # S3 file listing and URL generation
    └── types.ts                  # Simulation metadata types
```

## Key Design Decisions

### 1. MCAP Indexing Over Full Download

MCAP files can be hundreds of MB. Instead of downloading entirely:

```typescript
// Load index first (small, contains chunk offsets)
const index = await loader.loadIndex();

// On seek to time T, load only the relevant chunk
await loader.loadTimeRange(targetTime);
```

This enables instant startup and efficient seeking.

### 2. Separation of Simulation Time and Render Time

```typescript
// BAD: Time tied to frames (wrong speed at different FPS)
currentTime += 1/60;  // Assumes 60 FPS

// GOOD: Time based on wall clock (correct at any FPS)
const deltaTime = (performance.now() - lastUpdate) / 1000;
currentTime += deltaTime * playbackRate;
```

### 3. React for UI, Three.js for Rendering

React handles:
- Playback controls
- Timeline
- Telemetry sidebar
- Loading states

Three.js handles (imperatively, not through React):
- Vehicle position/rotation (60 FPS)
- Camera following
- Trajectory line
- Map rendering

This separation prevents React re-renders from affecting render performance.

### 4. Progressive Loading

Instead of blocking until all data loads:

1. Load minimal data for initial render (~5 seconds)
2. Show UI immediately
3. Load remaining chunks in background
4. Emit events as data becomes available

```typescript
// User sees something quickly
await loader.loadTimeRange(0);
emit('loaded');

// Rest loads without blocking
this.startBackgroundLoading(loader);
```

### 5. Coordinate System Conversion

NuScenes uses ENU (East-North-Up), Three.js uses a different convention:

```typescript
// NuScenes: X=East, Y=North, Z=Up
// Three.js: X=Right, Y=Up, Z=Back (towards viewer)

// Conversion:
three.x = nuscenes.x;   // East → Right
three.y = nuscenes.z;   // Up → Up
three.z = -nuscenes.y;  // North → -Back (forward)
```

## Dependencies

| Package | Purpose |
|---------|---------|
| `@mcap/core` | MCAP file reading with indexed access |
| `protobufjs` | Protobuf schema parsing and message decoding |
| `lz4js` | LZ4 decompression for MCAP chunks |
| `three` | 3D rendering |
| `react` | UI framework |
| `react-router-dom` | Client-side routing |

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

## Known Limitations

1. **First chunk load time**: Initial load can take up to a minute due to:
   - MCAP index initialization (multiple HTTP round-trips)
   - Protobuf schema compilation (FileDescriptorSet parsing)
   - S3 latency

2. **MCAP reader concurrency**: The `McapIndexedReader` doesn't support concurrent message iteration, so background operations must be serialized.

3. **Line width**: Three.js `LineBasicMaterial` linewidth > 1 only works on some systems (WebGL limitation).

## Future Improvements

- Pre-compile protobuf schemas or use schema caching across sessions
- Parallel index loading with worker threads
- WebGL instanced rendering for large point clouds
- Compressed trajectory transmission
- Offline caching with IndexedDB
