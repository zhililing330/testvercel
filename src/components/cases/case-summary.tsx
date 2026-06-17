type CaseSummaryProps = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets: readonly string[];
};

export function CaseSummary({
  eyebrow,
  title,
  description,
  bullets,
}: CaseSummaryProps) {
  return (
    <section
      aria-label="Case study summary"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="rounded-[8px] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:px-10 sm:py-10">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-teal-200">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-[8px] border border-white/10 bg-white/5 px-5 py-5 text-sm leading-7 text-slate-100"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
