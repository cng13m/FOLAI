"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "9%", top: "14%", size: 10, delay: 0 },
  { left: "18%", top: "42%", size: 6, delay: 1.4 },
  { left: "32%", top: "20%", size: 7, delay: 0.8 },
  { left: "54%", top: "10%", size: 12, delay: 2.1 },
  { left: "66%", top: "34%", size: 8, delay: 1.1 },
  { left: "82%", top: "18%", size: 6, delay: 1.8 },
  { left: "76%", top: "58%", size: 10, delay: 0.5 },
  { left: "58%", top: "72%", size: 7, delay: 1.9 },
  { left: "28%", top: "70%", size: 9, delay: 0.3 },
  { left: "14%", top: "78%", size: 8, delay: 2.4 }
];

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="grain" />
      <motion.div
        className="absolute left-[-10%] top-[6%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/18 blur-[110px]"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-violet-400/18 blur-[120px]"
        animate={{ x: [0, -70, 20, 0], y: [0, 10, 50, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-emerald-300/12 blur-[120px]"
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="radial-line opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0,transparent_36%)] opacity-70" />
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/60 shadow-[0_0_24px_rgba(125,211,252,0.4)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{ y: [0, -14, 0], opacity: [0.18, 0.8, 0.18], scale: [0.8, 1.15, 0.8] }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
      <motion.div
        className="absolute inset-x-[8%] top-[12rem] h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
        animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.92, 1.04, 0.92] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
