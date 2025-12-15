import React, { useRef, useEffect } from 'react';
import './CircuitBoard.css';

interface CircuitBoardProps {
  children?: React.ReactNode;
}

// ---------- Utilities ----------
// let seed = 12345;
// function rand(max: number) {
//   seed = (seed * 16807) % 2147483647;
//   return (seed / 2147483647) * max;
// }

function rand(max: number) {
  return Math.random() * max;
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

const CircuitBoard = ({ children }: CircuitBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = (width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      draw(ctx, width, height);
    };

    // Observe the canvas's *layout box*
    roRef.current = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      if (width === 0 || height === 0) return;

      resize(width, height);
    });

    roRef.current.observe(canvas);

    return () => {
      roRef.current?.disconnect();
      roRef.current = null;
    };
  }, []);

  // ---------- Drawing logic ----------
  function draw(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    // Background
    ctx.fillStyle = "rgba(94, 246, 255, 0.1)"; // PCB green
    ctx.fillRect(0, 0, width, height);
    // Traces
    drawTraces(ctx, width, height);
    // Pads / vias
    // drawVias(ctx, width, height);
  }

  function drawTraces(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    const spacing = 6;
    const angle = Math.PI / 4;
    const length = Math.hypot(width, height);

    ctx.strokeStyle = "rgba(94, 246, 255, 0.12)";
    ctx.lineWidth = 1.5;

    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(angle);
    ctx.translate(-width / 2, -height / 2);

    for (let y = -length; y < height + length; y += spacing) {
      ctx.beginPath();

      let x = -length;
      let currentY = y;

      ctx.moveTo(x, currentY);

      while (x < width + length) {
        const segment = 40 + Math.random() * 60;

        x += segment;
        ctx.lineTo(x, currentY);

        // small jog
        if (Math.random() < 0.15) {
          currentY += spacing * (Math.random() > 0.5 ? 1 : -1);
          ctx.lineTo(x, currentY);
        }
      }

      ctx.stroke();
    }

    ctx.restore();
  }

  // function drawVias(
  //   ctx: CanvasRenderingContext2D,
  //   width: number,
  //   height: number
  // ) {
  //   const viaCount = Math.floor((width * height) / 8000);

  //   for (let i = 0; i < viaCount; i++) {
  //     const x = rand(width);
  //     const y = rand(height);

  //     // Outer ring
  //     ctx.fillStyle = "rgba(94, 246, 255, 0.6)";
  //     ctx.beginPath();
  //     ctx.arc(x, y, 5, 0, Math.PI * 2);
  //     ctx.fill();

  //     // Inner hole
  //     ctx.fillStyle = "rgba(94, 246, 255, 0.2)";
  //     ctx.beginPath();
  //     ctx.arc(x, y, 2.1, 0, Math.PI * 2);
  //     ctx.fill();
  //   }
  // }

  return (
    <div className="circuit-board-container">
      <canvas ref={canvasRef} className="circuit-board-canvas" />
      <div className="circuit-board-content">{children}</div>
    </div>
  );
};

export default CircuitBoard;