import * as THREE from 'three';
import type { VehicleState } from '../../types';

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

  /**
   * Update trajectory visualization
   * Uses same coordinate conversion as vehicle position
   */
  setTrajectory(positions: Array<{ x: number; y: number; z: number }>): void {
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

    // Debug: log converted coordinates
    const first = points[0];
    const last = points[points.length - 1];
    console.log(`Trajectory: ${points.length} points`);
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
   * Clean up resources
   */
  dispose(): void {
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
