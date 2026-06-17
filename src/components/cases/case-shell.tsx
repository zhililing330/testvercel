import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { portfolioReturnLabel } from "@/content/cases";

type CaseNavItem = {
  href: string;
  label: string;
};

type CaseShellProps = {
  brand: string;
  industry: string;
  navItems?: readonly CaseNavItem[];
  children: ReactNode;
};

export function CaseShell({
  brand,
  industry,
  navItems,
  children,
}: CaseShellProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-4">
            <Link
              href="/"
              className="inline-flex h-10 items-center rounded-[8px] border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            >
              {portfolioReturnLabel}
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
      <SiteFooter />
    </>
  );
}
