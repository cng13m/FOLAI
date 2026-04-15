const links = [
  { href: "#zgjidhje", label: "Perfitimet" },
  { href: "#vecori", label: "Vecorite" },
  { href: "#fillo", label: "Demo" },
  { href: "mailto:demo@fol.ai", label: "Email" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 pb-8 pt-6 sm:px-8 sm:pb-10" aria-label="Fundfaqja">
      <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="font-display text-lg font-semibold tracking-[0.28em] text-white">FOL.AI</div>
          <p className="mt-2 max-w-md text-sm leading-7 text-white/40">
            Pergjigje me te shpejta, me pak rremuje dhe nje pervoje me e qete per klientet tuaj.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/30">(C) {year} FOL.AI</p>
        </div>

        <nav aria-label="Lidhje te shpejta" className="flex flex-wrap gap-5 text-sm text-white/60">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0c]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
