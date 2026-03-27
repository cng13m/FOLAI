"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ebebea_0%,#e1dfdc_100%)]" />
      <motion.div
        className="absolute left-1/2 top-[-12rem] h-[26rem] w-[56rem] -translate-x-1/2 rounded-full bg-white/70 blur-[110px]"
        animate={{ opacity: [0.65, 0.85, 0.65], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-[10%] h-[18rem] w-[18rem] rounded-full bg-white/40 blur-[80px]"
        animate={{ opacity: [0.18, 0.35, 0.18], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
