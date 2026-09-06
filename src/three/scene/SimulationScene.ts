import * as THREE from 'three';
import type { VehicleState } from '../../types';
import type { MapData, SceneEntity, Grid, PointCloud } from '../../mcap/types';

/**
 * Three.js scene for simulation visualization
 * Updates imperatively, not through React state per AGENTS.md
 */
export class SimulationScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private vehicle: THREE.Group;
  private trajectory: THREE.Line | null = null;
  private ground: THREE.Mesh;
  private grid: THREE.GridHelper;
  private axesHelper: THREE.AxesHelper;

  // Map visualization objects
  private mapGroup: THREE.Group | null = null;
  private pointCloudPoints: THREE.Points | null = null;
  private drivableAreaMesh: THREE.Mesh | null = null;

  // Camera follow settings - positioned behind and above the vehicle
  // After base rotation (+90° around Y), offset is transformed:
  // (0, 10, -25) → (-25, 10, 0) = behind car facing +X
  // (0, 2, 30) → (30, 2, 0) = in front of car facing +X
  private cameraOffset = new THREE.Vector3(0, 10, -25); // Behind the car model (+Z forward)
  private cameraLookAhead = new THREE.Vector3(0, 2, 30); // In front of the car model
  private followVehicle = true;
  private cameraLerpFactor = 0.1; // Smooth camera movement

  // Reusable objects to avoid allocation in render loop
  private tempPosition = new THREE.Vector3();
  private tempQuaternion = new THREE.Quaternion();
  private tempCameraPos = new THREE.Vector3();
  private tempLookAt = new THREE.Vector3();

  // Base rotation to align car model (+Z forward) with NuScenes convention (+X forward at yaw=0)
  // +90° around Y rotates +Z to +X
  private baseRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);

  constructor(container: HTMLElement) {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);
    this.scene.fog = new THREE.Fog(0x1a1a2e, 100, 500);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 50, 80);
    this.camera.lookAt(0, 0, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    this.scene.add(directionalLight);

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a4a,
      roughness: 0.8,
      metalness: 0.2,
    });
    this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    // Grid helper
    this.grid = new THREE.GridHelper(200, 40, 0x4a4a6a, 0x3a3a5a);
    this.grid.position.y = 0.1;
    this.scene.add(this.grid);

    // Axes helper
    this.axesHelper = new THREE.AxesHelper(10);
    this.scene.add(this.axesHelper);

    // Create vehicle
    this.vehicle = this.createVehicle();
    this.scene.add(this.vehicle);

    // Handle resize
    window.addEventListener('resize', this.handleResize);
  }

  /**
   * Create a simple vehicle representation
   */
  private createVehicle(): THREE.Group {
    const group = new THREE.Group();

    // Car body
    const bodyGeometry = new THREE.BoxGeometry(4, 1.5, 8);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x4da6ff,
      metalness: 0.6,
      roughness: 0.4,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1;
    body.castShadow = true;
    group.add(body);

    // Cabin
    const cabinGeometry = new THREE.BoxGeometry(3, 1.2, 4);
    const cabinMaterial = new THREE.MeshStandardMaterial({
      color: 0x2d5a87,
      metalness: 0.8,
      roughness: 0.2,
    });
    const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
    cabin.position.set(0, 2, -0.5);
    cabin.castShadow = true;
    group.add(cabin);

    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.4, 16);
    const wheelMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.9,
    });

    const wheelPositions = [
      { x: 2, y: 0.5, z: 2.5 },
      { x: -2, y: 0.5, z: 2.5 },
      { x: 2, y: 0.5, z: -2.5 },
      { x: -2, y: 0.5, z: -2.5 },
    ];

    wheelPositions.forEach((pos) => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos.x, pos.y, pos.z);
      wheel.castShadow = true;
      group.add(wheel);
    });

    // Headlights
    const headlightGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const headlightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffcc });

    const headlightPositions = [
      { x: 1.2, y: 1, z: 4 },
      { x: -1.2, y: 1, z: 4 },
    ];

    headlightPositions.forEach((pos) => {
      const headlight = new THREE.Mesh(headlightGeometry, headlightMaterial);
      headlight.position.set(pos.x, pos.y, pos.z);
      group.add(headlight);
    });

    // Direction indicator (arrow on top)
    const arrowGeometry = new THREE.ConeGeometry(0.5, 1.5, 4);
    const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
    const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrow.rotation.x = Math.PI / 2;
    arrow.position.set(0, 3.5, 2);
    group.add(arrow);

    return group;
  }

  // Store raw trajectory for comparison
  private rawTrajectoryPositions: Array<{ x: number; y: number; z: number }> = [];

  /**
   * Update trajectory visualization
   * Uses same coordinate conversion as vehicle position
   */
  setTrajectory(positions: Array<{ x: number; y: number; z: number }>): void {
    // Store raw positions for comparison
    this.rawTrajectoryPositions = positions;

    // Remove existing trajectory
    if (this.trajectory) {
      this.scene.remove(this.trajectory);
      this.trajectory.geometry.dispose();
      (this.trajectory.material as THREE.Material).dispose();
      this.trajectory = null;
    }

    if (positions.length < 2) {
      console.log('Trajectory: Not enough points', positions.length);
      return;
    }

    // Create new trajectory line - convert NuScenes ENU to Three.js
    // Slightly above ground (0.5) to be clearly visible
    const points = positions.map((p) => new THREE.Vector3(p.x, (p.z || 0) + 0.5, -p.y));

    // Debug: log RAW coordinates (before conversion)
    const firstRaw = positions[0];
    const lastRaw = positions[positions.length - 1];
    console.log(`Trajectory RAW: ${positions.length} points`);
    console.log(`  First RAW (NuScenes): (${firstRaw.x.toFixed(2)}, ${firstRaw.y.toFixed(2)}, ${firstRaw.z.toFixed(2)})`);
    console.log(`  Last RAW (NuScenes): (${lastRaw.x.toFixed(2)}, ${lastRaw.y.toFixed(2)}, ${lastRaw.z.toFixed(2)})`);

    // Debug: log converted coordinates
    const first = points[0];
    const last = points[points.length - 1];
    console.log(`Trajectory CONVERTED (Three.js): ${points.length} points`);
    console.log(`  First Three.js: (${first.x.toFixed(2)}, ${first.y.toFixed(2)}, ${first.z.toFixed(2)})`);
    console.log(`  Last Three.js: (${last.x.toFixed(2)}, ${last.y.toFixed(2)}, ${last.z.toFixed(2)})`);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Use a thicker line via LineBasicMaterial (note: linewidth > 1 only works on some systems)
    // For better visibility, we'll use a bright color
    const material = new THREE.LineBasicMaterial({
      color: 0x00ffff, // Cyan for better visibility
      linewidth: 2,
    });

    this.trajectory = new THREE.Line(geometry, material);
    this.scene.add(this.trajectory);

    console.log('Trajectory line added to scene with', points.length, 'points');
  }

  /**
   * Get trajectory positions for comparison
   */
  getTrajectoryPositions(): Array<{ x: number; y: number; z: number }> {
    return this.rawTrajectoryPositions;
  }

  // Debug: track last logged time for comparison
  private lastComparisonLogTime: number = 0;

  /**
   * Update vehicle state (called every frame)
   * NuScenes uses ENU: X=East, Y=North, Z=Up
   * Three.js uses: X=Right, Y=Up, Z=Towards viewer
   */
  updateVehicle(state: VehicleState | null): void {
    if (!state) return;

    // Convert NuScenes ENU to Three.js coordinate system
    // Three.js X = NuScenes X (East)
    // Three.js Y = NuScenes Z (Up) - but ground vehicles have Z≈0, so use small offset
    // Three.js Z = -NuScenes Y (South, since Three.js Z points towards viewer)
    this.tempPosition.set(
      state.position.x,
      state.position.z || 0,
      -state.position.y
    );
    this.vehicle.position.copy(this.tempPosition);

    // Debug: compare vehicle position with trajectory periodically
    const now = performance.now();
    if (now - this.lastComparisonLogTime > 3000 && this.rawTrajectoryPositions.length > 0) {
      this.lastComparisonLogTime = now;

      // Find nearest trajectory point by time (assume trajectory is at regular intervals)
      const trajectoryDuration = 17; // Approximate, from summary
      const trajIndex = Math.min(
        Math.floor((state.timestamp / trajectoryDuration) * this.rawTrajectoryPositions.length),
        this.rawTrajectoryPositions.length - 1
      );
      const nearestTrajPoint = this.rawTrajectoryPositions[trajIndex];

      if (nearestTrajPoint) {
        const distance = Math.sqrt(
          Math.pow(state.position.x - nearestTrajPoint.x, 2) +
          Math.pow(state.position.y - nearestTrajPoint.y, 2) +
          Math.pow(state.position.z - nearestTrajPoint.z, 2)
        );

        console.log(`[Vehicle vs Trajectory] t=${state.timestamp.toFixed(2)}s`);
        console.log(`  Vehicle RAW pos: (${state.position.x.toFixed(2)}, ${state.position.y.toFixed(2)}, ${state.position.z.toFixed(2)})`);
        console.log(`  Trajectory[${trajIndex}] RAW: (${nearestTrajPoint.x.toFixed(2)}, ${nearestTrajPoint.y.toFixed(2)}, ${nearestTrajPoint.z.toFixed(2)})`);
        console.log(`  Distance: ${distance.toFixed(2)}m`);
      }
    }

    // Convert quaternion from NuScenes to Three.js
    // NuScenes: rotation around Z-axis (up) for yaw
    // Three.js: rotation around Y-axis (up) for yaw
    //
    // NuScenes quaternion (x, y, z, w) where rotation is around Z
    // Three.js needs rotation around Y
    this.tempQuaternion.set(
      state.rotation.x,   // X component (typically 0 for ground vehicles)
      state.rotation.z,   // Z->Y: yaw rotation component
      -state.rotation.y,  // Y->Z: pitch component (negated due to axis flip)
      state.rotation.w    // W component stays the same
    );

    // Apply base rotation to align car model with NuScenes convention
    // Car model faces +Z, but NuScenes yaw=0 means facing +X
    this.tempQuaternion.multiply(this.baseRotation);
    this.vehicle.quaternion.copy(this.tempQuaternion);

    // Update camera to follow behind vehicle
    if (this.followVehicle) {
      // Calculate camera position: offset rotated by vehicle's orientation
      this.tempCameraPos.copy(this.cameraOffset);
      this.tempCameraPos.applyQuaternion(this.tempQuaternion);
      this.tempCameraPos.add(this.tempPosition);

      // Calculate look-at target: ahead of vehicle
      this.tempLookAt.copy(this.cameraLookAhead);
      this.tempLookAt.applyQuaternion(this.tempQuaternion);
      this.tempLookAt.add(this.tempPosition);

      // Smooth camera movement
      this.camera.position.lerp(this.tempCameraPos, this.cameraLerpFactor);
      this.camera.lookAt(this.tempLookAt);
    }
  }

  /**
   * Render the scene
   */
  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Handle window resize
   */
  private handleResize = (): void => {
    const container = this.renderer.domElement.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  /**
   * Set camera follow mode
   */
  setFollowVehicle(follow: boolean): void {
    this.followVehicle = follow;
  }

  /**
   * Reset camera to initial position
   */
  resetCamera(): void {
    this.camera.position.set(0, 50, 80);
    this.camera.lookAt(0, 0, 0);
  }

  /**
   * Set map data (semantic map, drivable area, point cloud)
   */
  setMapData(mapData: MapData): void {
    console.log('SimulationScene.setMapData called');

    // Clear existing map objects
    this.clearMapObjects();

    // Create a group for all map objects
    this.mapGroup = new THREE.Group();
    this.mapGroup.name = 'mapGroup';

    // Render semantic map entities (roads, buildings, etc.)
    if (mapData.semanticMap?.entities) {
      console.log('Rendering semantic map with', mapData.semanticMap.entities.length, 'entities');
      this.renderSemanticMap(mapData.semanticMap.entities);
    }

    // Render drivable area
    if (mapData.drivableArea) {
      console.log('Rendering drivable area');
      this.renderDrivableArea(mapData.drivableArea);
    }

    // Render LIDAR point cloud
    if (mapData.pointCloud) {
      console.log('Rendering point cloud');
      this.renderPointCloud(mapData.pointCloud);
    }

    // Render markers/annotations
    if (mapData.markers?.entities) {
      console.log('Rendering markers with', mapData.markers.entities.length, 'entities');
      this.renderSemanticMap(mapData.markers.entities);
    }

    this.scene.add(this.mapGroup);
    console.log('Map data rendering complete');
  }

  /**
   * Clear existing map visualization objects
   */
  private clearMapObjects(): void {
    if (this.mapGroup) {
      this.scene.remove(this.mapGroup);
      this.mapGroup.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else if (obj.material) {
            obj.material.dispose();
          }
        }
      });
      this.mapGroup = null;
    }

    if (this.pointCloudPoints) {
      this.scene.remove(this.pointCloudPoints);
      this.pointCloudPoints.geometry.dispose();
      (this.pointCloudPoints.material as THREE.Material).dispose();
      this.pointCloudPoints = null;
    }

    if (this.drivableAreaMesh) {
      this.scene.remove(this.drivableAreaMesh);
      this.drivableAreaMesh.geometry.dispose();
      (this.drivableAreaMesh.material as THREE.Material).dispose();
      this.drivableAreaMesh = null;
    }
  }

  /**
   * Render semantic map entities (SceneUpdate format)
   */
  private renderSemanticMap(entities: SceneEntity[]): void {
    if (!this.mapGroup) return;

    for (const entity of entities) {
      // Render lines (roads, lane boundaries, etc.)
      if (entity.lines && entity.lines.length > 0) {
        for (const line of entity.lines) {
          if (!line.points || line.points.length < 2) continue;

          // Convert points to Three.js coordinates (NuScenes ENU to Three.js)
          const points = line.points.map((p) =>
            new THREE.Vector3(p.x, (p.z || 0) + 0.1, -p.y)
          );

          const geometry = new THREE.BufferGeometry().setFromPoints(points);

          // Use line color if available, otherwise default to white
          const color = line.color
            ? new THREE.Color(line.color.r, line.color.g, line.color.b)
            : new THREE.Color(0xffffff);

          const material = new THREE.LineBasicMaterial({
            color,
            linewidth: line.thickness || 1,
          });

          const lineObj = new THREE.Line(geometry, material);
          this.mapGroup.add(lineObj);
        }
      }

      // Render triangles (filled polygons for roads, buildings, etc.)
      if (entity.triangles && entity.triangles.length > 0) {
        for (const tri of entity.triangles) {
          if (!tri.points || tri.points.length < 3) continue;

          // Convert points to Three.js coordinates
          const vertices: number[] = [];
          for (const p of tri.points) {
            vertices.push(p.x, (p.z || 0) + 0.05, -p.y);
          }

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

          // Use indices if available
          if (tri.indices && tri.indices.length > 0) {
            geometry.setIndex(tri.indices);
          }

          geometry.computeVertexNormals();

          const color = tri.color
            ? new THREE.Color(tri.color.r, tri.color.g, tri.color.b)
            : new THREE.Color(0x888888);

          const material = new THREE.MeshBasicMaterial({
            color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: tri.color?.a ?? 0.8,
          });

          const mesh = new THREE.Mesh(geometry, material);
          this.mapGroup.add(mesh);
        }
      }

      // Render cubes (obstacles, etc.)
      if (entity.cubes && entity.cubes.length > 0) {
        for (const cube of entity.cubes) {
          const geometry = new THREE.BoxGeometry(
            cube.size.x,
            cube.size.z || 1,
            cube.size.y
          );

          const color = cube.color
            ? new THREE.Color(cube.color.r, cube.color.g, cube.color.b)
            : new THREE.Color(0xff0000);

          const material = new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: cube.color?.a ?? 0.8,
          });

          const mesh = new THREE.Mesh(geometry, material);

          // Position (convert NuScenes to Three.js)
          if (cube.pose?.position) {
            mesh.position.set(
              cube.pose.position.x,
              (cube.pose.position.z || 0) + (cube.size.z || 1) / 2,
              -cube.pose.position.y
            );
          }

          this.mapGroup.add(mesh);
        }
      }
    }
  }

  /**
   * Render drivable area from Grid data
   */
  private renderDrivableArea(grid: Grid): void {
    if (!this.mapGroup || !grid.data || grid.data.length === 0) return;

    // Debug: log grid structure
    console.log('Grid data structure:', Object.keys(grid));
    console.log('Grid:', {
      columnCount: grid.columnCount,
      rowStride: grid.rowStride,
      cellStride: grid.cellStride,
      cellSize: grid.cellSize,
      dataLength: grid.data?.length,
    });

    const columnCount = grid.columnCount || 100;
    const rowStride = grid.rowStride || 1;
    const rowCount = Math.floor(grid.data.length / rowStride);
    const cellSizeX = grid.cellSize?.x || 1;
    const cellSizeY = grid.cellSize?.y || 1;

    console.log(`Drivable area: ${columnCount}x${rowCount} cells, cell size: ${cellSizeX}x${cellSizeY}`);

    // Create a plane geometry for the drivable area
    const width = columnCount * cellSizeX;
    const height = rowCount * cellSizeY;

    const geometry = new THREE.PlaneGeometry(width, height, columnCount - 1, rowCount - 1);
    geometry.rotateX(-Math.PI / 2); // Lay flat

    // Apply grid position (convert NuScenes to Three.js)
    const posX = grid.pose?.position?.x ?? 0;
    const posY = grid.pose?.position?.y ?? 0;
    const posZ = grid.pose?.position?.z ?? 0;

    const material = new THREE.MeshBasicMaterial({
      color: 0x4a7c4a, // Green tint for drivable area
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });

    this.drivableAreaMesh = new THREE.Mesh(geometry, material);
    this.drivableAreaMesh.position.set(
      posX + width / 2,
      posZ + 0.02, // Slightly above ground
      -(posY + height / 2)
    );

    this.mapGroup.add(this.drivableAreaMesh);
  }

  /**
   * Render LIDAR point cloud
   */
  private renderPointCloud(pointCloud: PointCloud): void {
    if (!this.mapGroup || !pointCloud.data || pointCloud.data.length === 0) return;

    const pointStride = pointCloud.pointStride || 12; // Default: 3 floats (x, y, z)
    const numPoints = Math.floor(pointCloud.data.length / pointStride);

    console.log(`Point cloud: ${numPoints} points, stride: ${pointStride}`);

    // Find x, y, z field offsets
    let xOffset = 0, yOffset = 4, zOffset = 8;
    for (const field of pointCloud.fields || []) {
      if (field.name === 'x') xOffset = field.offset;
      else if (field.name === 'y') yOffset = field.offset;
      else if (field.name === 'z') zOffset = field.offset;
    }

    // Extract points from binary data
    const positions = new Float32Array(numPoints * 3);
    const dataView = new DataView(pointCloud.data.buffer, pointCloud.data.byteOffset, pointCloud.data.byteLength);

    for (let i = 0; i < numPoints; i++) {
      const offset = i * pointStride;
      const x = dataView.getFloat32(offset + xOffset, true);
      const y = dataView.getFloat32(offset + yOffset, true);
      const z = dataView.getFloat32(offset + zOffset, true);

      // Convert NuScenes to Three.js coordinates
      positions[i * 3] = x;
      positions[i * 3 + 1] = z;
      positions[i * 3 + 2] = -y;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffff00,
      size: 0.2,
      sizeAttenuation: true,
    });

    this.pointCloudPoints = new THREE.Points(geometry, material);

    // Apply point cloud pose (convert NuScenes to Three.js)
    if (pointCloud.pose?.position) {
      this.pointCloudPoints.position.set(
        pointCloud.pose.position.x,
        pointCloud.pose.position.z || 0,
        -pointCloud.pose.position.y
      );
    }

    this.mapGroup.add(this.pointCloudPoints);
  }

  /**
   * Clean up resources
   */
  dispose(): void {
    this.clearMapObjects();
    window.removeEventListener('resize', this.handleResize);

    // Dispose of Three.js objects
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose());
        } else {
          object.material.dispose();
        }
      }
    });

    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
