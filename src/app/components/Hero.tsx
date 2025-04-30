"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { AuroraText } from "@/app/components/magicui/aurora-text";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-black text-white relative overflow-hidden">
      {/* Text content */}
      <div className="z-10 max-w-xl py-16">
      <div className="text-4xl md:text-5xl font-bold leading-tight">
        Hi, I'm Maad.<br/>I'm a{" "}
        <AuroraText className="inline-block">
          <Typewriter
            words={["Developer", "Gamer", "Diver"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={140}
            deleteSpeed={100}
            delaySpeed={1800}
          />
        </AuroraText>
      </div>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      {/* Inline SVG */}
      <div className="w-full md:w-1/2 flex justify-center py-10 md:py-0">
      <Image
          src="/heropic.svg"
          alt="Developer Illustration"
          width={600}
          height={600}
          className="w-full max-w-md md:max-w-xl"
          priority
        />
      </div>
    </section>
  );
}
