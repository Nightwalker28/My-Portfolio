"use client";

import { useEffect, useRef } from "react";

export function TechStackCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tagcanvas.min.js";
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      if (window.TagCanvas && canvasRef.current) {
        try {
          // @ts-ignore
          window.TagCanvas.Start("techCanvas", "", {
            textColour: null,
            outlineColour: "rgba(255,255,255,0.2)",
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.03,
            initial: [0.08, -0.08],
            dragControl: true,
            wheelZoom: false,
            freezeActive: false,
            shuffleTags: true,
            shape: "sphere",
            pinchZoom: true,
            zoom: 1.2,
            noSelect: true,
          });

          // Now listen for mouse up after dragging
          const canvas = canvasRef.current;

          if (canvas) {
            canvas.addEventListener("mouseup", () => {
              // @ts-ignore
              window.TagCanvas.SetSpeed("techCanvas", [0.08, -0.08]);
            });

            canvas.addEventListener("touchend", () => {
              // @ts-ignore
              window.TagCanvas.SetSpeed("techCanvas", [0.08, -0.08]);
            });
          }
        } catch (e) {
          console.error("TagCanvas error:", e);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm h-[560px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
      {/* Globe */}
      <canvas
        ref={canvasRef}
        id="techCanvas"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-half object-cover  z-0"
      >
        {/* Logos injected inside canvas */}
        <a href="#"><img height="38" width="38" alt="TypeScript" src="https://cdn.simpleicons.org/typescript" /></a>
        <a href="#"><img height="38" width="38" alt="JavaScript" src="https://cdn.simpleicons.org/javascript" /></a>
        <a href="#"><img height="38" width="38" alt="React" src="https://cdn.simpleicons.org/react" /></a>
        <a href="#"><img height="38" width="38" alt="Next.js" src="https://cdn.simpleicons.org/nextdotjs/white" /></a>
        <a href="#"><img height="38" width="38" alt="Node.js" src="https://cdn.simpleicons.org/nodedotjs" /></a>
        <a href="#"><img height="38" width="38" alt="Zod" src="https://cdn.simpleicons.org/zod" /></a>
        <a href="#"><img height="38" width="38" alt="Android" src="https://cdn.simpleicons.org/android" /></a>
        <a href="#"><img height="38" width="38" alt="HTML5" src="https://cdn.simpleicons.org/html5" /></a>
        <a href="#"><img height="38" width="38" alt="CSS3" src="https://cdn.simpleicons.org/css3" /></a>
        <a href="#"><img height="38" width="38" alt="Express" src="https://cdn.simpleicons.org/express/white" /></a>
        <a href="#"><img height="38" width="38" alt="Prisma" src="https://cdn.simpleicons.org/prisma" /></a>
        <a href="#"><img height="38" width="38" alt="MongoDB" src="https://cdn.simpleicons.org/mongodb" /></a>
        <a href="#"><img height="38" width="38" alt="AWS" src="https://cdn.simpleicons.org/amazonwebservices" /></a>
        <a href="#"><img height="38" width="38" alt="PostgreSQL" src="https://cdn.simpleicons.org/postgresql" /></a>
        <a href="#"><img height="38" width="38" alt="NGINX" src="https://cdn.simpleicons.org/nginx" /></a>
        <a href="#"><img height="38" width="38" alt="Vercel" src="https://cdn.simpleicons.org/vercel/white" /></a>
        <a href="#"><img height="38" width="38" alt="Jest" src="https://cdn.simpleicons.org/jest" /></a>
        <a href="#"><img height="38" width="38" alt="Docker" src="https://cdn.simpleicons.org/docker" /></a>
        <a href="#"><img height="38" width="38" alt="Git" src="https://cdn.simpleicons.org/git" /></a>
        <a href="#"><img height="38" width="38" alt="GitHub" src="https://cdn.simpleicons.org/github/white" /></a>
        <a href="#"><img height="38" width="38" alt="pnpm" src="https://cdn.simpleicons.org/pnpm" /></a>
        <a href="#"><img height="38" width="38" alt="npm" src="https://cdn.simpleicons.org/npm" /></a>
        <a href="#"><img height="38" width="38" alt="shadcn/ui" src="https://cdn.simpleicons.org/shadcnui" /></a>
        <a href="#"><img height="38" width="38" alt="TailwindCSS" src="https://cdn.simpleicons.org/tailwindcss" /></a>
        <a href="#"><img height="38" width="38" alt="Framer" src="https://cdn.simpleicons.org/framer" /></a>
        <a href="#"><img height="38" width="38" alt="React Hook Form" src="https://cdn.simpleicons.org/reacthookform" /></a>
        <a href="#"><img height="38" width="38" alt="MySQL" src="https://cdn.simpleicons.org/mysql" /></a>
        <a href="#"><img height="38" width="38" alt="Expo" src="https://cdn.simpleicons.org/expo/gray" /></a>
        <a href="#"><img height="38" width="38" alt="Clerk" src="https://cdn.simpleicons.org/clerk" /></a>
        <a href="#"><img height="38" width="38" alt="Linux" src="https://cdn.simpleicons.org/linux" /></a>
        <a href="#"><img height="38" width="38" alt="Linux" src="https://cdn.simpleicons.org/python" /></a>
        <a href="#"><img height="38" width="38" alt="Linux" src="https://cdn.simpleicons.org/redis" /></a>
        <a href="#"><img height="38" width="38" alt="Linux" src="https://cdn.simpleicons.org/flutter" /></a>
        {/* Add more logos */}
      </canvas>
      <div className="absolute bottom-4 left-4 z-10 text-white">
        <p className="text-sm text-gray-400">Tech Enthusiast</p>
        <h3 className="text-lg font-semibold leading-snug mt-1">
          Passionate about cutting-edge development technologies
        </h3>
        <a
          href="#"
          className="mt-2 inline-block text-sm font-medium text-white/80 hover:text-white transition"
        >
          Know more →
        </a>
      </div>
    </div>
  );
}



