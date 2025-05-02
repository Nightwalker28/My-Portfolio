"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function TechGlobeCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(1.520); // exactly centered on Sri Lanka
  const pointerStart = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const velocity = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasRef.current.offsetWidth * 2,
      height: canvasRef.current.offsetHeight * 2,
      phi: 1.509,
      theta: 0.6,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 5,
      baseColor: [0.2, 0.6, 1],
      markerColor: [0.5, 0.9, 1],
      glowColor: [0.3, 0.7, 1],
      markers: [
        {
          location: [7.8731, 80.7718],
          size: 0.15,
        },
      ],
      onRender: (state) => {
        if (!isDragging.current) {
          state.phi = phiRef.current;
        } else {
          phiRef.current += velocity.current;
          velocity.current *= 0.9;
          state.phi = phiRef.current;
        }
      },
    });

    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      pointerInteracting.current = e.clientX;
      pointerStart.current = phiRef.current;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        const delta = (e.clientX - pointerInteracting.current) / 200;
        phiRef.current = pointerStart.current + delta;
      }
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      pointerInteracting.current = null;
    };

    canvasRef.current.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      globe.destroy();
      canvasRef.current?.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden rounded-2xl bg-gradient-to-b from-black/60 to-black/90 border border-white/10 shadow-lg flex items-center justify-center">
      {/* Globe */}
      <canvas
        ref={canvasRef}
        className="w-full h-full scale-[1.8] cursor-grab active:cursor-grabbing"
      />

      {/* Top Text */}
      <div className="absolute top-4 w-full text-center text-[#A1BFFF] font-semibold text-sm z-10">
        I'm very flexible with time<br />zone communications
      </div>

      {/* Location Info */}
      <div className="absolute bottom-4 left-4 text-white/80 text-xs flex items-center gap-2 z-10">
        <span className="text-sm">📍</span>
        <div>
          Remote<br />
          <span className="font-bold text-white">Sri Lanka – 19:05</span>
        </div>
      </div>
    </div>
  );
}