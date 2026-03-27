"use client";

import { motion } from "framer-motion";
import { CalendarDays, CircleCheckBig, MessageSquareMore, ScanSearch, SendHorizontal } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const timeline = [
  "Klienti pyet për një orar të lirë në mbrëmje.",
  "FOL.AI verifikon disponueshmërinë dhe sugjeron alternativat më të mira.",
  "Rezervimi konfirmohet dhe ekipi merr njoftim në kohë reale."
];

export function ProductPreviewSection() {
  return (
    <SectionShell id="demo" className="section-fade">
      <Reveal>
        <SectionHeading
          eyebrow="Pamje e produktit"
          title="Një eksperiencë që duket e rafinuar për klientin dhe e qartë për ekipin."
          description="Nga biseda automatike te konfirmimi i rezervimit, çdo hap është menduar për të lënë përshtypje profesionale dhe për të mbajtur orarin nën kontroll."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#0f1520]/90 p-5 shadow-soft">
            <div className="relative rounded-[1.5rem] border border-white/8 bg-white/[0.025] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Bisedë e automatizuar</div>
                  <div className="mt-1 font-display text-xl font-semibold text-white">Rezervim për sallon estetik</div>
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300/72">
                  Përgjigje në kohë reale
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-200">
                    <MessageSquareMore className="h-5 w-5" />
                  </div>
                  <div className="max-w-[85%] rounded-[1.35rem] rounded-tl-md border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-200/90">
                    Përshëndetje, dua një termin për pastrim fytyre të shtunën pas orës 17:00.
                  </div>
                </div>

                <div className="flex items-start justify-end gap-3">
                  <div className="max-w-[86%] rounded-[1.35rem] rounded-tr-md bg-[#f3f1ea] px-4 py-3 text-sm leading-7 text-slate-950">
                    Mund t’ju rezervoj në 17:30 ose 18:15. Cili orar ju përshtatet më shumë?
                  </div>
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-100">
                    <SendHorizontal className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-200">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div className="max-w-[84%] rounded-[1.35rem] rounded-tl-md border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-200/90">
                    17:30 është perfekte. Emri im është Elira.
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                    transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="mb-2 font-display text-lg font-semibold text-white">0{index + 1}</div>
                    <div className="text-sm leading-7 text-slate-300/80">{item}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.08}>
            <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-100">
                  <CircleCheckBig className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-white">Rezervim i konfirmuar</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/78">
                    Klienti merr përgjigje të qarta, konfirmim të menjëhershëm dhe një eksperiencë që
                    reflekton standard të lartë.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="glass-panel rounded-[2rem] p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-100">
                  <ScanSearch className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-white">Pamje e pastër operative</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300/78">
                    Informacioni i klientit, ora e rezervimit dhe statusi i kërkesës qëndrojnë në një pamje
                    të vetme, të lexueshme dhe të qartë.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Përvoja e biznesit</div>
              <div className="mt-4 font-display text-3xl font-semibold text-white">Klientë të informuar. Ekip më i lirë.</div>
              <p className="mt-4 text-sm leading-7 text-slate-300/78">
                Kjo është arsyeja pse FOL.AI ndihet si një produkt i ndërtuar për biznese serioze, jo si një
                mjet i zakonshëm përgjigjesh automatike.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
