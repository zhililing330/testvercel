import Image from "next/image";
import Link from "next/link";
import { portfolioCases, sectionIntro } from "@/content/portfolio";

export function CaseStudyGrid() {
  return (
    <section
      aria-label="首页案例"
      id="cases"
      className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
          案例方向
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          {sectionIntro.cases.title}
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {sectionIntro.cases.body}
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {portfolioCases.map((study) => (
          <article
            key={study.id}
            className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(18,24,38,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(18,24,38,0.12)]"
          >
            <Link className="block h-full" href={study.href}>
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={study.image}
                  alt={study.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-6">
                <p className="text-sm font-semibold text-slate-500">
                  {study.industry}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  {study.brand}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {study.summary}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
