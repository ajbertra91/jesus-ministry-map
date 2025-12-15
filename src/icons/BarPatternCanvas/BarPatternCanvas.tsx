import { useRef, useEffect } from "react";
import "./BarPatternCanvas.css";

const BAR_PATTERN = [0.5, 0.5, 0.5, 1, 1, 1, 0.5, 1];

function drawBars(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  ctx.clearRect(0, 0, width, height);

  const barWidth = 6;
  const gap = 3;
  const fullHeight = height;
  const halfHeight = height * 0.5;

  ctx.strokeStyle = "rgba(94, 246, 255, 0.1)";
  ctx.lineWidth = 2;

  let x = 0;
  let patternIndex = 0;

  while (x < width) {
    const scale = BAR_PATTERN[patternIndex];
    const barHeight = scale === 1 ? fullHeight : halfHeight;
    const y = 0;

    ctx.strokeRect(x, y, barWidth, barHeight);

    x += barWidth + gap;
    patternIndex = (patternIndex + 1) % BAR_PATTERN.length;
  }
}

export default function BarPatternCanvas({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const observer = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      if (width === 0 || height === 0) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawBars(ctx, width, height);
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bar-pattern-canvas-container">
      <canvas ref={canvasRef} className="bar-pattern-canvas" />
      <div className="bar-pattern-content">{children}</div>
    </div>
  );
}
