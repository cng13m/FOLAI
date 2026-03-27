import { BriefcaseBusiness, ClockArrowUp, LayoutDashboard, MoonStar, Sparkle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const benefits = [
  {
    icon: ClockArrowUp,
    title: "Kursen kohë",
    text: "Pyetjet e përsëritura dhe rezervimet rutinë kalojnë te FOL.AI, jo te telefoni i stafit."
  },
  {
    icon: BriefcaseBusiness,
    title: "Ul ngarkesën e stafit",
    text: "Ekipi përqendrohet te klienti në ambient, jo te inbox-i që nuk pushon."
  },
  {
    icon: Sparkle,
    title: "Përmirëson eksperiencën e klientit",
    text: "Përgjigje të shpejta, komunikim i qartë dhe rezervim pa fërkime krijojnë përshtypje më të fortë."
  },
  {
    icon: MoonStar,
    title: "Pranon rezervime 24/7",
    text: "Biznesi juaj mbetet i hapur për kërkesa edhe kur ekipi nuk është online."
  },
  {
    icon: LayoutDashboard,
    title: "Rrit organizimin e biznesit",
    text: "Orari, njoftimet dhe komunikimi lëvizin në të njëjtën rrjedhë pa kaos."
  }
];

export function BenefitsSection() {
  return (
    <SectionShell id="perfitime">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 p-8 shadow-glow">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-200/70">
              Ndikim i menjëhershëm
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="font-display text-4xl font-semibold text-white">24/7</div>
                <p className="mt-3 text-sm leading-7 text-slate-300/78">Disponueshmëri për pyetje dhe rezervime pa ndërprerje.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="font-display text-4xl font-semibold text-white">Më pak pritje</div>
                <p className="mt-3 text-sm leading-7 text-slate-300/78">Klienti merr përgjigje të qarta pa humbur durimin ose interesin.</p>
              </div>
            </div>
            <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-cyan-300/[0.05] p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Rezultat real</div>
              <p className="mt-3 text-lg leading-8 text-slate-100">
                Më shumë qartësi për ekipin, më shumë besim për klientin dhe më shumë kontroll për biznesin.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Pse ka rëndësi"
              title="Kur komunikimi rrjedh mirë, biznesi duket më i fortë."
              description="FOL.AI nuk është vetëm automatizim. Është një standard më i lartë operimi për biznese që duan të rriten pa humbur cilësinë."
            />
          </Reveal>

          <div className="mt-10 space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal key={benefit.title} delay={index * 0.07}>
                  <div className="glass-panel group rounded-[1.5rem] p-5 shadow-soft transition duration-300 hover:border-emerald-300/20">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.05] text-emerald-200 transition duration-300 group-hover:bg-emerald-300/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{benefit.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300/78">{benefit.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
