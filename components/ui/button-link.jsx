export function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const styles =
    variant === "secondary" || variant === "ghost"
      ? "border border-white/12 bg-transparent text-white hover:border-white/22 hover:bg-white/[0.04]"
      : variant === "dark"
        ? "border border-black/10 bg-[#111112] text-white hover:bg-black"
        : "border border-white/12 bg-[#f3f1ea] text-slate-950 hover:bg-white hover:shadow-[0_16px_42px_rgba(255,255,255,0.08)]";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
