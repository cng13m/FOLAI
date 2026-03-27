"use client";

import { motion } from "framer-motion";
import { BotMessageSquare, CalendarClock, CircleCheckBig, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const stats = [
  { label: "Rezervime të përpunuara", value: "24/7" },
  { label: "Koha e kursyer për stafin", value: "deri 18h" },
  { label: "Përgjigje ndaj klientit", value: "< 5 sek." }
];

const flows = [
  {
    title: "Pyetje të menjëhershme",
    text: "Përgjigje të sakta për çmime, orare, shërbime dhe disponueshmëri."
  },
  {
    title: "Rezervim pa telefonata",
    text: "Klienti zgjedh kohën, FOL.AI e regjistron dhe dërgon konfirmim."
  },
  {
    title: "Njoftim për ekipin",
    text: "Biznesi merr njoftim të menjëhershëm për çdo kërkesë ose ndryshim."
  }
];

export function HeroSection() {
  return (
    <SectionShell id="krye" className="pt-10 sm:pt-14 lg:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-slate-200/90 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(82,241,192,0.8)]" />
              Asistenti inteligjent për komunikim dhe rezervime
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-balance max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[5.35rem]">
              Klientët marrin përgjigje.
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
                Orari mbushet vetë.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300/88 sm:text-xl">
              FOL.AI u përgjigjet klientëve, menaxhon rezervimet dhe organizon orarin e biznesit tuaj në
              mënyrë automatike, elegante dhe të besueshme.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#demo" className="px-7 py-3.5">
                Kërko demonstrim
              </ButtonLink>
              <ButtonLink href="#si-funksionon" variant="secondary" className="px-7 py-3.5">
                Shiko si funksionon
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-3xl border-white/10 px-5 py-4 shadow-soft transition duration-300 hover:border-cyan-300/20"
                >
                  <div className="font-display text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300/75">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="relative">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-emerald-300/10 blur-3xl" />
          <motion.div
            className="relative glass-panel card-outline overflow-hidden rounded-[2rem] border-white/12 p-4 shadow-glow sm:p-5"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Bisedë aktive</div>
                    <div className="mt-1 font-display text-lg font-semibold text-white">Klinika Dentare Alba</div>
                  </div>
                  <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                    Aktiv
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-6 text-slate-200/90">
                    Përshëndetje, a keni orar të lirë nesër pasdite për kontroll?
                  </div>
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-gradient-to-r from-cyan-300 to-sky-400 px-4 py-3 text-sm leading-6 text-slate-950">
                    Po, kemi një orar të lirë në 16:30. Dëshironi ta rezervoj menjëherë?
                  </div>
                  <div className="max-w-[82%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-6 text-slate-200/90">
                    Po, ju lutem. Emri është Ardit Hoxha.
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-300/16 bg-cyan-300/8 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-200">
                      <BotMessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Rezervimi u konfirmua</div>
                      <div className="text-sm text-slate-300/75">Klienti mori konfirmimin dhe udhëzimet.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Paneli i biznesit</div>
                      <div className="mt-1 font-display text-lg font-semibold text-white">Pamje e përgjithshme</div>
                    </div>
                    <div className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                      Në kohë reale
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <CalendarClock className="h-5 w-5 text-cyan-200" />
                        <span className="text-sm text-slate-300">Rezervime sot</span>
                      </div>
                      <div className="mt-3 font-display text-3xl font-semibold text-white">47</div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <PhoneCall className="h-5 w-5 text-emerald-200" />
                        <span className="text-sm text-slate-300">Pyetje të zgjidhura</span>
                      </div>
                      <div className="mt-3 font-display text-3xl font-semibold text-white">93%</div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {flows.map((flow, index) => (
                      <motion.div
                        key={flow.title}
                        className="rounded-2xl border border-white/8 bg-white/[0.035] p-4"
                        animate={{ y: [0, index % 2 === 0 ? -2 : 2, 0] }}
                        transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-200">
                            <CircleCheckBig className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{flow.title}</div>
                            <div className="mt-1 text-sm leading-6 text-slate-300/75">{flow.text}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
