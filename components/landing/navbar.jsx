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
      className="sticky top-0 z-50 px-3 pt-4 sm:px-5"
    >
      <div className="container-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 shadow-soft sm:px-5">
          <a href="#krye" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-gradient-to-br from-cyan-300/30 via-sky-400/20 to-emerald-300/20 shadow-[0_0_30px_rgba(125,211,252,0.15)]">
              <span className="font-display text-sm font-bold tracking-[0.22em] text-cyan-50">F</span>
            </div>
            <div>
              <div className="font-display text-sm font-bold tracking-[0.32em] text-white">FOL.AI</div>
              <div className="text-[0.72rem] tracking-[0.2em] text-slate-300/70">Automatizim për biznese</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ButtonLink href="#demo" className="hidden sm:inline-flex">
            Kërko demonstrim
          </ButtonLink>
        </div>
      </div>
    </motion.header>
  );
}
