import { getPortfolioContent } from "@/content/portfolio";
import { AppLocale } from "@/i18n/config";

export function ContactSection({ locale }: { locale: AppLocale }) {
  const content = getPortfolioContent(locale);

  return (
    <section
      aria-label={content.sections.contact.ariaLabel}
      id="contact"
      className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="grid gap-8 rounded-[8px] bg-slate-950 px-6 py-8 text-white sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/60">
            {content.sections.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {content.sections.contact.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
            {content.sections.contact.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {content.contact.items.map((item) => (
            <div
              key={item.label}
              className="rounded-[8px] border border-white/12 bg-white/6 p-5"
            >
              <p className="text-sm text-white/60">{item.label}</p>
              <p className="mt-2 text-lg font-semibold">{item.value}</p>
            </div>
          ))}
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-slate-100 sm:col-span-2"
            href="mailto:hello@lineastudio.cn"
          >
            {content.contact.primaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
