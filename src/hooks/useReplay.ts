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
    duration: 0,
    isPlaying: false,
    playbackRate: 1,
    isLoading: false,
    isSeeking: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>([]);
  const [fullTrajectory, setFullTrajectory] = useState<Array<{ x: number; y: number; z: number }>>([]);

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
        await engine.loadSimulation(simulationUrl);

        // Check if effect was cleaned up during async operation
        if (cancelled) return;

        setTelemetry(engine.getTelemetry());

        // Load full trajectory for visualization (don't block on errors)
        console.log('useReplay: Loading full trajectory...');
        try {
          const trajectory = await engine.loadFullTrajectory();
          console.log('useReplay: Got trajectory with', trajectory.length, 'points');
          if (cancelled) return;
          if (trajectory.length > 0) {
            setFullTrajectory(trajectory);
            console.log('useReplay: Trajectory state updated');
          } else {
            console.warn('useReplay: Trajectory is empty');
          }
        } catch (trajErr) {
          console.error('useReplay: Failed to load trajectory:', trajErr);
          // Don't fail the whole load, just skip trajectory
        }
      } catch (err) {
        // Check if effect was cleaned up during async operation
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
