import { useRef, useEffect } from 'react';
import './BarCode.css';

interface Props {
  className?: string;
  fillProbability?: number;
}

const BarCode = ({
  className = '',
  fillProbability = 0.5
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const COLUMN_WIDTH = 2;
    const ROW_HEIGHT = 10;

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate numbeer of columns and rows that fit
      const numColumns = Math.floor(canvas.width / COLUMN_WIDTH);
      const numRows = Math.floor(canvas.height / ROW_HEIGHT);

      // Draw grid
      ctx.fillStyle = '#F75049';

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
          // Randomly fill cells
          if (Math.random() < fillProbability) {
            ctx.fillRect(
              col * COLUMN_WIDTH,
              row * ROW_HEIGHT,
              COLUMN_WIDTH,
              ROW_HEIGHT
            );
          }
        }
      }
    }

    // Initial render
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.addEventListener('resize', resizeCanvas);
    }
  }, [fillProbability]);

  return (
    <div className={`bar-code-container ${className}`}>
      <canvas ref={canvasRef} className="bar-code__canvas" />
    </div>
  );
};

export default BarCode;
