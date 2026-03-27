export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "border border-white/14 bg-white/[0.03] text-white hover:border-cyan-300/40 hover:bg-white/[0.06]"
      : "border border-cyan-300/30 bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 text-slate-950 shadow-[0_18px_50px_rgba(103,232,249,0.22)] hover:scale-[1.01] hover:shadow-[0_24px_70px_rgba(103,232,249,0.32)]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
