export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/80 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
        {eyebrow}
      </div>
      <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.15rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300/88 sm:text-lg">{description}</p>
    </div>
  );
}
