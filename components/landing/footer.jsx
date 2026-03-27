import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#si-funksionon", label: "Si funksionon" },
  { href: "#vecori", label: "Veçori" },
  { href: "#demo", label: "Demo" },
  { href: "mailto:demo@fol.ai", label: "Kontakt" }
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 py-10">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="font-display text-xl font-semibold tracking-[0.22em] text-white">FOL.AI</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            Platformë inteligjente për komunikim me klientët, rezervime dhe menaxhim orari për biznese
            moderne shërbimi.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex flex-wrap gap-5 text-sm text-slate-300/80">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition duration-300 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <ButtonLink href="mailto:demo@fol.ai" variant="secondary">
            Rezervo takim
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
