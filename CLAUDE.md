# CLAUDE.md

# Simulation Replay Viewer — Claude Code Instructions

## Project Goal

You are working on a browser-based vehicle simulation replay viewer.

The application uses:

* React
* TypeScript / TSX
* Three.js
* Browser APIs
* MCAP data stored in S3

The application should provide a YouTube-like simulation playback experience with:

* Simulation selection
* 3D replay
* Play/pause
* Timeline scrubbing
* Arbitrary seeking
* Telemetry
* Metric plots
* Vehicle/map visualization
* Real rendering FPS
* Efficient playback of large MCAP files

---

# 1. Read AGENTS.md First

`AGENTS.md` is the primary engineering specification.

Before making substantial changes:

1. Read `AGENTS.md`.
2. Inspect the existing project structure.
3. Understand the existing implementation.
4. Make the smallest change necessary.

Do not contradict the architecture defined in `AGENTS.md`.

---

# 2. Core Constraint: Browser-First

This is a browser application.

Prefer:

```text
React
TypeScript
Three.js
Browser APIs
S3
```

Do NOT introduce a backend unless the task explicitly requires one.

Do not create:

```text
Flask server
Express server
FastAPI server
Postgres database
Redis
```

just because they make a problem easier.

---

# 3. Do Not Over-Engineer

Favor incremental implementation.

Bad approach:

```text
Build entire data architecture
        ↓
Build caching system
        ↓
Build abstraction framework
        ↓
Build UI
        ↓
Discover basic replay doesn't work
```

Preferred:

```text
Build viewer
    ↓
Build replay clock
    ↓
Load real data
    ↓
Seek
    ↓
Synchronize telemetry
    ↓
Optimize
```

Always get a minimal end-to-end flow working before adding complexity.

---

# 4. Most Important Data Flow

Keep this mental model:

```text
S3 MCAP
   ↓
MCAP loader
   ↓
MCAP index
   ↓
timestamp/chunk lookup
   ↓
Replay Engine
   ↓
Simulation State
   ├── Three.js
   ├── Telemetry
   ├── Timeline
   └── Metric Plots
```

The replay engine should be the central source of truth for simulation time.

---

# 5. Replay Clock

Do not tie simulation time directly to rendered frames.

Use elapsed wall-clock time:

```ts
currentTime += deltaTime * playbackRate;
```

The replay should behave correctly at:

```text
30 FPS
45 FPS
60 FPS
120 FPS
```

The simulation clock should not speed up or slow down because rendering FPS changes.

---

# 6. Three.js + React

Avoid React state updates on every animation frame.

Do not do:

```tsx
setCurrentTime(...)
```

60+ times per second unless there is a specific reason.

Prefer:

```text
Replay Engine
     ↓
Three.js refs / objects
```

for high-frequency updates.

React should handle UI state and lower-frequency updates.

Three.js should handle the high-frequency rendering loop.

---

# 7. MCAP Strategy

MCAP files may be very large.

Do not automatically download the entire file.

Use indexing and, where supported, HTTP range requests.

Think in terms of:

```text
timestamp
    ↓
index lookup
    ↓
chunk offset
    ↓
range request
    ↓
decode requested data
```

Seeking should not require replaying the file from timestamp 0.

---

# 8. Indexing Is Important

The interviewer explicitly stated that MCAP indexing is supported.

Treat indexing as a core feature, not an optional optimization.

The implementation should make it possible to efficiently answer:

```text
"What data do I need for simulation time T?"
```

without scanning the entire file.

---

# 9. Performance

Performance matters.

Before optimizing, measure.

Important metrics:

```text
FPS
memory usage
MCAP load time
seek latency
time spent parsing
network transfer
```

The UI must display actual rendering FPS.

Do not hardcode `60 FPS`.

A simple smoothed measurement is sufficient initially.

---

# 10. Caching

Start simple.

A bounded in-memory cache is enough initially.

Example:

```ts
Map<string, Chunk>
```

Do not build a complex cache infrastructure.

If caching becomes necessary:

```text
LRU cache
```

is preferable to an unbounded Map.

---

# 11. Prefetching

Prefetch only after basic playback and seeking work.

During playback:

```text
current chunk
     ↓
render
     +
prefetch next chunk
```

After a seek:

```text
target chunk
     ↓
load
     +
optionally prefetch nearby chunks
```

Do not let speculative prefetching block the current frame.

---

# 12. UI Priorities

The primary UI should resemble a professional simulation/debugging viewer.

Prioritize:

```text
┌───────────────────────────────────────────────┬───────────────┐
│                                               │               │
│                                               │    Metrics    │
│                                               │               │
│             Three.js Viewer                   │    Plots      │
│                                               │               │
│                                               │               │
├───────────────────────────────────────────────┴───────────────┤
│ Playback controls                     Timeline                │
└───────────────────────────────────────────────────────────────┘
```

The viewer should dominate the screen.

The sidebar should provide useful telemetry without overwhelming the visualization.

---

# 13. Metrics

Initial metrics:

* Speed
* Acceleration
* Jerk
* Yaw rate

Telemetry must correspond to the current replay timestamp.

If data exists between samples, interpolate rather than always selecting an arbitrary nearest sample.

---

# 14. Map

The viewer should show vehicle movement in a map/road context.

Start simple.

Prioritize:

1. Vehicle position.
2. Vehicle trajectory.
3. Road/map geometry.
4. Camera orientation.

Do not immediately add a large external mapping system unless required.

---

# 15. TypeScript

Use strong types.

Avoid:

```ts
any
```

Avoid unnecessary type assertions:

```ts
foo as SomeType
```

Prefer well-defined domain types.

Examples:

```ts
Simulation
VehicleState
ReplayState
TelemetryPoint
MCAPChunk
MCAPIndex
```

---

# 16. Components

Keep components focused.

Prefer:

```text
SimulationList
SimulationViewer
TelemetrySidebar
MetricPlot
Timeline
PlaybackControls
FPSIndicator
```

Avoid putting all application behavior inside `App.tsx`.

---

# 17. Hooks

Useful hooks may include:

```text
useReplay
useTelemetry
useFrameRate
useSimulation
```

But do not create abstractions merely for abstraction's sake.

A hook should encapsulate reusable behavior or lifecycle logic.

---

# 18. When Editing Code

Before editing:

1. Find the relevant file.
2. Read enough surrounding code to understand the current architecture.
3. Identify existing abstractions.
4. Reuse them when appropriate.
5. Make the smallest coherent change.

Do not rewrite unrelated code.

Do not rename files/components without a reason.

Do not perform broad refactors while implementing an unrelated feature.

---

# 19. Validation

After meaningful changes:

1. Run TypeScript checks.
2. Run the existing tests.
3. Run the production build.
4. Start the application if possible.
5. Verify the affected behavior.

For rendering changes, verify:

* Scene loads.
* Animation works.
* Camera works.
* Timeline works.
* No obvious console errors.

For MCAP changes, verify:

* Data loads.
* Seeking works.
* Missing data is handled.
* Large files do not unnecessarily load completely.

---

# 20. Debugging Philosophy

When something breaks:

### First

Read the actual error.

### Second

Determine which layer failed:

```text
React
Three.js
Replay Engine
MCAP
Network
Browser
```

### Third

Fix the underlying problem.

Do not immediately add:

```ts
try/catch
```

or:

```ts
as any
```

to hide the issue.

---

# 21. Browser Performance

Be especially careful with:

```text
React re-renders
requestAnimationFrame
Three.js object allocation
geometry creation
material creation
MCAP parsing
large arrays
```

Avoid allocations inside the animation loop where possible.

Bad:

```ts
function animate() {
  const position = new THREE.Vector3(...);
}
```

when the object can be reused.

Prefer reusable objects where profiling indicates allocation pressure.

---

# 22. Large MCAP Files

Never assume:

```text
large file = download everything
```

Instead think:

```text
large file
    ↓
metadata
    ↓
index
    ↓
targeted access
    ↓
small working set
```

Browser memory should remain bounded.

---

# 23. Dependencies

Before adding a package, explain why it is necessary.

Prefer existing:

```text
Browser APIs
Three.js
React
TypeScript
```

over adding another library.

Do not add dependencies for functionality that is trivial to implement locally.

---

# 24. Do Not Invent Backend Requirements

If a requirement can be implemented in the browser, prefer the browser.

For example:

```text
MCAP parsing
index lookup
telemetry processing
FPS calculation
timeline management
```

should not automatically become backend APIs.

Only introduce a backend if there is a concrete browser limitation or an explicit product requirement.

---

# 25. Implementation Priorities

When deciding what to implement next, use this order:

```text
1. Correct replay behavior
2. Correct MCAP data access
3. Correct seeking
4. Three.js rendering
5. Telemetry synchronization
6. Timeline UX
7. Metric visualization
8. Map visualization
9. Performance optimization
10. Visual polish
```

A beautiful viewer that plays incorrect simulation data is worse than a simple viewer that is correct.

---

# 26. Interview Context

This project may be evaluated as a software-engineering/system-design exercise.

Be prepared to explain:

### Why no backend?

Because the primary workload is:

```text
read simulation artifacts
→ decode relevant data
→ visualize locally
```

A backend is unnecessary unless authentication, preprocessing, centralized indexing, or other server-side requirements appear.

### How do large MCAP files work?

Use:

```text
MCAP indexing
+
HTTP range requests
+
chunk-level loading
+
bounded caching
+
optional prefetching
```

### How does seeking work?

```text
timestamp
→ index
→ chunk
→ range request
→ decode
→ update replay state
```

### How does playback remain smooth?

Separate:

```text
simulation clock
```

from:

```text
rendering FPS
```

### How is React kept performant?

React owns UI state.

Three.js owns high-frequency rendering state.

---

# 27. Avoid Premature System Design

Do not spontaneously introduce:

```text
microservices
Kafka
Redis
Postgres
Kubernetes
GraphQL
WebSockets
```

unless the requirements actually justify them.

This is a client-side simulation replay problem.

Simple, correct architecture is preferable.

---

# 28. Definition of Done

A feature is not complete merely because the code compiles.

For replay functionality, verify:

```text
Load
  ↓
Play
  ↓
Pause
  ↓
Seek
  ↓
Resume
  ↓
Telemetry synchronization
  ↓
End of simulation
```

For large-data functionality, verify:

```text
Index
  ↓
Targeted load
  ↓
Seek
  ↓
Playback
```

For rendering functionality, verify:

```text
Three.js scene
  ↓
Vehicle updates
  ↓
Map updates
  ↓
FPS measurement
```

---

# 29. General Rule

When uncertain:

> Prefer the simplest implementation that preserves correctness, performance, and the existing architecture.

Do not solve hypothetical scale problems before the actual replay path works.

Do not add infrastructure where browser code is sufficient.

Do not optimize without evidence.

Do not sacrifice correctness for visual polish.
