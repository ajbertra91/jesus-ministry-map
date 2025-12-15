import { useRef, useEffect, useState } from "react";
import './RevealPanelCanvas.css';

type Phase = "line" | "expand" | "fill" | "flicker" | "done";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function RouteRevealCanvas({
  children
}: {
  children: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width, height };
    };

    let { width, height } = resize();
    const ro = new ResizeObserver(() => ({ width, height } = resize()));
    ro.observe(container);

    let frame = 0;
    let phase: Phase = "line";
    let start = performance.now();

    const centerY = height / 2;

    const reset = () => {
      frame = 0;
      phase = "line";
      start = performance.now();
      setRevealed(false);
      requestAnimationFrame(draw);
    };

    // -------- Route Change Sync --------
    let lastPath = location.pathname;
    const routeWatcher = () => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        reset();
      }
    };

    const push = history.pushState;
    history.pushState = function () {
      push.apply(this, arguments as any);
      routeWatcher();
    };

    window.addEventListener("popstate", routeWatcher);

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      frame++;

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(247, 80, 73)";
      ctx.fillStyle = "rgba(247, 80, 73, 0.2)";

      // Glow
      ctx.shadowColor = "rgb(247, 80, 73)";
      ctx.shadowBlur = 12;

      const elapsed = time - start;

      // ---------- LINE ----------
      if (phase === "line") {
        const t = Math.min(elapsed / 500, 1);
        const eased = easeOutCubic(t);
        const len = width * eased;

        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(len, centerY);
        ctx.stroke();

        if (t === 1) {
          phase = "expand";
          start = time;
        }
      }

      // ---------- EXPAND ----------
      else if (phase === "expand") {
        const t = Math.min(elapsed / 400, 1);
        const eased = easeOutCubic(t);
        const h = height * eased;

        ctx.fillRect(0, centerY - h / 2, width, h);

        if (t === 1) {
          phase = "fill";
        }
      }

      // ---------- FILL ----------
      else if (phase === "fill") {
        ctx.fillRect(0, 0, width, height);
        phase = "flicker";
        start = time;
      }

      // ---------- SCANLINE FLICKER ----------
      else if (phase === "flicker") {
        ctx.fillRect(0, 0, width, height);

        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;

        const lines = 20;
        for (let i = 0; i < lines; i++) {
          const y = ((frame * 6) + i * 15) % height;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        if (elapsed > 450) {
          phase = "done";
          setRevealed(true);
        }
      }

      if (phase !== "done") {
        requestAnimationFrame(draw);
      }
    }

    reset();

    return () => {
      ro.disconnect();
      window.removeEventListener("popstate", routeWatcher);
      history.pushState = push;
    };
  }, []);

  return (
    <div ref={containerRef} className="route-reveal-container">
      <canvas ref={canvasRef} className={`route-reveal-canvas ${revealed ? "is-not-visible" : ""}`} />
      <div className={`route-reveal-content ${revealed ? "is-visible" : ""}`}>
        {children}
      </div>
    </div>
  );
}
