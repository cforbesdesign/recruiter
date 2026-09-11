import { useEffect, useRef } from "react";

const RESOLUTION_SCALE = 0.5;
const FRAME_RATE = 12;

/** Full-bleed animated TV-static noise, sized to its parent. Purely decorative. */
export function NoiseBackground({ running }: { running: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runningRef = useRef(running);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = Math.max(1, Math.ceil((rect?.width ?? window.innerWidth) * RESOLUTION_SCALE));
      height = Math.max(1, Math.ceil((rect?.height ?? window.innerHeight) * RESOLUTION_SCALE));
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };
    draw();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("resize", resize);
    }

    const interval = 1000 / FRAME_RATE;
    let lastTime = 0;
    let frameId = requestAnimationFrame(function loop(time) {
      frameId = requestAnimationFrame(loop);
      if (!runningRef.current || time - lastTime < interval || document.hidden) return;
      lastTime = time;
      draw();
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
