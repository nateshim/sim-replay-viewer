import { useState, useEffect, useRef, useCallback } from 'react';
import type { ReplayState, VehicleState, TelemetryPoint } from '../types';
import { ReplayEngine } from '../replay/ReplayEngine';

/**
 * Hook for managing replay state and engine
 */
export function useReplay(simulationUrl: string | null) {
  const engineRef = useRef<ReplayEngine | null>(null);
  const [state, setState] = useState<ReplayState>({
    currentTime: 0,
    duration: 60,
    isPlaying: false,
    playbackRate: 1,
    isLoading: false,
    isSeeking: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>([]);

  // Initialize engine
  useEffect(() => {
    engineRef.current = new ReplayEngine();

    const engine = engineRef.current;

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

    return () => {
      engine.dispose();
    };
  }, []);

  // Load simulation when URL changes
  useEffect(() => {
    if (!simulationUrl || !engineRef.current) return;

    const loadSim = async () => {
      try {
        setError(null);
        await engineRef.current!.loadSimulation(simulationUrl);
        setTelemetry(engineRef.current!.getTelemetry());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load simulation');
      }
    };

    loadSim();
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

  const getEngine = useCallback(() => engineRef.current, []);

  return {
    state,
    error,
    telemetry,
    play,
    pause,
    togglePlayPause,
    seek,
    skip,
    setPlaybackRate,
    getCurrentVehicleState,
    getTrajectory,
    getEngine,
  };
}
