import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SimulationScene } from '../../three/scene/SimulationScene';
import { useReplay } from '../../hooks/useReplay';
import { useFrameRate } from '../../hooks/useFrameRate';
import { getSimulationUrl } from '../../simulations/simulationService';
import PlaybackControls from './PlaybackControls';
import Timeline from '../timeline/Timeline';
import TelemetrySidebar from '../telemetry/TelemetrySidebar';
import type { VehicleState } from '../../types';
import './SimulationViewer.css';

function SimulationViewer() {
  const { simulationId } = useParams<{ simulationId: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SimulationScene | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const simulationUrl = simulationId ? getSimulationUrl(simulationId) : null;

  const {
    state,
    error,
    telemetry,
    fullTrajectory,
    mapData,
    togglePlayPause,
    seek,
    skip,
    setPlaybackRate,
    getCurrentVehicleState,
    getCurrentDynamicObjects,
  } = useReplay(simulationUrl);

  const { fps, measureFrame } = useFrameRate();
  const [currentVehicleState, setCurrentVehicleState] = useState<VehicleState | null>(null);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    sceneRef.current = new SimulationScene(containerRef.current);

    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  // Set full trajectory when loaded
  useEffect(() => {
    if (sceneRef.current && fullTrajectory.length > 0) {
      sceneRef.current.setTrajectory(fullTrajectory);
    }
  }, [fullTrajectory]);

  // Set map data when loaded
  useEffect(() => {
    if (sceneRef.current && mapData) {
      console.log('Setting map data on scene...');
      sceneRef.current.setMapData(mapData);
    }
  }, [mapData]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      // Get current vehicle state
      const vehicleState = getCurrentVehicleState();
      setCurrentVehicleState(vehicleState);

      // Get current dynamic objects (other vehicles)
      const dynamicObjects = getCurrentDynamicObjects();

      // Update Three.js scene
      if (sceneRef.current) {
        sceneRef.current.updateVehicle(vehicleState);

        // Update dynamic objects if available
        if (dynamicObjects) {
          sceneRef.current.updateDynamicObjects(dynamicObjects);
        }

        sceneRef.current.render();
      }

      // Measure FPS
      measureFrame();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [getCurrentVehicleState, getCurrentDynamicObjects, measureFrame, state.isLoading]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          skip(-5);
          break;
        case 'ArrowRight':
          e.preventDefault();
          skip(5);
          break;
        case 'KeyJ':
          skip(-10);
          break;
        case 'KeyL':
          skip(10);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlayPause, skip]);

  // Decode simulation name from ID
  const simulationName = simulationId
    ? decodeURIComponent(simulationId).split('/').pop()?.replace('.mcap', '') ?? 'Unknown'
    : 'Unknown';

  if (error) {
    return (
      <div className="viewer-container">
        <div className="viewer-error">
          <h2>Error Loading Simulation</h2>
          <p>{error}</p>
          <Link to="/">Back to simulations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="viewer-container">
      <header className="viewer-header">
        <Link to="/" className="back-link">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Back
        </Link>
        <h1>{simulationName}</h1>
        <div className="fps-indicator">FPS: {fps}</div>
      </header>

      <div className="viewer-content">
        <div className="viewer-main">
          <div className="three-container" ref={containerRef}>
            {state.isLoading && (
              <div className="loading-overlay">
                <div className="loading-spinner" />
                <p>Loading simulation...</p>
              </div>
            )}
          </div>
        </div>

        <div className="viewer-sidebar">
          <TelemetrySidebar
            telemetry={telemetry}
            currentTime={state.currentTime}
            duration={state.duration}
            currentState={currentVehicleState}
          />
        </div>
      </div>

      <footer className="viewer-footer">
        <div className="controls-section">
          <PlaybackControls
            isPlaying={state.isPlaying}
            playbackRate={state.playbackRate}
            onPlayPause={togglePlayPause}
            onSkip={skip}
            onPlaybackRateChange={setPlaybackRate}
          />
        </div>
        <div className="timeline-section">
          <Timeline
            currentTime={state.currentTime}
            duration={state.duration}
            onSeek={seek}
            isPlaying={state.isPlaying}
          />
        </div>
      </footer>
    </div>
  );
}

export default SimulationViewer;
