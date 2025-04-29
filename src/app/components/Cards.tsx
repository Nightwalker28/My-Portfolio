"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export function Card({ title, description, buttonText, buttonLink }: CardProps) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  whileHover={{ scale: 1.03, boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.1)" }}
  whileTap={{ scale: 0.98 }}
  className="rounded-2xl p-8 bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 flex flex-col justify-between"
>
      <div>
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>

      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition"
        >
          {buttonText}
        </a>
      )}
    </motion.div>
  );
}
