import './PlaybackControls.css';

interface PlaybackControlsProps {
  isPlaying: boolean;
  playbackRate: number;
  onPlayPause: () => void;
  onSkip: (seconds: number) => void;
  onPlaybackRateChange: (rate: number) => void;
}

function PlaybackControls({
  isPlaying,
  playbackRate,
  onPlayPause,
  onSkip,
  onPlaybackRateChange,
}: PlaybackControlsProps) {
  const playbackRates = [0.25, 0.5, 1, 1.5, 2, 4];

  return (
    <div className="playback-controls">
      <div className="controls-left">
        <button
          className="control-btn skip-btn"
          onClick={() => onSkip(-10)}
          title="Skip back 10s"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
          </svg>
        </button>

        <button
          className="control-btn play-btn"
          onClick={onPlayPause}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          className="control-btn skip-btn"
          onClick={() => onSkip(10)}
          title="Skip forward 10s"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
          </svg>
        </button>
      </div>

      <div className="controls-right">
        <div className="playback-rate">
          <label>Speed:</label>
          <select
            value={playbackRate}
            onChange={(e) => onPlaybackRateChange(parseFloat(e.target.value))}
          >
            {playbackRates.map((rate) => (
              <option key={rate} value={rate}>
                {rate}x
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default PlaybackControls;
