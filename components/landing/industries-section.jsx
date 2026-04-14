import { Building2, ForkKnifeCrossed, HeartPulse, Scissors, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const industries = [
  {
    icon: Stethoscope,
    title: "Dentiste",
    text: "Menaxhoni kontrollat, konsultat dhe rikthimet pa lene pacientet ne pritje."
  },
  {
    icon: ForkKnifeCrossed,
    title: "Restorante",
    text: "Pranoni rezervime tavolinash, numrin e personave dhe kerkesa speciale gjate orareve te pikut."
  },
  {
    icon: HeartPulse,
    title: "Klinika",
    text: "Organizoni takimet, rikujtimet dhe pyetjet e pacienteve ne nje sistem me te rregullt."
  },
  {
    icon: Scissors,
    title: "Sallone dhe studio",
    text: "Ruani kalendarin e mbushur dhe reduktoni no-show me njoftime automatike."
  },
  {
    icon: Building2,
    title: "Biznese sherbimi",
    text: "Cdo ekip qe merret me orare, klienta te perseritur dhe pyetje te shpeshta mund ta perdore si reception digital."
  }
];

export function IndustriesSection() {
  return (
    <SectionShell id="zgjidhje-audienca">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Per ke eshte"
            title="Ndertuar per biznese qe humbin para sa here nje mesazh mbetet pa pergjigje."
            description="Nga klinikat dentare te restorantet dhe sallonet, FOL.AI pershtatet me menyren si punoni dhe ruan nje komunikim te qarte me klientin."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Reveal key={industry.title} delay={index * 0.06}>
                <div className="glass-panel group h-full rounded-[1.6rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/18">
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
