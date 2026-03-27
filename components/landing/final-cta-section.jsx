import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell id="fillo">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-cyan-300/[0.05] to-emerald-300/[0.08] px-6 py-12 shadow-glow sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200/72">
              Gati për hapin tjetër
            </div>
            <h2 className="font-display text-balance mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Jepini biznesit tuaj një prani më inteligjente, më të shpejtë dhe më të besueshme.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg">
              FOL.AI ju ndihmon të mos humbni asnjë klient, asnjë pyetje dhe asnjë rezervim të vlefshëm.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="mailto:demo@fol.ai" className="px-7 py-3.5">
                Kërko demonstrim tani
              </ButtonLink>
              <a
                href="#krye"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-100 transition duration-300 hover:text-cyan-100"
              >
                Rikthehu në krye
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
