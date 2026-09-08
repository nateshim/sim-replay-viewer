import { useState, useEffect, useRef, useCallback } from 'react';
import type { ReplayState, VehicleState, TelemetryPoint } from '../types';
import type { MapData } from '../mcap/types';
import { ReplayEngine } from '../replay/ReplayEngine';

/**
 * Hook for managing replay state and engine
 * Uses progressive loading - renders immediately after first chunk,
 * loads trajectory and map data in background
 */
export function useReplay(simulationUrl: string | null) {
  const engineRef = useRef<ReplayEngine | null>(null);
  const [state, setState] = useState<ReplayState>({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
    playbackRate: 1,
    isLoading: false,
    isSeeking: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>([]);
  const [fullTrajectory, setFullTrajectory] = useState<Array<{ x: number; y: number; z: number }>>([]);
  const [mapData, setMapData] = useState<MapData | null>(null);

  // Initialize engine
  useEffect(() => {
    const engine = new ReplayEngine();
    engineRef.current = engine;

    // Subscribe to state changes
    engine.on('stateChange', (newState) => {
      setState(newState as ReplayState);
    });

    engine.on('error', (err) => {
      setError(err instanceof Error ? err.message : 'Unknown error');
    });

    engine.on('loaded', () => {
      setTelemetry(engine.getTelemetry());
    });

    // Subscribe to trajectory updates (progressive loading)
    engine.on('trajectoryUpdate', (trajectory) => {
      setFullTrajectory(trajectory as Array<{ x: number; y: number; z: number }>);
    });

    // Subscribe to map data updates (background loading)
    engine.on('mapDataUpdate', (map) => {
      setMapData(map as MapData);
    });

    return () => {
      engineRef.current = null;
      engine.dispose();
    };
  }, []);

  // Load simulation when URL changes
  useEffect(() => {
    const engine = engineRef.current;
    if (!simulationUrl || !engine) return;

    let cancelled = false;

    const loadSim = async () => {
      try {
        setError(null);
        // Reset state for new simulation
        setFullTrajectory([]);
        setMapData(null);
        setTelemetry([]);

        // Load simulation - this now returns after first chunk is ready
        // Trajectory and map data load in background
        await engine.loadSimulation(simulationUrl);

        if (cancelled) return;

        // Get initial telemetry from first chunk
        setTelemetry(engine.getTelemetry());

        // Get initial trajectory from first chunk (progressive)
        const initialTrajectory = engine.getTrajectory();
        if (initialTrajectory.length > 0) {
          setFullTrajectory(initialTrajectory);
        }

      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Failed to load simulation');
      }
    };

    loadSim();

    return () => {
      cancelled = true;
    };
  }, [simulationUrl]);

  const play = useCallback(() => {
    engineRef.current?.play();
  }, []);

  const pause = useCallback(() => {
    engineRef.current?.pause();
  }, []);

  const togglePlayPause = useCallback(() => {
    engineRef.current?.togglePlayPause();
  }, []);

  const seek = useCallback((time: number) => {
    engineRef.current?.seek(time);
  }, []);

  const skip = useCallback((seconds: number) => {
    engineRef.current?.skip(seconds);
  }, []);

  const setPlaybackRate = useCallback((rate: number) => {
    engineRef.current?.setPlaybackRate(rate);
  }, []);

  const getCurrentVehicleState = useCallback((): VehicleState | null => {
    return engineRef.current?.getCurrentVehicleState() ?? null;
  }, []);

  const getTrajectory = useCallback(() => {
    return engineRef.current?.getTrajectory() ?? [];
  }, []);

  return {
    state,
    error,
    telemetry,
    fullTrajectory,
    mapData,
    play,
    pause,
    togglePlayPause,
    seek,
    skip,
    setPlaybackRate,
    getCurrentVehicleState,
    getTrajectory,
  };
}
