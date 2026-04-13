"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  phi: 0,
  theta: 0.3,
  devicePixelRatio: 1,       // was 2 — halves GPU workload
  diffuse: 0.4,
  mapSamples: 6000,          // was 16000 — major perf saving
  mapBrightness: 1.2,
  dark: 0,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 176 / 255, 30 / 255],
  glowColor: [1, 0.94, 0.87],
  markers: [],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let rafId: ReturnType<typeof requestAnimationFrame>;
    let isVisible = true;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width,
      height: width,
    });

    // Pause RAF when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 },
    );
    if (canvasRef.current) observer.observe(canvasRef.current);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;       // skip render when off-screen
      phi += 0.003;                 // slower rotation = lighter
      globe.update({ phi, width, height: width });
    };
    rafId = requestAnimationFrame(animate);

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      globe.destroy();
    };
  }, [config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500"
      />
    </div>
  );
}
