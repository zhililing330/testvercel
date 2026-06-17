import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { getCaseCatalog, getCaseShellCopy } from "@/content/cases";
import { AppLocale, localizePath } from "@/i18n/config";

type CaseNavItem = {
  href: string;
  label: string;
};

type CaseShellProps = {
  brand: string;
  currentPath: string;
  industry: string;
  locale: AppLocale;
  navItems?: readonly CaseNavItem[];
  children: ReactNode;
};

export function CaseShell({
  brand,
  currentPath,
  industry,
  locale,
  navItems,
  children,
}: CaseShellProps) {
  const caseCatalog = getCaseCatalog(locale);
  const shellCopy = getCaseShellCopy(locale);
  const siblingCases = Object.values(caseCatalog).filter((item) => item.href !== currentPath);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href={localizePath(locale, "/")}
              className="inline-flex h-10 items-center rounded-[8px] border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              {shellCopy.portfolioReturnLabel}
            </Link>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                {industry}
              </p>
              <p className="truncate text-lg font-semibold text-slate-950">{brand}</p>
            </div>
          </div>

          {navItems && navItems.length > 0 ? (
            <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-slate-950">
                  {item.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </header>

      <main className="bg-white text-slate-950">{children}</main>
      <section
        aria-label={shellCopy.moreCasesRegionLabel}
        className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
      >
        <div className="rounded-[8px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            {shellCopy.moreCasesEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">
            {shellCopy.moreCasesTitle}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {siblingCases.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] border border-slate-200 bg-white px-5 py-5 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <p className="text-sm font-semibold text-slate-500">{item.industry}</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{item.brand}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </>
  );
}
