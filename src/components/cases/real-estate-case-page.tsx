import Image from "next/image";
import { CaseShell } from "./case-shell";
import { CaseSummary } from "./case-summary";
import { getCaseCatalog, getCaseShellCopy } from "@/content/cases";
import { AppLocale } from "@/i18n/config";

const realEstateCopy = {
  zh: {
    navItems: [
      { href: "#overview", label: "概览" },
      { href: "#listings", label: "精选房源" },
      { href: "#services", label: "服务支持" },
      { href: "#contact", label: "看房咨询" },
    ],
    eyebrow: "房产案例",
    title: "用更清晰的方式展示城市住宅与看房路径。",
    body:
      "这个模板面向重视品牌感和效率的房产团队，把房源展示、服务说明与高意向咨询更自然地连在一起。",
    primaryCta: "浏览房源",
    secondaryCta: "预约看房",
    heroAlt: "高品质住宅项目展示画面",
    listingsLabel: "精选房源",
    listingsTitle: "房源不堆砌，也能让人快速比较。",
    listingsBody: "页面使用更紧凑的房源节奏，让访客在不被信息淹没的前提下理解每个选择。",
    listings: [
      {
        name: "滨水家庭住宅",
        meta: "178 平 | 4 室 | 私享露台",
        body: "适合希望兼顾通勤效率与居住安定感的城市家庭。",
      },
      {
        name: "公园景观行政公寓",
        meta: "132 平 | 3 室 | 全服务物业",
        body: "通过更完整的关键信息呈现，帮助高意向客户更快判断是否值得看房。",
      },
      {
        name: "低密度花园物业",
        meta: "220 平 | 5 室 | 封闭社区",
        body: "更适合从核心城区公寓升级到长期家庭住宅的买家。",
      },
    ],
    serviceLabel: "经纪支持",
    serviceTitle: "把服务层也讲清楚，访客才更容易进入下一步。",
    services: [
      "根据区域与预算做初步筛选与清单整理",
      "协调带看节奏与买方沟通节点",
      "辅助报价策略、推进节奏与成交准备",
    ],
    inquiryLabel: "看房咨询",
    inquiryTitle: "为高意向买家准备一个更强的收尾区。",
    inquiryBody:
      "这里不只是留联系方式，而是围绕预算、区域匹配与看房节奏来组织下一步，让咨询动作更具体。",
    inquiryItems: [
      "常规响应：工作时段内尽量当天回复",
      "建议信息：目标区域、预算、面积、入住时间",
      "推荐动作：先看清单，再安排有方向的带看计划",
    ],
    inquiryCta: "发起置业咨询",
    summary: {
      eyebrow: "案例总结",
      title: "这个房产模板把高品质展示与线索承接放进了更轻盈的浏览路径。",
      description:
        "它既保留了品牌感，也让房源信息和咨询动作更容易被理解，适合面向高意向客户的经纪官网。",
      bullets: [
        "房源展示节奏更克制，便于比较而不是堆砌。",
        "服务支持区帮助访客理解团队能提供什么。",
        "咨询区更贴近真实置业决策，而不是泛泛留资。",
      ],
    },
  },
  en: {
    navItems: [
      { href: "#overview", label: "Overview" },
      { href: "#listings", label: "Listings" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Viewing" },
    ],
    eyebrow: "Real-estate case study",
    title: "Urban homes presented with more clarity and a smoother path to viewing.",
    body:
      "This template is aimed at brokerages that need a polished brand layer without losing the practical signals buyers use to decide whether to inquire.",
    primaryCta: "Browse listings",
    secondaryCta: "Schedule a viewing",
    heroAlt: "Premium residential property showcase",
    listingsLabel: "Featured listings",
    listingsTitle: "Featured homes with enough context to compare.",
    listingsBody:
      "The page uses a compact listing rhythm so buyers can evaluate fit without scrolling through an endless wall of near-identical inventory.",
    listings: [
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
    ],
    serviceLabel: "Brokerage support",
    serviceTitle: "A service layer that helps prospects picture the next step.",
    services: [
      "Neighborhood shortlists and availability filtering",
      "Viewing coordination and buyer-side communication",
      "Offer strategy, pacing, and closing preparation",
    ],
    inquiryLabel: "Viewing request",
    inquiryTitle: "A stronger close for high-intent buyers.",
    inquiryBody:
      "Instead of ending on generic contact details, this section frames the next step around timing, neighborhood fit, and budget alignment.",
    inquiryItems: [
      "Typical response: same day during business hours",
      "Best inquiry details: target district, budget, unit size, move timeline",
      "Preferred next step: shortlist review followed by a coordinated viewing plan",
    ],
    inquiryCta: "Request a property consultation",
    summary: {
      eyebrow: "Case summary",
      title: "This brokerage template pairs premium presentation with a simpler path to schedule a viewing.",
      description:
        "The page brings together listing highlights, buyer guidance, and contact prompts so prospects can understand the offer quickly and move toward a property conversation.",
      bullets: [
        "Uses a visually led hero to present the brand as polished, local, and high-touch.",
        "Turns featured inventory into easy-to-compare cards without overwhelming the page.",
        "Ends with a viewing section that supports both high-intent inquiries and early-stage browsing.",
      ],
    },
  },
} as const satisfies Record<AppLocale, unknown>;

export function RealEstateCasePage({ locale }: { locale: AppLocale }) {
  const content = realEstateCopy[locale];
  const caseCatalog = getCaseCatalog(locale);
  const shellCopy = getCaseShellCopy(locale);

  return (
    <CaseShell
      brand={caseCatalog.realEstate.brand}
      currentPath={caseCatalog.realEstate.href}
      industry={caseCatalog.realEstate.industry}
      locale={locale}
      navItems={content.navItems}
    >
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-16"
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{content.body}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
              href="#listings"
            >
              {content.primaryCta}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-slate-300 px-6 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              href="#contact"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-slate-200 shadow-[0_24px_72px_rgba(15,23,42,0.14)] sm:min-h-[460px]">
          <Image
            src="/images/portfolio/case-real-estate.webp"
            alt={content.heroAlt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="listings"
        aria-label={content.listingsLabel}
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="section-title">{content.listingsTitle}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{content.listingsBody}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.listings.map((listing) => (
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
            {content.serviceLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">{content.serviceTitle}</h2>
          <ul className="mt-6 grid gap-4">
            {content.services.map((item) => (
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
            {content.inquiryLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold">{content.inquiryTitle}</h2>
          <p className="mt-4 text-base leading-8 text-white/80">{content.inquiryBody}</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-white/84">
            {content.inquiryItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[8px] bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            href="mailto:hello@lineastudio.cn"
          >
            {content.inquiryCta}
          </a>
        </div>
      </section>

      <CaseSummary
        ariaLabel={shellCopy.summaryRegionLabel}
        eyebrow={content.summary.eyebrow}
        title={content.summary.title}
        description={content.summary.description}
        bullets={content.summary.bullets}
      />
    </CaseShell>
  );
}
