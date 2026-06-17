import Image from "next/image";
import { CaseShell } from "./case-shell";
import { CaseSummary } from "./case-summary";
import {
  caseCatalog,
  realEstateCaseSections,
  realEstateCaseSummary,
} from "@/content/cases";

const featuredListings = [
  {
    name: "Riverside family residence",
    meta: "178 sqm | 4 bed | private terrace",
    body: "A light-filled city home positioned for clients who care about both commute efficiency and interior calm.",
  },
  {
    name: "Park-facing executive apartment",
    meta: "132 sqm | 3 bed | full-service building",
    body: "A premium apartment listing presented with enough detail to qualify serious viewing interest fast.",
  },
  {
    name: "Low-density garden property",
    meta: "220 sqm | 5 bed | gated community",
    body: "A quieter option for buyers moving up from central apartments into a longer-horizon family home.",
  },
] as const;

const brokerageServices = [
  "Neighborhood shortlists and availability filtering",
  "Viewing coordination and buyer-side communication",
  "Offer strategy, pacing, and closing preparation",
] as const;

export function RealEstateCasePage() {
  return (
    <CaseShell
      brand={caseCatalog.realEstate.brand}
      currentPath={caseCatalog.realEstate.href}
      industry={caseCatalog.realEstate.industry}
      navItems={realEstateCaseSections}
    >
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16"
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            Real-estate case study
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Urban homes presented with more clarity and a smoother path to viewing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            This template is aimed at brokerages that need a polished brand layer without
            losing the practical signals buyers use to decide whether to inquire.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
              href="#listings"
            >
              Browse listings
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-slate-300 px-6 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              href="#contact"
            >
              Schedule a viewing
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-slate-200 shadow-[0_24px_72px_rgba(15,23,42,0.14)] sm:min-h-[460px]">
          <Image
            src="/images/portfolio/case-real-estate.jpg"
            alt="Premium residential property showcase"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="listings"
        aria-label="Featured listings"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="section-title">Featured homes with enough context to compare.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            The page uses a compact listing rhythm so buyers can evaluate fit without
            scrolling through an endless wall of near-identical inventory.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredListings.map((listing) => (
            <article
              key={listing.name}
              className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
                {listing.meta}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{listing.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{listing.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-14"
      >
        <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            Brokerage support
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">
            A service layer that helps prospects picture the next step.
          </h2>
          <ul className="mt-6 grid gap-4">
            {brokerageServices.map((item) => (
              <li
                key={item}
                className="rounded-[8px] border border-slate-200 bg-slate-50 px-5 py-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          id="contact"
          className="rounded-[8px] bg-slate-950 px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/60">
            Viewing request
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            A stronger close for high-intent buyers.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/80">
            Instead of ending on generic contact details, this section frames the next
            step around timing, neighborhood fit, and budget alignment.
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/84">
            <p>Typical response: same day during business hours</p>
            <p>Best inquiry details: target district, budget, unit size, move timeline</p>
            <p>Preferred next step: shortlist review followed by a coordinated viewing plan</p>
          </div>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[8px] bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            href="mailto:hello@lineastudio.cn"
          >
            Request a property consultation
          </a>
        </div>
      </section>

      <CaseSummary {...realEstateCaseSummary} />
    </CaseShell>
  );
}
