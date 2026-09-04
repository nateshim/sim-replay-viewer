import type { TelemetryPoint, VehicleState } from '../../types';
import MetricPlot from '../metrics/MetricPlot';
import './TelemetrySidebar.css';

interface TelemetrySidebarProps {
  telemetry: TelemetryPoint[];
  currentTime: number;
  duration: number;
  currentState: VehicleState | null;
}

function TelemetrySidebar({
  telemetry,
  currentTime,
  duration,
  currentState,
}: TelemetrySidebarProps) {
  // Get metric values for display
  const speed = currentState?.speed ?? 0;
  const acceleration = currentState?.acceleration ?? 0;
  const jerk = currentState?.jerk ?? 0;
  const yawRate = currentState?.yawRate ?? 0;

  return (
    <div className="telemetry-sidebar">
      <div className="sidebar-header">
        <h2>Telemetry</h2>
      </div>

      <div className="metrics-container">
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Speed</span>
            <span className="metric-value">{speed.toFixed(1)} m/s</span>
          </div>
          <MetricPlot
            data={telemetry}
            dataKey="speed"
            currentTime={currentTime}
            duration={duration}
            color="#4da6ff"
          />
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Acceleration</span>
            <span className="metric-value">{acceleration.toFixed(2)} m/s²</span>
          </div>
          <MetricPlot
            data={telemetry}
            dataKey="acceleration"
            currentTime={currentTime}
            duration={duration}
            color="#6bcf7f"
          />
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Jerk</span>
            <span className="metric-value">{jerk.toFixed(2)} m/s³</span>
          </div>
          <MetricPlot
            data={telemetry}
            dataKey="jerk"
            currentTime={currentTime}
            duration={duration}
            color="#ffb347"
          />
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Yaw Rate</span>
            <span className="metric-value">{yawRate.toFixed(3)} rad/s</span>
          </div>
          <MetricPlot
            data={telemetry}
            dataKey="yawRate"
            currentTime={currentTime}
            duration={duration}
            color="#ff6b6b"
          />
        </div>
      </div>

      <div className="position-info">
        <h3>Position</h3>
        <div className="position-values">
          <div className="position-item">
            <span className="pos-label">X</span>
            <span className="pos-value">{(currentState?.position.x ?? 0).toFixed(2)}</span>
          </div>
          <div className="position-item">
            <span className="pos-label">Y</span>
            <span className="pos-value">{(currentState?.position.y ?? 0).toFixed(2)}</span>
          </div>
          <div className="position-item">
            <span className="pos-label">Z</span>
            <span className="pos-value">{(currentState?.position.z ?? 0).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelemetrySidebar;
