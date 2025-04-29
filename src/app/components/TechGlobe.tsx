"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function TechGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.9, 0.3, 0.3],
      glowColor: [1, 1, 1],
      markers: [],
      onRender: (state) => {
        phi += 0.005;
        state.phi = phi;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        style={{ width: 400, height: 400, maxWidth: "100%" }}
      />
    </div>
  );
}
