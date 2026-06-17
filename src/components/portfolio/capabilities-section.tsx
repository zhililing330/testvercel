import { getPortfolioContent } from "@/content/portfolio";
import { AppLocale } from "@/i18n/config";

export function CapabilitiesSection({ locale }: { locale: AppLocale }) {
  const content = getPortfolioContent(locale);

  return (
    <section
      id="capabilities"
      className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="grid gap-8 rounded-[8px] bg-[#f3f0ea] px-6 py-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            {content.sections.capabilities.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            {content.sections.capabilities.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {content.sections.capabilities.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {content.capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-[8px] bg-white p-5 shadow-[0_10px_28px_rgba(18,24,38,0.06)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
