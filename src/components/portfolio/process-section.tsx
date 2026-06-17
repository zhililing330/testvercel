import { processDetails, sectionIntro } from "@/content/portfolio";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
          合作流程
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          {sectionIntro.process.title}
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {sectionIntro.process.body}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processDetails.map((step, index) => (
          <article
            key={step.title}
            className="rounded-[8px] border border-slate-200 bg-white p-6"
          >
            <p className="text-sm font-semibold text-slate-500">
              0{index + 1}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
