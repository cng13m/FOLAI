const links = [
  { href: "#zgjidhje", label: "Perfitimet" },
  { href: "#vecori", label: "Pse ne" },
  { href: "#fillo", label: "Demo" },
  { href: "mailto:demo@fol.ai", label: "Email" }
];

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-6 sm:px-8 sm:pb-10">
      <div className="flex flex-col gap-6 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-lg font-semibold tracking-[0.28em] text-white">FOL.AI</div>
          <p className="mt-2 text-sm leading-7 text-white/42">
            Pergjigje me te shpejta, me pak rremuje dhe nje pervoje me e mire per klientin.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-white/56">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition duration-300 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
