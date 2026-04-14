import { ArrowRight, BriefcaseBusiness, CalendarRange, MessageSquareReply } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const cards = [
  {
    eyebrow: "Asistent AI per bisedat e para",
    title: "Klienti nuk pret per pergjigje dhe biznesi nuk humbet lead-et e nxehta.",
    description:
      "FOL.AI kupton pyetjet me te zakonshme, flet natyrshem ne SHQIP dhe i con klientet drejt rezervimit te sakte.",
    button: "Shiko flow-in",
    tone:
      "bg-[linear-gradient(135deg,rgba(248,241,247,0.98),rgba(241,228,244,0.92))] text-slate-950",
    icon: MessageSquareReply,
    accent: "dark",
    href: "#si-funksionon"
  },
  {
    eyebrow: "Rezervime qe futen direkt ne sistemin e punes",
    title: "Orari, tavolina ose takimi kalojne ne nje rrjedhe te vetme operative.",
    description:
      "Perfekt per mjeke, klinika, dentiste dhe restorante qe duan me pak pune manuale dhe me shume kontroll.",
    button: "Shiko platformen",
    tone:
      "bg-[linear-gradient(135deg,rgba(242,75,157,0.98),rgba(230,56,128,0.96))] text-white",
    icon: CalendarRange,
    accent: "light",
    href: "#vecori"
  }
];

export function ReasonsSection() {
  return (
    <SectionShell id="zgjidhje" className="pt-10 sm:pt-12">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/42">Pse FOL.AI</div>
          <h2 className="font-display mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-[3.2rem]">
            Me pak telefonata, me pak humbje orari, me shume rezervime te kapura.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/56 sm:text-lg">
            Produkti eshte projektuar per bizneset qe varen nga shpejtesia e pergjigjes dhe saktesia e kalendarit.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 xl:grid-cols-2">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const buttonVariant = card.accent === "dark" ? "dark" : "light";

          return (
            <Reveal key={card.title} delay={index * 0.08}>
              <div className={`rounded-[1.9rem] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] ${card.tone}`}>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      card.accent === "dark" ? "bg-black/8 text-slate-900" : "bg-white/12 text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`text-xs uppercase tracking-[0.22em] ${
                      card.accent === "dark" ? "text-slate-700/70" : "text-white/64"
                    }`}
                  >
                    {card.eyebrow}
                  </div>
                </div>

                <h3 className="font-display mt-8 max-w-md text-3xl font-semibold leading-tight">{card.title}</h3>
                <p
                  className={`mt-5 max-w-lg text-base leading-8 ${
                    card.accent === "dark" ? "text-slate-700/86" : "text-white/74"
                  }`}
                >
                  {card.description}
                </p>

                <div className="mt-10">
                  <ButtonLink href={card.href} variant={buttonVariant} className="gap-2 px-6 py-3.5">
                    {card.button}
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.16}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-[1.7rem] border border-white/8 bg-white/[0.02] px-6 py-5">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <BriefcaseBusiness className="h-4 w-4" />
            Mjeke, klinika, restorante
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="text-sm text-white/60">Rezervime te automatizuara</div>
          <div className="h-4 w-px bg-white/10" />
          <div className="text-sm text-white/60">Pergjigje ne SHQIP</div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
