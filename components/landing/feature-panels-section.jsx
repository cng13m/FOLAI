"use client";

import { motion } from "framer-motion";
import { BarChart3, BellRing, ChevronRight, DatabaseZap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const points = [
  { icon: DatabaseZap, label: "Google Sheets / Docs si backend i pare" },
  { icon: BellRing, label: "Email dhe WhatsApp alerts per stafin" }
];

export function FeaturePanelsSection() {
  return (
    <SectionShell id="vecori" className="pt-8 sm:pt-10">
      <Reveal>
        <div className="overflow-hidden rounded-[2.1rem] border border-white/8 bg-[#151516]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/36">
                Platforma baze
              </div>
              <h2 className="font-display mt-5 max-w-xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Nje MVP i forte qe nis me kanalet sociale dhe nje sistem te thjeshte rezervimesh.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/56">
                Mund ta nisni pa software te rende: AI agent mbledh kerkesen, kontrollon rregullat e biznesit,
                shkruan ne Google Sheets ose Docs dhe njofton pronarin ose recepsionin.
              </p>

              <div className="mt-12 flex flex-wrap gap-10">
                {points.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div key={point.label} className="flex items-center gap-3 text-sm text-white/68">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05] text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span>{point.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden bg-[#111112]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,186,125,0.2),transparent_24%),radial-gradient(circle_at_70%_28%,rgba(189,87,255,0.22),transparent_26%),radial-gradient(circle_at_66%_72%,rgba(255,218,107,0.18),transparent_22%)]" />
              <motion.div
                className="absolute left-[18%] top-[16%] h-[14rem] w-[14rem] rounded-[40%] bg-[linear-gradient(135deg,#f2c993_0%,#bc45cc_54%,#ffcb59_100%)] opacity-90 blur-[1px]"
                animate={{ rotate: [0, 8, 0], x: [0, 18, 0], y: [0, -10, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute left-[42%] top-[30%] h-[16rem] w-[16rem] rounded-[48%] bg-[linear-gradient(135deg,#1f1133_4%,#8d32ba_34%,#f4b14f_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
                animate={{ rotate: [0, -10, 0], y: [0, 12, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#151516] to-transparent" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[#121213] p-8 sm:p-10">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/36">Kanale dhe role</div>
            <h3 className="font-display mt-5 max-w-lg text-3xl font-semibold leading-tight text-white">
              I njejti motor mund te sherbeje klinika mjekesore dhe restorante me rregulla te ndryshme.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/56">
              Per mjeket, flow-i fokusohet te konsultat, rikthimet dhe oret e mjekut. Per restorantet, fokusohet te
              tavolinat, numri i personave dhe oraret e pikut.
            </p>
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/62">
              Instagram, Facebook Messenger, WhatsApp
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,#131314_0%,#0d0d0e_100%)] p-0">
            <div className="relative h-full min-h-[320px]">
              <div className="absolute left-[-8%] top-[24%] h-[17rem] w-[36rem] rounded-[100%] bg-[linear-gradient(90deg,rgba(49,15,86,0),rgba(177,91,255,0.92)_28%,rgba(242,109,165,0.92)_58%,rgba(255,203,89,0.95)_92%)] blur-[3px]" />
              <div className="absolute left-[16%] top-[42%] h-[12rem] w-[28rem] rounded-[100%] bg-[linear-gradient(90deg,rgba(49,15,86,0),rgba(138,65,255,0.38)_36%,rgba(255,176,84,0.52)_100%)] blur-[18px]" />
              <div className="relative z-10 flex h-full min-h-[320px] items-end p-8">
                <div className="w-full rounded-[1.7rem] border border-white/10 bg-black/25 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/42">
                    <span>Example booking log</span>
                    <BarChart3 className="h-4 w-4 text-white/50" />
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      "Dentist | Arber K. | E premte 10:30 | Kontroll",
                      "Restaurant | 4 persona | Sot 20:00 | Emri: Bora",
                      "Clinic | Rikthim | E hene 09:15 | Dr. Leka"
                    ].map((row) => (
                      <div key={row} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
                        {row}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
