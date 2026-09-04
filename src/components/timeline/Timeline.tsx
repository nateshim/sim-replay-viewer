import { useCallback, useRef } from 'react';
import './Timeline.css';

interface TimelineProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  isPlaying: boolean;
}

/**
 * Format time as mm:ss
 */
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function Timeline({ currentTime, duration, onSeek }: TimelineProps) {
  const sliderRef = useRef<HTMLInputElement>(null);
  const isDragging = useRef(false);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      const newTime = (value / 100) * duration;
      onSeek(newTime);
    },
    [duration, onSeek]
  );

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="timeline">
      <span className="timeline-time current">{formatTime(currentTime)}</span>
      <div className="timeline-slider-container">
        <div
          className="timeline-progress"
          style={{ width: `${progress}%` }}
        />
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          className="timeline-slider"
        />
      </div>
      <span className="timeline-time duration">{formatTime(duration)}</span>
    </div>
  );
}

export default Timeline;
