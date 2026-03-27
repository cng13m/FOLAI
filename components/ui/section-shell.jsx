export function SectionShell({ id, className = "", children }) {
  return (
    <section id={id} className={`relative z-10 py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-shell">{children}</div>
    </section>
  );
}
