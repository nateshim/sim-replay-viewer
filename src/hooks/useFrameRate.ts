import { useState, useRef, useCallback } from 'react';

/**
 * Hook for measuring actual rendering FPS
 * Per AGENTS.md: display real rendering FPS, do not hardcode 60
 */
export function useFrameRate() {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  const measureFrame = useCallback(() => {
    frameCount.current++;
    const now = performance.now();
    const elapsed = now - lastTime.current;

    // Update FPS every 500ms for smoothed display
    if (elapsed >= 500) {
      const measuredFps = Math.round((frameCount.current * 1000) / elapsed);
      setFps(measuredFps);
      frameCount.current = 0;
      lastTime.current = now;
    }
  }, []);

  return { fps, measureFrame };
}
