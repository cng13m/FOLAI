"use client";

import { motion } from "framer-motion";
import { CalendarClock, CircleCheckBig } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const stats = [
  { label: "Rezervime të përpunuara", value: "24/7" },
  { label: "Koha e kursyer për stafin", value: "deri 18h" },
  { label: "Përgjigje ndaj klientit", value: "< 5 sek." }
];

export function HeroSection() {
  return (
    <SectionShell id="krye" className="pt-10 sm:pt-14 lg:pt-16">
      <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative z-10">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-slate-200/80">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              Asistenti inteligjent për komunikim dhe rezervime
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-balance max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[5.15rem]">
              Klientët marrin përgjigje.
              <span className="mt-1 block text-[#d8e8e4]">Orari mbetet nën kontroll.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300/78 sm:text-[1.18rem]">
              FOL.AI u përgjigjet klientëve, menaxhon rezervimet dhe organizon orarin e biznesit tuaj me
              qartësi, shpejtësi dhe një prani që ndihet profesionale në çdo kontakt.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#demo" className="px-7 py-3.5">
                Kërko demonstrim
              </ButtonLink>
              <ButtonLink href="#si-funksionon" variant="secondary" className="px-7 py-3.5">
                Shiko si funksionon
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] border border-white/8 bg-white/[0.025] px-5 py-5">
                  <div className="font-display text-[1.95rem] font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300/68">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="relative">
          <div className="absolute inset-x-10 inset-y-12 rounded-[2rem] bg-white/[0.04] blur-3xl" />
          <motion.div
            className="relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-[#0f1520]/92 p-5 shadow-soft sm:p-6"
            initial={{ opacity: 0, y: 18, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Pamje e produktit</div>
                <div className="mt-2 font-display text-xl font-semibold text-white">Rezervime të qarta, pa zhurmë</div>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300/70">Në kohë reale</div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Bisedë aktive</div>
                <div className="mt-2 font-display text-lg font-semibold text-white">Klinika Dentare Alba</div>

                <div className="mt-6 space-y-3">
                  <div className="max-w-[82%] rounded-[1.3rem] rounded-tl-md border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-200/84">
                    Përshëndetje, a keni orar të lirë nesër pasdite për kontroll?
                  </div>
                  <div className="ml-auto max-w-[84%] rounded-[1.3rem] rounded-tr-md bg-[#f3f1ea] px-4 py-3 text-sm leading-7 text-slate-950">
                    Po, kemi një orar të lirë në 16:30. Dëshironi ta rezervoj menjëherë?
                  </div>
                  <div className="max-w-[72%] rounded-[1.3rem] rounded-tl-md border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-200/84">
                    Po, ju lutem.
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-100">
                      <CalendarClock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-300/70">Rezervime sot</div>
                      <div className="mt-1 font-display text-3xl font-semibold text-white">47</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-100">
                      <CircleCheckBig className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Rezervimi u konfirmua</div>
                      <div className="mt-2 text-sm leading-7 text-slate-300/72">
                        Klienti mori konfirmimin dhe biznesi u njoftua menjëherë.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/8 bg-[#111926] p-5">
                  <div className="text-sm text-slate-300/70">Pyetje të zgjidhura</div>
                  <div className="mt-2 font-display text-3xl font-semibold text-white">93%</div>
                  <div className="mt-3 text-sm leading-7 text-slate-300/68">
                    Përgjigje të menjëhershme për orare, disponueshmëri dhe rezervime.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
