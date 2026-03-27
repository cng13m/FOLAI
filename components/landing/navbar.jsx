"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#si-funksionon", label: "Si funksionon" },
  { href: "#zgjidhje", label: "Zgjidhje" },
  { href: "#vecori", label: "Veçori" },
  { href: "#demo", label: "Demo" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-3 pt-5 sm:px-5"
    >
      <div className="container-shell">
        <div className="flex items-center justify-between rounded-full border border-white/8 bg-[#0f1520]/80 px-4 py-3 backdrop-blur-xl sm:px-5">
          <a href="#krye" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04]">
              <span className="font-display text-sm font-bold tracking-[0.22em] text-white">F</span>
            </div>
            <div>
              <div className="font-display text-sm font-bold tracking-[0.32em] text-white">FOL.AI</div>
              <div className="text-[0.72rem] tracking-[0.2em] text-slate-300/60">Automatizim për biznese</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300/84 transition duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ButtonLink href="#demo" className="hidden sm:inline-flex px-6">
            Kërko demonstrim
          </ButtonLink>
        </div>
      </div>
    </motion.header>
  );
}
