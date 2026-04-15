"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const metrics = [
  { value: "24/7", label: "Gati sa here ju duhet" },
  { value: "Ne shqip", label: "Bisede e qarte dhe natyrale" },
  { value: "Me pak vonese", label: "Me pak kerkesa te humbura" },
  { value: "Me shume rezervime", label: "Me shume kohe per ekipin" }
];

const trustPoints = [
  "Flet ne shqip dhe mban ton te rregullt",
  "I pergjigjet klientit pa e lodhur stafin",
  "E ndihmon biznesin te mos humbase kerkesa"
];

export function HeroSection() {
  return (
    <SectionShell id="krye" className="pb-8 pt-4 sm:pb-10 sm:pt-5">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] bg-[#111112] sm:p-0">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#111112] px-5 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,214,164,0.16),transparent_18%),radial-gradient(circle_at_68%_30%,rgba(236,67,137,0.18),transparent_20%),radial-gradient(circle_at_78%_18%,rgba(168,61,255,0.18),transparent_16%)]" />
            <motion.div
              className="absolute left-[8%] top-[6%] h-[20rem] w-[20rem] rounded-[38%] bg-[linear-gradient(135deg,#f5d5a8_0%,#dd5a47_28%,#d13a89_62%,#7c30ff_100%)] opacity-90 shadow-[0_32px_120px_rgba(0,0,0,0.4)] blur-[2px]"
              animate={{ rotate: [0, 10, 0], x: [0, 12, 0], y: [0, 8, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[-3%] top-[-2%] h-[24rem] w-[24rem] rounded-[42%] bg-[linear-gradient(135deg,#ffb66a_0%,#e13d8f_44%,#8f31fb_100%)] opacity-90 blur-[2px]"
              animate={{ rotate: [0, -12, 0], y: [0, 12, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,10,0.08)_0%,rgba(9,9,10,0.28)_100%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/64">
                Per klinika, mjeke dhe restorante
              </div>
              <h1 className="font-display mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-white sm:text-6xl lg:text-[5.1rem]">
                Klientet marrin pergjigje menjehere. Ju merrni me shume rezervime.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-white/68 sm:text-lg">
                FOL.AI pergjigjet ne shqip, mban biseden te qarte dhe e ndihmon ekipin tuaj te mos humbase
                kerkesa gjate dites se ngarkuar.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/70">
                {trustPoints.map((point) => (
                  <div key={point} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f0b27c]" strokeWidth={2.5} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="#fillo" variant="light" className="gap-2 px-7 py-3.5">
                  Kerko demo
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#zgjidhje" variant="ghost" className="px-7 py-3.5">
                  Shiko si funksionon
                </ButtonLink>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/46">
                Pa angazhim. Shikoni si pershtatet me menyren si punon biznesi juaj.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={0.06 * index}>
                <div className="relative overflow-hidden rounded-[1.55rem] bg-[#151516] px-5 py-5">
                  <div className="font-display text-[1.7rem] font-semibold text-white">{metric.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/54">{metric.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
