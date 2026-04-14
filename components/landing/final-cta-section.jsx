import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell id="fillo" className="pt-6 sm:pt-8 lg:pt-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#121213_0%,#171719_100%)] px-6 py-12 shadow-[0_28px_90px_rgba(0,0,0,0.24)] sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,213,168,0.08),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(242,75,157,0.1),transparent_28%)]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/38">Le ta provojme</div>
            <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.15rem]">
              Nese kjo eshte menyra si doni te ndihet biznesi juaj, le te flasim.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/56 sm:text-lg">
              Nje demo e shkurter mjafton per te pare nese pershtatet me ritmin e biznesit tuaj.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="mailto:demo@fol.ai?subject=FOL.AI%20MVP" variant="light" className="gap-2 px-7 py-3.5">
                Kerko demo
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#krye" variant="ghost" className="px-7 py-3.5">
                Kthehu lart
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
