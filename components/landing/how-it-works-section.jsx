import { MessageCircleMore, Sparkles, CalendarCheck2, BellRing } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const steps = [
  {
    icon: MessageCircleMore,
    title: "Klienti dërgon mesazh",
    description: "Pyetjet dhe kërkesat vijnë nga WhatsApp, Instagram, Messenger ose kanale të tjera."
  },
  {
    icon: Sparkles,
    title: "FOL.AI përgjigjet automatikisht",
    description: "Asistenti kupton kërkesën, jep përgjigjen e duhur dhe udhëheq klientin pa pritje."
  },
  {
    icon: CalendarCheck2,
    title: "Rezervimi regjistrohet",
    description: "Orari i lirë zgjidhet menjëherë dhe rezervimi futet në sistem me saktësi."
  },
  {
    icon: BellRing,
    title: "Biznesi njoftohet menjëherë",
    description: "Stafi merr njoftim të qartë për rezervimin, ndryshimin ose pyetjen që kërkon vëmendje."
  }
];

export function HowItWorksSection() {
  return (
    <SectionShell id="si-funksionon" className="section-fade">
      <Reveal>
        <SectionHeading
          eyebrow="Si funksionon"
          title="Një rrjedhë e qartë që e bën komunikimin të duket i lehtë."
          description="FOL.AI merr përsipër bisedën me klientin nga kontakti i parë deri te rezervimi i konfirmuar, pa krijuar ngarkesë shtesë për ekipin tuaj."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="glass-panel group h-full rounded-[1.75rem] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 via-white/10 to-emerald-300/12 text-cyan-100 transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(103,232,249,0.18)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="font-display text-[2rem] font-semibold text-white/20">0{index + 1}</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300/78">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
