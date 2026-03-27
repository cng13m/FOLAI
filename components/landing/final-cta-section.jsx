import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell id="fillo" className="pt-8 sm:pt-10">
      <Reveal>
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,#121213_0%,#171719_100%)] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/38">Gati për hapin tjetër</div>
            <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.15rem]">
              Jepini biznesit tuaj një prezencë më të qartë, më elegante dhe më të shpejtë.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/56 sm:text-lg">
              FOL.AI është ndërtuar për biznese që duan të duken serioze në çdo bisedë dhe në çdo rezervim.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="mailto:demo@fol.ai" variant="light" className="gap-2 px-7 py-3.5">
                Kërko demonstrim tani
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#krye" variant="ghost" className="px-7 py-3.5">
                Rikthehu në krye
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
