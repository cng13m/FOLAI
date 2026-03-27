import { Building2, ForkKnifeCrossed, HeartPulse, Scissors, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const industries = [
  {
    icon: Stethoscope,
    title: "Dentistë",
    text: "Menaxhoni konsultat, kontrollet dhe pyetjet e pacientëve me një ritëm të qetë dhe profesional."
  },
  {
    icon: ForkKnifeCrossed,
    title: "Restorante",
    text: "Pranoni rezervime tavolinash, konfirmoni oraret dhe shmangni humbjen e klientëve gjatë pikut."
  },
  {
    icon: HeartPulse,
    title: "Klinika",
    text: "Organizoni takimet, rikujtimet dhe komunikimin me pacientët pa vonesa dhe pa konfuzion."
  },
  {
    icon: Scissors,
    title: "Sallone",
    text: "Mbani kalendarin e mbushur, reduktoni anulimet dhe krijoni një eksperiencë më të rafinuar."
  },
  {
    icon: Building2,
    title: "Biznese shërbimi",
    text: "Çdo biznes me orare dhe klientë të përsëritur fiton më shumë rregull, përgjigje më të shpejta dhe më shumë rezervime."
  }
];

export function IndustriesSection() {
  return (
    <SectionShell id="zgjidhje">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Për kë është"
            title="Ndërtuar për biznese që jetojnë nga ritmi, saktësia dhe besimi."
            description="Nga klinikat dentare te restorantet dhe sallonet, FOL.AI përshtatet me mënyrën si punoni dhe ruan standardin që klientët tuaj presin."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Reveal key={industry.title} delay={index * 0.06}>
                <div className="glass-panel group h-full rounded-[1.6rem] p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-300/18">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-100 transition duration-300 group-hover:bg-cyan-300/12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{industry.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300/78">{industry.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
