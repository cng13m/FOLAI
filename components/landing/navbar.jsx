"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#zgjidhje", label: "Perfitimet" },
  { href: "#vecori", label: "Vecorite" },
  { href: "#fillo", label: "Kontakt" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 px-4 pt-4 sm:px-5 sm:pt-5"
    >
      <div className="flex items-center justify-between rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-6">
        <a
          href="#krye"
          aria-label="Kthehu te kreu i faqes"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0c]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] transition duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07]">
            <span className="font-display text-sm font-bold tracking-[0.26em] text-white">F</span>
          </div>
          <div>
            <div className="font-display text-sm font-semibold tracking-[0.34em] text-white">FOL.AI</div>
            <div className="text-[0.7rem] tracking-[0.2em] text-white/40">
              Rezervime dhe pergjigje te menjehershme
            </div>
          </div>
        </a>

        <nav aria-label="Navigimi kryesor" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full text-sm text-white/60 transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0c]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink
          href="#fillo"
          variant="light"
          className="hidden px-6 sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0c]"
        >
          Rezervo demo
        </ButtonLink>
      </div>
    </motion.header>
  );
}
