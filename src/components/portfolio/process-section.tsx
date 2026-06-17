import { getPortfolioContent } from "@/content/portfolio";
import { AppLocale } from "@/i18n/config";

export function ProcessSection({ locale }: { locale: AppLocale }) {
  const content = getPortfolioContent(locale);

  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
          {content.sections.process.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          {content.sections.process.title}
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {content.sections.process.body}
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        {content.process.map((step) => (
          <article
            key={step.title}
            className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(18,24,38,0.08)]"
          >
            <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
