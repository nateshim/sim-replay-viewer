# AGENTS.md

# Simulation Replay Viewer — Engineering Guide

## 1. Project Mission

Build a browser-based simulation replay viewer for vehicle simulation data.

The application should provide a YouTube-like experience for simulation playback:

* Browse available simulation runs.
* Select a simulation.
* Load and replay its `.mcap` data.
* Render an interactive 3D vehicle/road scene using Three.js.
* Play, pause, and seek through the simulation.
* Scrub through the simulation timeline.
* Synchronize telemetry with the current simulation timestamp.
* Display telemetry plots in the right sidebar.
* Render a map representing the vehicle's movement.
* Display the current rendering frame rate.
* Efficiently handle large `.mcap` files stored in S3.

The application should feel like a professional internal simulation/debugging tool rather than a generic media player.

---

# 2. Core Technology

Use the following technologies unless there is a strong reason not to:

* React
* TypeScript
* TSX
* Three.js
* Browser APIs
* HTML5/CSS
* S3-hosted `.mcap` files

Prefer lightweight dependencies.

Do **not** introduce a backend unless explicitly required.

Do not add a database, API server, Python service, Node server, or other backend simply to make implementation easier.

---

# 3. Primary Architecture

The preferred architecture is:

```text
                        S3
                         │
                         │ .mcap files
                         ▼
              ┌─────────────────────┐
              │ Browser Application  │
              │                     │
              │ React + TypeScript  │
              └──────────┬──────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
     MCAP Loader    Replay Engine   Metadata/Index
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                 Simulation State
                         │
          ┌──────────────┼───────────────┐
          ▼              ▼               ▼
      Three.js       Telemetry        Timeline
       Renderer        Plots          Controls
          │              │               │
          └──────────────┼───────────────┘
                         ▼
                    React UI
```

Keep the system modular.

The rendering engine, replay state, MCAP loading, telemetry processing, and React UI should not become one giant component.

---

# 4. Important Architectural Principle

Separate these concepts:

### Simulation data

Raw information loaded from MCAP:

```text
timestamps
vehicle pose
velocity
acceleration
yaw rate
jerk
map information
other simulation messages
```

### Replay state

The current position of the simulation:

```text
currentTime
duration
isPlaying
playbackRate
```

### Render state

Information needed by Three.js:

```text
vehicle position
vehicle orientation
camera position
road/map geometry
other actors
```

### UI state

React-specific state:

```text
selected simulation
sidebar state
selected metric
timeline interaction
loading state
errors
```

Do not mix all four concerns together.

---

# 5. Project Structure

Prefer a structure similar to:

```text
src/
├── components/
│   ├── layout/
│   ├── replay/
│   ├── timeline/
│   ├── telemetry/
│   ├── metrics/
│   └── simulation-list/
│
├── three/
│   ├── scene/
│   ├── vehicle/
│   ├── map/
│   ├── camera/
│   └── renderer/
│
├── mcap/
│   ├── loader.ts
│   ├── parser.ts
│   ├── index.ts
│   └── types.ts
│
├── replay/
│   ├── ReplayEngine.ts
│   ├── ReplayClock.ts
│   ├── ReplayState.ts
│   └── interpolation.ts
│
├── telemetry/
│   ├── telemetry.ts
│   ├── metrics.ts
│   └── types.ts
│
├── simulations/
│   ├── simulationService.ts
│   └── types.ts
│
├── hooks/
│   ├── useReplay.ts
│   ├── useAnimationFrame.ts
│   └── useFrameRate.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
└── main.tsx
```

The exact structure may change as implementation progresses. Avoid creating files or abstractions without a clear reason.

---

# 6. Reference UI

The provided reference image is the primary visual inspiration.

The target structure is approximately:

```text
┌────────────────────────────────────────────────────────────────────┐
│ Simulator                                                           │
├───────────────────────────────────────────────┬────────────────────┤
│                                               │                    │
│                                               │      Speed         │
│                                               │    ──────────      │
│                                               │                    │
│              Three.js Simulation              │   Acceleration     │
│                                               │    ──────────      │
│              Vehicle / Road Scene             │                    │
│                                               │       Jerk         │
│                                               │    ──────────      │
│                                               │                    │
│                                               │     Yaw Rate       │
│                                               │    ──────────      │
├───────────────────────────────────────────────┴────────────────────┤
│ ▶    ↶      00:00 / 00:35        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
└────────────────────────────────────────────────────────────────────┘
```

The UI should prioritize:

1. Simulation visualization.
2. Playback controls.
3. Timeline.
4. Telemetry.
5. Metrics.
6. Map/contextual information.

The viewer should use the majority of the available screen.

---

# 7. Three.js Rendering

Three.js owns the simulation visualization.

React should control high-level application state, but avoid forcing React re-renders for every animation frame.

Do not do this:

```tsx
setVehiclePosition(position);
```

on every `requestAnimationFrame`.

Instead:

```text
React
  │
  └── controls high-level state

Replay Engine
  │
  └── calculates current simulation time

Three.js
  │
  └── directly updates scene objects each frame
```

Use refs or an imperative rendering layer where appropriate.

The Three.js render loop should generally look conceptually like:

```text
requestAnimationFrame
        │
        ▼
calculate delta time
        │
        ▼
advance replay clock
        │
        ▼
determine simulation timestamp
        │
        ▼
interpolate simulation state
        │
        ▼
update Three.js objects
        │
        ▼
render scene
```

---

# 8. Replay Clock

Playback should be driven by elapsed wall-clock time, not by assuming that every rendered frame represents one simulation frame.

Conceptually:

```ts
currentTime += deltaTime * playbackRate;
```

This allows playback to remain correct even when rendering FPS changes.

For example:

```text
Simulation time: 12.50s
Browser FPS:      60

Simulation time: 12.52s
Browser FPS:      58

Simulation time: 12.55s
Browser FPS:      45
```

The simulation should still progress according to elapsed time.

---

# 9. Seeking

Seeking should be a first-class operation.

When the user drags the timeline:

```text
User moves slider
       │
       ▼
target simulation timestamp
       │
       ▼
find nearest indexed data
       │
       ▼
load/decode required data
       │
       ▼
update replay state
       │
       ▼
update Three.js scene
       │
       ▼
update telemetry
```

Seeking must not require replaying the entire MCAP file from the beginning.

This is one of the primary reasons indexing is important.

---

# 10. MCAP Data

MCAP files may be very large.

Do not assume that the entire MCAP file should always be loaded into browser memory.

The application should make use of MCAP indexing capabilities.

The S3 test data is available under:

```text
https://sim-playback-test-data.s3.us-west-2.amazonaws.com/?prefix=mcap/
```

Treat MCAP as an indexed data source rather than a simple video file.

The implementation should distinguish between:

```text
file metadata
    ↓
MCAP index
    ↓
timestamp → relevant chunk/message
    ↓
requested data
```

---

# 11. Large File Strategy

For large files, prefer:

```text
S3
 │
 ├── metadata
 │
 ├── index
 │
 └── requested chunks
```

rather than:

```text
S3
 │
 └── download entire multi-GB file
             ↓
        browser memory
```

Use HTTP range requests when supported by the S3 object and browser environment.

Conceptually:

```text
User seeks to 23.4 seconds
            │
            ▼
       MCAP index
            │
            ▼
    determine chunk offset
            │
            ▼
    HTTP Range request
            │
            ▼
       decode chunk
            │
            ▼
   update simulation state
```

Do not implement an elaborate caching system prematurely.

Start with:

1. Metadata.
2. Index.
3. Range requests.
4. Small in-memory cache.
5. Add more sophisticated prefetching only if profiling demonstrates a need.

---

# 12. Indexing

The interviewer explicitly indicated that indexing is supported in MCAP.

Treat this as a major design capability.

The index should allow efficient mapping such as:

```text
simulation timestamp
        ↓
MCAP chunk/message location
```

This enables:

* Fast seeking.
* Partial loading.
* Reduced memory usage.
* Reduced network traffic.
* Better startup performance.

Do not scan the entire MCAP file every time the user seeks.

---

# 13. Caching

Use a bounded cache for recently accessed MCAP chunks/data.

A simple cache can initially use:

```ts
Map<string, Chunk>
```

Possible cache key:

```text
fileId + chunkOffset
```

The cache should not grow without bounds.

If necessary, use an LRU-style eviction strategy.

Avoid building a sophisticated distributed cache. This is a browser application.

---

# 14. Prefetching

Once basic seeking works, consider prefetching.

During playback:

```text
current chunk
     │
     ├── render
     │
     └── prefetch next chunk
```

When the user seeks:

```text
target chunk
     │
     ├── load target
     │
     └── optionally prefetch nearby chunks
```

Prefetching should never block the current frame unnecessarily.

---

# 15. Telemetry

Telemetry must be synchronized to the replay clock.

For a current timestamp:

```text
currentTime = 12.42s
```

the UI should show telemetry corresponding to approximately:

```text
12.42s
```

Metrics may include:

* Speed.
* Acceleration.
* Jerk.
* Yaw rate.
* Other useful simulation metrics available from MCAP.

Use interpolation where appropriate.

For example:

```text
sample A = 12.40s
sample B = 12.45s

current = 12.42s

interpolate(A, B, 12.42)
```

Avoid unnecessarily updating all React state every animation frame.

Telemetry visualization can update at a reasonable UI frequency if higher-frequency updates are not perceptually useful.

---

# 16. Metric Plots

The right sidebar should contain metric plots.

Example:

```text
┌──────────────────────┐
│ Speed                │
│  ─────────╲──────    │
│                      │
│ Acceleration         │
│  ───╱────╲──────     │
│                      │
│ Jerk                 │
│  ─╲────╱────────     │
│                      │
│ Yaw Rate             │
│  ───────╱──────      │
└──────────────────────┘
```

Plots should visually communicate:

* Current value.
* Recent history.
* Current simulation position.
* Potentially the full simulation range.

The current timestamp should be visually synchronized with the timeline.

---

# 17. Map Rendering

The application should render a map over the simulation data showing where vehicles are moving.

The map can initially be implemented as a Three.js scene element rather than introducing a separate mapping system.

Prioritize:

1. Vehicle trajectory.
2. Road geometry.
3. Vehicle position.
4. Camera relationship.
5. Clear visual orientation.

Avoid adding a heavyweight mapping library unless it is actually necessary.

---

# 18. FPS Measurement

The viewer must display its actual rendering frame rate.

Do not hardcode:

```text
60 FPS
```

Measure it from the rendering loop.

A simple approach:

```text
frame count
    +
elapsed wall-clock time
    ↓
FPS
```

For example:

```ts
fps = frameCount / elapsedSeconds;
```

Prefer displaying a smoothed FPS value rather than an extremely noisy instantaneous value.

Example UI:

```text
FPS: 59
```

The FPS indicator should reflect the actual Three.js rendering performance.

---

# 19. Performance Rules

Performance is a core requirement.

Avoid:

* React state updates every frame.
* Recreating Three.js geometry every frame.
* Recreating materials every frame.
* Parsing the entire MCAP unnecessarily.
* Loading entire multi-GB files into memory.
* Creating thousands of unnecessary React components.
* Performing expensive calculations inside render().
* Unbounded caches.
* Re-rendering the entire application because the replay timestamp changed.

Prefer:

* `requestAnimationFrame`.
* `useRef`.
* Imperative Three.js updates.
* Memoization where useful.
* Indexed MCAP access.
* Range requests.
* Chunked loading.
* Small bounded caches.
* Precomputation of expensive telemetry transformations.

---

# 20. React Rules

React components should remain focused.

Good:

```tsx
<SimulationViewer />
<TelemetrySidebar />
<MetricPlot />
<Timeline />
<PlaybackControls />
<SimulationList />
```

Avoid:

```tsx
<App.tsx>
  // 2,000 lines of everything
</App.tsx>
```

Use hooks for reusable behavior:

```text
useReplay()
useFrameRate()
useSimulation()
useTelemetry()
```

Do not create hooks merely to wrap one line of code.

---

# 21. TypeScript Rules

Use strict TypeScript.

Prefer explicit domain types.

Example:

```ts
interface Simulation {
  id: string;
  name: string;
  duration: number;
}

interface VehicleState {
  timestamp: number;
  position: Vector3;
  rotation: Quaternion;
  speed: number;
  acceleration: number;
  yawRate: number;
}

interface ReplayState {
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  playbackRate: number;
}
```

Avoid:

```ts
any
```

unless interacting with an external library where no better type exists.

Do not use `as` casts to silence TypeScript errors without understanding the underlying type.

---

# 22. Error Handling

The application should gracefully handle:

* S3 network failures.
* Missing MCAP files.
* Invalid MCAP data.
* Unsupported messages.
* Failed range requests.
* Seeking outside valid bounds.
* Corrupt or incomplete index information.

The user should receive useful feedback.

Avoid exposing raw stack traces in the UI.

---

# 23. Loading States

Important operations should have visible loading states:

```text
Loading simulations...
Loading MCAP...
Building index...
Loading replay data...
Seeking...
```

Do not leave the viewer visually frozen without explanation.

---

# 24. Browser Constraints

Remember that this is a browser application.

Browser memory is limited.

Network requests are asynchronous.

Rendering and parsing can compete for CPU time.

If MCAP parsing becomes expensive:

1. Measure it.
2. Consider Web Workers.
3. Move CPU-heavy parsing off the main thread.

Do not introduce Web Workers prematurely unless profiling indicates that parsing blocks the UI.

---

# 25. Security

Do not hardcode secrets.

The public S3 bucket URL is not a secret.

Do not add AWS access keys to:

```text
.env
source code
React components
Git history
```

If the bucket requires authentication, stop and reconsider the architecture rather than putting credentials in the browser.

---

# 26. Dependency Rules

Before adding a dependency, ask:

1. Do we actually need it?
2. Can a browser API solve the problem?
3. Can Three.js solve it?
4. Can a small local utility solve it?
5. Does the dependency significantly simplify the implementation?

Avoid dependency sprawl.

Especially avoid introducing a backend-only dependency for something that can run in the browser.

---

# 27. Testing

Prioritize testing of core logic rather than visual snapshots.

Important areas:

### Replay clock

Test:

```text
play
pause
resume
seek
playback rate
end of simulation
```

### Interpolation

Test:

```text
before first sample
between samples
exact sample
after last sample
```

### MCAP indexing

Test:

```text
timestamp → correct chunk
```

### Timeline

Test:

```text
0%
50%
100%
seek
```

### Telemetry

Test:

```text
timestamp → expected metric
```

---

# 28. Development Workflow

When implementing a feature:

1. Understand the data flow.
2. Identify the smallest useful abstraction.
3. Implement the happy path.
4. Verify it works.
5. Handle important edge cases.
6. Measure performance if relevant.
7. Refactor only after behavior is correct.

Do not build the entire architecture before proving the core replay loop works.

---

# 29. Recommended Implementation Order

Implement in roughly this order:

### Phase 1 — Application shell

* React application.
* Basic layout.
* Header.
* Viewer area.
* Right sidebar.
* Timeline.

### Phase 2 — Three.js viewer

* Scene.
* Camera.
* Renderer.
* Basic vehicle.
* Basic road/map representation.

### Phase 3 — Replay engine

* Simulation clock.
* Play.
* Pause.
* Seek.
* Playback rate.
* Timeline synchronization.

### Phase 4 — MCAP

* Discover available MCAP files.
* Load metadata.
* Parse MCAP.
* Use indexing.
* Read relevant chunks.

### Phase 5 — Telemetry

* Speed.
* Acceleration.
* Jerk.
* Yaw rate.
* Timestamp synchronization.

### Phase 6 — Plots

* Metric graphs.
* Current-time indicator.
* Historical/full-range data.

### Phase 7 — Map

* Vehicle trajectory.
* Road/map geometry.
* Vehicle position.

### Phase 8 — Performance

* FPS.
* Range requests.
* Caching.
* Prefetching.
* Profiling.

### Phase 9 — Polish

* Loading states.
* Error handling.
* Responsive layout.
* Visual refinement.
* Keyboard controls.

---

# 30. Definition of Done

The application is successful when a user can:

1. Open the application.
2. See available simulation runs.
3. Select a run.
4. Load its MCAP data.
5. See a 3D vehicle simulation.
6. Press play.
7. Pause.
8. Drag the timeline.
9. Jump to an arbitrary simulation timestamp.
10. See the vehicle position update correctly.
11. See telemetry update with the simulation.
12. See metric plots.
13. See the map/trajectory.
14. See the current FPS.
15. Replay a sufficiently large MCAP without downloading the entire file unnecessarily.
16. Continue interacting with the UI while data is being loaded.

---

# 31. Engineering Philosophy

Prefer the simplest architecture that satisfies the requirements.

Do not prematurely introduce:

* Microservices.
* Backend APIs.
* Databases.
* Message queues.
* Redis.
* Kubernetes.
* Distributed caching.
* Complex state-management frameworks.

This is primarily a browser-based visualization and replay problem.

The most important engineering concerns are:

```text
Correctness
    ↓
Replay synchronization
    ↓
Efficient MCAP access
    ↓
Three.js rendering performance
    ↓
Good UX
```

When forced to choose between architectural complexity and a simple solution that meets the requirements, prefer the simple solution.
