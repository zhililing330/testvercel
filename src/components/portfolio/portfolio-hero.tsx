import Image from "next/image";
import { portfolioHero } from "@/content/portfolio";

export function PortfolioHero() {
  return (
    <section
      aria-label="作品集首页首屏"
      className="mx-auto max-w-7xl px-6 pb-8 pt-6 sm:px-8 lg:px-10 lg:pb-12 lg:pt-8"
    >
      <div className="grid gap-8 overflow-hidden rounded-[8px] bg-white shadow-[0_28px_90px_rgba(18,24,38,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            {portfolioHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {portfolioHero.body}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
              href={portfolioHero.primaryCta.href}
            >
              {portfolioHero.primaryCta.label}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-slate-300 px-6 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              href={portfolioHero.secondaryCta.href}
            >
              {portfolioHero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-slate-200 sm:min-h-[420px]">
          <Image
            src="/images/portfolio/hero-studio.jpg"
            alt="Linea Studio 为服务型行业设计品牌官网的工作场景"
            fill
            preload
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
