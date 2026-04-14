"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const brands = ["Instagram", "Facebook", "WhatsApp", "Google Sheets", "Email alerts"];

export function BrandsSection() {
  return (
    <SectionShell id="integrimet" className="pt-8 sm:pt-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#0f0f10] px-6 py-14 sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[17rem] w-[46rem] -translate-x-1/2 rounded-b-[100%] bg-[linear-gradient(180deg,rgba(248,226,236,0.95)_0%,rgba(191,103,255,0.92)_36%,rgba(255,205,100,0.95)_100%)] blur-[2px]" />
          <div className="pointer-events-none absolute left-1/2 top-[3.6rem] h-[12rem] w-[34rem] -translate-x-1/2 rounded-b-[100%] bg-[linear-gradient(180deg,rgba(21,8,33,0.9)_0%,rgba(21,8,33,0.12)_100%)]" />

          <div className="relative pt-40 text-center">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/36">Integrimet e para</div>
            <h2 className="font-display mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-[3.15rem]">
              Nisi me mjetet qe bizneset i perdorin tashme, pastaj zgjeroje ne CRM ose kalendar me vone.
            </h2>

            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4">
              {brands.map((brand, index) => (
                <motion.div
                  key={brand}
                  className={`flex h-20 min-w-[8.5rem] items-center justify-center rounded-[1.35rem] border ${
                    index === 2 ? "border-white/12 bg-white/[0.08]" : "border-white/6 bg-white/[0.03]"
                  } px-6 text-sm font-semibold text-white/72 shadow-[0_16px_40px_rgba(0,0,0,0.18)]`}
                  animate={index === 2 ? { y: [0, -8, 0], scale: [1, 1.03, 1] } : { opacity: [0.48, 0.68, 0.48] }}
                  transition={{ duration: index === 2 ? 5 : 7, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
