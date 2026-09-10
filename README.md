# Simulation Replay Viewer

A browser-based vehicle simulation replay viewer built with React, TypeScript, and Three.js. The application provides a YouTube-like playback experience for MCAP simulation files stored in S3, with 3D visualization, telemetry display, and efficient streaming of large files.

## Overview

This project is a client-side simulation replay tool designed to visualize autonomous vehicle simulation data. It loads MCAP files containing vehicle pose data, LIDAR point clouds, semantic maps, and telemetry, then renders them in an interactive 3D environment.

**Key capabilities:**
- Stream and visualize large MCAP files without downloading entirely
- Real-time 3D vehicle visualization with camera follow
- Dynamic object rendering (other vehicles, pedestrians) that update per-frame
- Progressive trajectory loading with chunked data access
- Parallel loading of map data and playback data using multiple reader instances
- Buffering system that pauses playback when data isn't loaded, auto-resumes when ready
- Telemetry sidebar with speed, acceleration, jerk, and yaw rate
- Timeline scrubbing and arbitrary seeking
- Map visualization (semantic map, drivable area, LIDAR point cloud)

## Architecture

### Design Philosophy: Browser-First

This is explicitly a **browser-only application**. There is no backend server. All data processing happens client-side:

```
S3 (MCAP files)
       │
       ▼ (HTTP Range Requests)
┌──────────────────────────────────────────────────────────────┐
│                        Browser                                │
│  ┌─────────────────┐    ┌──────────────┐    ┌─────────────┐  │
│  │   MCAPLoader    │───▶│ ReplayEngine │───▶│  Three.js   │  │
│  │ (multi-reader)  │    │ (time mgmt)  │    │   Scene     │  │
│  └─────────────────┘    └──────────────┘    └─────────────┘  │
│    │           │               │                   │          │
│    ▼           ▼               ▼                   ▼          │
│ Primary    Map Reader    React State         Vehicle/Map     │
│ Reader     (parallel)    (UI only)           + Dynamic       │
│ (poses)                                      Objects         │
└──────────────────────────────────────────────────────────────┘
```

**Why no backend?**
- The workload is read-only: fetch simulation files → decode → visualize
- MCAP indexing enables efficient random access without server preprocessing
- Keeps deployment simple (static hosting)
- Reduces latency (no server round-trips for data)

### Core Components

#### 1. MCAP Loader (`src/mcap/loader.ts`)

The loader handles efficient access to large MCAP files using **multiple reader instances** for parallel loading:

```typescript
// Multiple reader instances for parallel operations
private primaryReader: ReaderInstance;   // Poses/playback data
private mapReader: ReaderInstance;       // Map data (parallel)

class MCAPLoader {
  async loadIndex(): Promise<MCAPFileIndex>          // Fast - metadata only
  async loadTimeRange(time: number): Promise<void>   // Load chunk for time
  async loadMapData(): Promise<MapData>              // Uses dedicated reader
  getStateAtTime(time: number): VehicleState | null  // Interpolated lookup
  getDynamicObjectsAtTime(time: number): SceneEntity[] | null  // Other vehicles
}
```

**Design decisions:**
- **Multiple reader instances**: Map data loads in parallel with playback data (4-5x faster initial load)
- **Topic filtering**: Only loads pose topics (`/pose`, `/pose/imu`, etc.) for playback, not LIDAR/map data
- **Chunked loading**: Files loaded in 5-second chunks around requested time
- **3-concurrent HTTP limit**: Balances speed vs browser resource limits
- **Protobuf schema caching**: Schemas compiled once, reused for all messages
- **Dynamic objects per-chunk**: `/markers/annotations` loaded with each chunk for moving vehicles

#### 2. Replay Engine (`src/replay/ReplayEngine.ts`)

Manages simulation time separately from render time, with **buffering support**:

```typescript
// Simulation time advances based on wall-clock time, not frames
currentTime += deltaTime * playbackRate;

// Buffering: pause when data isn't available, auto-resume when loaded
if (!loader.hasDataForTime(newTime)) {
  updateState({ isBuffering: true });
  await loader.loadTimeRange(newTime);
  updateState({ isBuffering: false });
  // Playback automatically continues
}
```

**Event-driven architecture:**
```typescript
type ReplayEventType =
  | 'stateChange'      // Playback state changed (includes isBuffering)
  | 'timeUpdate'       // Current time updated
  | 'loaded'           // Initial load complete
  | 'trajectoryUpdate' // New trajectory data available
  | 'mapDataUpdate'    // Map data loaded
  | 'chunkLoaded';     // Background chunk loaded
```

**Progressive loading flow (with parallel loading):**
1. Load index (fast - metadata only)
2. **In parallel:**
   - Load first chunk (poses for playback)
   - Load map data (semantic map, LIDAR, drivable area)
3. Emit `loaded` - UI can render immediately with map + vehicle
4. Background: load remaining chunks sequentially
5. During playback: buffer if data not available, auto-resume when loaded

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

**Dynamic objects rendering:**
- Other vehicles and pedestrians from `/markers/annotations` rendered as colored cubes
- Updated every frame based on current playback time
- Separate group (`dynamicObjectsGroup`) for efficient updates

**Performance considerations:**
- Reusable `THREE.Vector3`/`Quaternion` objects to avoid GC in animation loop
- Camera follows vehicle with lerp smoothing
- Map objects properly disposed when cleared
- Dynamic objects cleared and recreated each frame (simple approach, works well)

#### 4. React Integration (`src/hooks/useReplay.ts`)

Bridges the imperative ReplayEngine with React's declarative model:

```typescript
// Engine runs independently, emits events
// Hook subscribes and updates React state at controlled intervals

engine.on('stateChange', (newState) => setState(newState));
engine.on('trajectoryUpdate', (traj) => setFullTrajectory(traj));
engine.on('mapDataUpdate', (map) => setMapData(map));
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
          ┌───────────────────┴───────────────────┐
          ▼                                       ▼
┌──────────────────────┐              ┌──────────────────────┐
│   Primary Reader     │              │     Map Reader       │
│ (poses, dynamics)    │   PARALLEL   │ (semantic, LIDAR)    │
└──────────────────────┘              └──────────────────────┘
          │                                       │
          └───────────────────┬───────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        MCAPLoader                                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    RangeCache (LRU)                      │   │
│  │  Range 0-5s: [VehicleState...] + [DynamicObjectFrame...] │   │
│  │  Range 5-10s: [VehicleState...] + [DynamicObjectFrame...]│   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ getStateAtTime(t), getDynamicObjectsAtTime(t)
┌─────────────────────────────────────────────────────────────────┐
│                       ReplayEngine                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Animation Loop (requestAnimationFrame)                     │  │
│  │   1. Calculate deltaTime                                   │  │
│  │   2. Check if data available for newTime                   │  │
│  │      - If not: set isBuffering=true, load data, wait       │  │
│  │      - If yes: advance currentTime                         │  │
│  │   3. Prefetch upcoming chunks                              │  │
│  │   4. Emit timeUpdate event                                 │  │
│  │   5. Throttled: emit stateChange for React                 │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
┌───────────────────┐ ┌─────────────┐ ┌──────────────────┐
│   Three.js Scene  │ │ React State │ │ Telemetry/Charts │
│ - Vehicle         │ │ (10 Hz max) │ │                  │
│ - Dynamic Objects │ │ - isPlaying │ │                  │
│ - Trajectory      │ │ - isBuffer- │ │                  │
│ - Map             │ │   ing       │ │                  │
│ (60 FPS updates)  │ └─────────────┘ └──────────────────┘
└───────────────────┘
```

## Project Structure

```
src/
├── App.tsx                    # Root component with routing
├── main.tsx                   # Entry point
├── types/
│   └── index.ts               # Core domain types (VehicleState, ReplayState, etc.)
├── mcap/
│   ├── loader.ts              # MCAP file loading with multi-reader parallel access
│   ├── protobufDecoder.ts     # Protobuf schema parsing and message decoding
│   └── types.ts               # MCAP-specific types (SceneUpdate, Grid, PointCloud)
├── replay/
│   └── ReplayEngine.ts        # Core playback engine (time management, buffering, events)
├── three/
│   └── scene/
│       └── SimulationScene.ts # Three.js 3D scene (vehicle, trajectory, map, dynamic objects)
├── hooks/
│   ├── useReplay.ts           # React hook bridging ReplayEngine to components
│   └── useFrameRate.ts        # FPS measurement hook
├── components/
│   ├── replay/
│   │   ├── SimulationViewer.tsx  # Main viewer page
│   │   └── PlaybackControls.tsx  # Play/pause, skip controls
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

### 1. Multiple Reader Instances for Parallel Loading

The MCAP reader doesn't support concurrent message iteration on a single instance. Solution: create separate reader instances:

```typescript
// Before: Sequential loading (~7+ seconds to see map)
await loadTimeRange(0);      // Primary reader
await proactiveChunks();     // Primary reader (blocks map)
await loadMapData();         // Primary reader

// After: Parallel loading (~1.7 seconds to see map)
await Promise.all([
  loadTimeRange(0),   // Primary reader
  loadMapData(),      // Dedicated map reader (parallel!)
]);
```

This reduces initial load time by 4-5x.

### 2. Topic Filtering for Faster Chunk Loading

MCAP files contain many topics (LIDAR, map data, poses, etc.). Loading all topics for playback is wasteful:

```typescript
// Only load pose-related topics for playback chunks
const poseTopics = ['/pose', '/pose/imu', '/pose/filtered', ...];

await reader.readMessages({
  topics: poseTopics,  // Not all 40+ topics
  startTime, endTime
});
```

This dramatically reduces HTTP requests and load time per chunk.

### 3. Buffering System

Playback pauses automatically when data isn't available, preventing visual glitches:

```typescript
// In animation loop:
if (!loader.hasDataForTime(newTime)) {
  // Don't advance time - enter buffering state
  updateState({ isBuffering: true });

  // Load data in background
  await loader.loadTimeRange(newTime);

  // Auto-resume playback
  updateState({ isBuffering: false });
}
```

UI shows "Buffering..." overlay when waiting for data.

### 4. Dynamic Objects (Other Vehicles)

Other vehicles from `/markers/annotations` are:
- Loaded per-chunk (not just at startup)
- Stored with timestamps in RangeCache
- Looked up by current playback time
- Rendered as colored cubes that update every frame

```typescript
// Per-frame update in animation loop:
const dynamicObjects = loader.getDynamicObjectsAtTime(currentTime);
scene.updateDynamicObjects(dynamicObjects);
```

### 5. Separation of Simulation Time and Render Time

```typescript
// BAD: Time tied to frames (wrong speed at different FPS)
currentTime += 1/60;  // Assumes 60 FPS

// GOOD: Time based on wall clock (correct at any FPS)
const deltaTime = (performance.now() - lastUpdate) / 1000;
currentTime += deltaTime * playbackRate;
```

### 6. React for UI, Three.js for Rendering

React handles:
- Playback controls
- Timeline
- Telemetry sidebar
- Loading/buffering states

Three.js handles (imperatively, not through React):
- Vehicle position/rotation (60 FPS)
- Dynamic objects (60 FPS)
- Camera following
- Trajectory line
- Map rendering

This separation prevents React re-renders from affecting render performance.

### 7. Coordinate System Conversion

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

## Performance Characteristics

| Operation | Time (typical) |
|-----------|----------------|
| Load index | ~200ms |
| First chunk + map (parallel) | ~1.5-2s |
| Per-chunk load (during playback) | ~500ms |
| Seek to unloaded time | ~500ms + buffering |

## Known Limitations

1. **MCAP reader concurrency**: Each `McapIndexedReader` instance doesn't support concurrent iteration. Solved with multiple reader instances, but adds memory overhead.

2. **Dynamic object rendering**: Currently clears and recreates all dynamic object meshes each frame. Works well but could be optimized with object pooling.

3. **Line width**: Three.js `LineBasicMaterial` linewidth > 1 only works on some systems (WebGL limitation).

4. **Point cloud size**: Large LIDAR point clouds (~57k points) can impact initial render. Consider downsampling for very large clouds.

## Future Improvements

- Object pooling for dynamic objects (avoid per-frame mesh creation)
- WebGL instanced rendering for large point clouds
- Pre-compile protobuf schemas or use schema caching across sessions
- Offline caching with IndexedDB for repeat views
- Trajectory downsampling for initial overview (load full detail progressively)
