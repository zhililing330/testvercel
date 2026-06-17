import Image from "next/image";
import { CaseShell } from "./case-shell";
import { CaseSummary } from "./case-summary";
import {
  caseCatalog,
  lawCaseSections,
  lawCaseSummary,
} from "@/content/cases";

const practiceAreas = [
  {
    title: "Business disputes",
    body: "For founders, operators, and executive teams who need clear representation when commercial pressure escalates.",
  },
  {
    title: "Ongoing counsel",
    body: "For companies that need an outside legal partner to support contracts, governance, and day-to-day judgment calls.",
  },
  {
    title: "Equity and investment",
    body: "For transactions that need careful structure, document discipline, and aligned stakeholder communication.",
  },
] as const;

const processNotes = [
  "Short positioning copy clarifies what kinds of matters the firm is best suited to take on.",
  "Practice areas are grouped into a compact grid so prospects can identify fit without reading dense paragraphs.",
  "The consultation section is calm and direct, which suits a high-trust service better than a loud sales pitch.",
] as const;

export function LawCasePage() {
  return (
    <CaseShell
      brand={caseCatalog.law.brand}
      industry={caseCatalog.law.industry}
      navItems={lawCaseSections}
    >
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-16"
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            Legal case study
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Strategic counsel for high-stakes business and private matters.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            This template presents a law office with restrained confidence: a clear
            point of view, structured practice-area explanations, and a professional
            path toward first contact.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
              href="#contact"
            >
              Request a consultation
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-slate-300 px-6 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              href="#practice"
            >
              View practice areas
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-slate-200 shadow-[0_24px_72px_rgba(15,23,42,0.16)] sm:min-h-[460px]">
          <Image
            src="/images/portfolio/case-law.jpg"
            alt="Law firm meeting room and consultation setting"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="practice"
        aria-label="Legal services"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="section-title">Practice areas built for fast qualification</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Instead of burying capabilities under long-form prose, the page makes the
            firm&apos;s strongest work visible in a few high-signal blocks.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-semibold text-slate-950">{area.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="approach"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14"
      >
        <div className="rounded-[8px] bg-slate-950 px-6 py-8 text-white sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/60">
            Why the page works
          </p>
          <h2 className="mt-4 text-3xl font-semibold">Professional tone without dead space.</h2>
          <ul className="mt-6 grid gap-4">
            {processNotes.map((note) => (
              <li
                key={note}
                className="rounded-[8px] border border-white/10 bg-white/6 px-5 py-5 text-sm leading-7 text-white/84"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div
          id="contact"
          className="rounded-[8px] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-8 lg:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            Consultation
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">
            A more grounded intake section.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This closing block is designed for legal work that depends on fit and trust.
            It encourages contact without sounding transactional.
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <p>Response window: within one business day</p>
            <p>Best suited for: ongoing counsel, disputes, transactions</p>
            <p>Preferred intake: brief matter summary, timeline, key counterparties</p>
          </div>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
            href="mailto:hello@lineastudio.cn"
          >
            Start a legal inquiry
          </a>
        </div>
      </section>

      <CaseSummary {...lawCaseSummary} />
    </CaseShell>
  );
}
