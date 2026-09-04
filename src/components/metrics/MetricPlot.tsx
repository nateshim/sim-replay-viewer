import { useRef, useEffect, useMemo } from 'react';
import type { TelemetryPoint } from '../../types';
import './MetricPlot.css';

interface MetricPlotProps {
  data: TelemetryPoint[];
  dataKey: keyof TelemetryPoint;
  currentTime: number;
  duration: number;
  color: string;
}

function MetricPlot({ data, dataKey, currentTime, duration, color }: MetricPlotProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Calculate min/max for scaling
  const { minValue, maxValue } = useMemo(() => {
    if (data.length === 0) {
      return { minValue: 0, maxValue: 1, values: [] };
    }

    const vals = data.map((d) => d[dataKey] as number);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const padding = (max - min) * 0.1 || 1;

    return {
      minValue: min - padding,
      maxValue: max + padding,
    };
  }, [data, dataKey]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Set canvas size
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw data line
    if (data.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      data.forEach((point, index) => {
        const x = duration > 0 ? (point.timestamp / duration) * width : 0;
        const value = point[dataKey] as number;
        const normalizedY = (value - minValue) / (maxValue - minValue);
        const y = height - normalizedY * height;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Fill area under curve
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = color.replace(')', ', 0.1)').replace('rgb', 'rgba');
      ctx.fill();
    }

    // Draw current time indicator
    if (duration > 0) {
      const currentX = (currentTime / duration) * width;

      ctx.beginPath();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.moveTo(currentX, 0);
      ctx.lineTo(currentX, height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw current value dot
      const currentIndex = data.findIndex((d) => d.timestamp >= currentTime);
      if (currentIndex >= 0) {
        const currentValue = data[currentIndex][dataKey] as number;
        const normalizedY = (currentValue - minValue) / (maxValue - minValue);
        const currentY = height - normalizedY * height;

        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [data, dataKey, currentTime, duration, color, minValue, maxValue]);

  return (
    <div className="metric-plot">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default MetricPlot;
