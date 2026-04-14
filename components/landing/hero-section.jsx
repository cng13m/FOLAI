"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const metrics = [
  { value: "24/7", label: "Pergjigje ne SHQIP" },
  { value: "Pa vonesa", label: "Me pak mesazhe te humbura" },
  { value: "Me shume prenotime", label: "Me pak pune manuale" },
  { value: "Me qetesi", label: "Per ju dhe stafin tuaj" }
];

export function HeroSection() {
  return (
    <SectionShell id="krye" className="pb-8 pt-4 sm:pb-10 sm:pt-5">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#111112] p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/6 bg-[#131314] px-5 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,214,164,0.16),transparent_18%),radial-gradient(circle_at_68%_30%,rgba(236,67,137,0.18),transparent_20%),radial-gradient(circle_at_78%_18%,rgba(168,61,255,0.18),transparent_16%)]" />
            <motion.div
              className="absolute left-[8%] top-[6%] h-[20rem] w-[20rem] rounded-[38%] bg-[linear-gradient(135deg,#f5d5a8_0%,#dd5a47_28%,#d13a89_62%,#7c30ff_100%)] opacity-90 shadow-[0_32px_120px_rgba(0,0,0,0.4)]"
              animate={{ rotate: [0, 10, 0], x: [0, 12, 0], y: [0, 8, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[-3%] top-[-2%] h-[24rem] w-[24rem] rounded-[42%] bg-[linear-gradient(135deg,#ffb66a_0%,#e13d8f_44%,#8f31fb_100%)] opacity-90"
              animate={{ rotate: [0, -12, 0], y: [0, 12, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,10,0.08)_0%,rgba(9,9,10,0.28)_100%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/52">
                Per klinika, mjeke dhe restorante
              </div>
              <h1 className="font-display mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[5rem]">
                Klientet marrin pergjigje menjehere. Ju merrni me shume rezervime.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                FOL.AI ju ndihmon te mos humbni kliente nga mesazhet e pambyllura. Pergjigjet ne SHQIP,
                mban biseden te qarte dhe e ben rezervimin me te lehte per klientin.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="#fillo" variant="light" className="gap-2 px-7 py-3.5">
                  Kerko demo
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#zgjidhje" variant="ghost" className="px-7 py-3.5">
                  Shiko perfitimet
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={0.06 * index}>
                <div className="rounded-[1.55rem] border border-white/8 bg-white/[0.03] px-5 py-5">
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
