"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#08090d_0%,#050816_56%,#04050a_100%)]" />
      <motion.div
        className="absolute left-1/2 top-[-14rem] h-[28rem] w-[58rem] -translate-x-1/2 rounded-full bg-[#f0b27c]/12 blur-[120px]"
        animate={{ opacity: [0.22, 0.34, 0.22], scale: [1, 1.03, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[8%] h-[20rem] w-[20rem] rounded-full bg-[#d13a89]/10 blur-[95px]"
        animate={{ opacity: [0.14, 0.24, 0.14], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
