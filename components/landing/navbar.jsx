"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#si-funksionon", label: "Si funksionon" },
  { href: "#vecori", label: "Platforma" },
  { href: "#zgjidhje", label: "Per ke eshte" },
  { href: "#integrimet", label: "Integrimet" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 px-5 pt-5 sm:px-8 sm:pt-8"
    >
      <div className="flex items-center justify-between rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-xl sm:px-6">
        <a href="#krye" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04]">
            <span className="font-display text-sm font-bold tracking-[0.26em] text-white">F</span>
          </div>
          <div>
            <div className="font-display text-sm font-semibold tracking-[0.34em] text-white">FOL.AI</div>
            <div className="text-[0.7rem] tracking-[0.2em] text-white/40">AI booking agent per biznese</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/58 transition duration-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#fillo" variant="light" className="hidden sm:inline-flex px-6">
          Kerko demo
        </ButtonLink>
      </div>
    </motion.header>
  );
}
