import { Clock3, MessageSquareReply, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const cards = [
  {
    eyebrow: "Pergjigje te shpejta",
    title: "Klienti nuk pret per te marre nje pergjigje.",
    description: "Biseda nis menjehere dhe ruan nje ton te qete e te qarte ne SHQIP.",
    tone:
      "bg-[linear-gradient(135deg,rgba(248,241,247,0.98),rgba(241,228,244,0.92))] text-slate-950",
    icon: MessageSquareReply,
    accent: "dark"
  },
  {
    eyebrow: "Me pak ngarkese",
    title: "Ekipi juaj fiton kohe gjate dites.",
    description: "Me pak telefonata te perseritura, me pak nderprerje dhe me shume fokus.",
    tone:
      "bg-[linear-gradient(135deg,rgba(242,75,157,0.98),rgba(230,56,128,0.96))] text-white",
    icon: Clock3,
    accent: "light"
  },
  {
    eyebrow: "Pamje me serioze",
    title: "Kontakti i pare duket i rregullt dhe i besueshem.",
    description: "Nje pervoje e kujdesur krijon pershtypje me profesionale qe ne minutat e para.",
    tone:
      "bg-[linear-gradient(135deg,#171719_0%,#111112_100%)] text-white",
    icon: Sparkles,
    accent: "light"
  }
];

export function ReasonsSection() {
  return (
    <SectionShell id="zgjidhje" className="pt-10 sm:pt-12">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/42">Pse funksionon</div>
          <h2 className="font-display mt-5 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-[3.2rem]">
            Sepse klienti kupton menjehere cfare po ndodh.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/56 sm:text-lg">
            Nje rrjedhe e qarte ne SHQIP ul pyetjet e panevojshme dhe e mban ekipin me te lire.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 xl:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

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
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.16}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-[1.7rem] border border-white/8 bg-white/[0.02] px-6 py-5">
          <div className="text-sm text-white/60">Klinika</div>
          <div className="h-4 w-px bg-white/10" />
          <div className="text-sm text-white/60">Mjeke</div>
          <div className="h-4 w-px bg-white/10" />
          <div className="text-sm text-white/60">Restorante</div>
          <div className="h-4 w-px bg-white/10" />
          <div className="text-sm text-white/60">Sherbime</div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
