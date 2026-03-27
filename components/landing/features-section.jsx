import { BellElectric, CalendarRange, Clock3, Layers3, MessagesSquare, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const features = [
  {
    icon: MessagesSquare,
    title: "Përgjigje automatike me AI",
    text: "Jep informacion të qartë për pyetje të zakonshme, disponueshmëri dhe shërbime pa e lodhur stafin."
  },
  {
    icon: CalendarRange,
    title: "Menaxhim i rezervimeve",
    text: "Regjistron, përditëson dhe organizon rezervimet në një rrjedhë të vetme dhe të kontrolluar."
  },
  {
    icon: Clock3,
    title: "Orar inteligjent",
    text: "Sugjeron oraret më të përshtatshme dhe mban kalendarin të balancuar gjatë ditës."
  },
  {
    icon: Layers3,
    title: "Integrim me WhatsApp, Instagram dhe Messenger",
    text: "Komunikimi i klientëve centralizohet në një eksperiencë të vetme dhe konsistente."
  },
  {
    icon: BellElectric,
    title: "Njoftime të menjëhershme",
    text: "Ekipi juaj informohet menjëherë për rezervime të reja, anulime ose kërkesa prioritare."
  },
  {
    icon: Workflow,
    title: "Mbështetje për biznese të ndryshme",
    text: "FOL.AI përshtatet me procese të ndryshme pune pa humbur qartësinë dhe kontrollin."
  }
];

export function FeaturesSection() {
  return (
    <SectionShell id="vecori" className="section-fade">
      <Reveal>
        <SectionHeading
          eyebrow="Veçori kryesore"
          title="Teknologji elegante që duket premium dhe punon seriozisht."
          description="Çdo funksion është menduar për ta bërë biznesin më të shpejtë, më të organizuar dhe më të besueshëm në sytë e klientëve."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="glass-panel group h-full rounded-[1.75rem] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan-300/22">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/18 via-sky-400/10 to-emerald-300/10 text-cyan-100 transition duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300/78">{feature.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
