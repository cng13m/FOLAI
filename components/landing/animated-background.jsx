"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="grain" />
      <motion.div
        className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]"
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[18%] h-[18rem] w-[18rem] rounded-full bg-cyan-200/[0.05] blur-[110px]"
        animate={{ opacity: [0.2, 0.35, 0.2], x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="radial-line opacity-60" />
    </div>
  );
}
