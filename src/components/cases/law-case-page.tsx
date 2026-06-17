import Image from "next/image";
import { CaseShell } from "./case-shell";
import { CaseSummary } from "./case-summary";
import { getCaseCatalog, getCaseShellCopy } from "@/content/cases";
import { AppLocale } from "@/i18n/config";

const lawCopy = {
  zh: {
    navItems: [
      { href: "#overview", label: "概览" },
      { href: "#practice", label: "业务领域" },
      { href: "#approach", label: "页面表达" },
      { href: "#contact", label: "咨询" },
    ],
    eyebrow: "律所案例",
    title: "为高风险商业与个人事务提供稳健法律顾问支持。",
    body:
      "这个模板用克制、清晰的表达方式呈现律所的专业判断、擅长领域和咨询入口，让高信任行业也能有更现代的官网体验。",
    primaryCta: "预约咨询",
    secondaryCta: "查看业务领域",
    heroAlt: "律师事务所会议室与咨询场景",
    servicesLabel: "法律服务",
    servicesTitle: "让访客更快判断是否匹配的业务结构",
    servicesBody: "不用让潜在客户先读完一大段文字，页面先把事务所最关键的业务范围讲清楚。",
    practiceAreas: [
      {
        title: "商事争议",
        body: "适合需要快速判断应对策略、沟通节奏与诉讼风险的企业与高净值客户。",
      },
      {
        title: "常年法律顾问",
        body: "适合需要外部法律支持来处理合同、治理与日常决策的公司团队。",
      },
      {
        title: "股权与投融资",
        body: "适合对结构设计、文件严谨度与多方协同有较高要求的交易事项。",
      },
    ],
    processLabel: "页面表达",
    processTitle: "专业克制，但不让页面显得疏离。",
    processNotes: [
      "用更短的定位文案说明事务所最擅长承接的事项类型。",
      "把业务领域拆成更容易浏览的分组，而不是堆成密集段落。",
      "咨询区更平稳直接，更符合高信任服务的语气。",
    ],
    consultationLabel: "咨询承接",
    consultationTitle: "一个更稳妥的咨询入口。",
    consultationBody:
      "收尾区不是强调促销，而是帮助来访者判断是否适合发起初步沟通，这更符合律所官网的气质。",
    consultationItems: [
      "响应时间：一个工作日内",
      "适合事项：常年顾问、争议事务、交易项目",
      "建议提交：事项摘要、时间节点、关键对方信息",
    ],
    consultationCta: "发起法律咨询",
    summary: {
      eyebrow: "案例总结",
      title: "这个律所模板把可信度、业务边界与咨询承接放进了更紧凑的页面节奏。",
      description:
        "它不依赖夸张修辞来建立权威，而是通过页面秩序、服务分组和更稳的收尾区来提升专业感。",
      bullets: [
        "首页表达更克制，适合高信任行业。",
        "业务领域信息更清楚，便于快速筛选是否匹配。",
        "咨询承接区更像真实法律服务，而不是营销页尾。",
      ],
    },
  },
  en: {
    navItems: [
      { href: "#overview", label: "Overview" },
      { href: "#practice", label: "Practice Areas" },
      { href: "#approach", label: "Approach" },
      { href: "#contact", label: "Consultation" },
    ],
    eyebrow: "Legal case study",
    title: "Strategic counsel for high-stakes business and private matters.",
    body:
      "This template presents a law office with restrained confidence: a clear point of view, structured practice-area explanations, and a professional path toward first contact.",
    primaryCta: "Request a consultation",
    secondaryCta: "View practice areas",
    heroAlt: "Law firm meeting room and consultation setting",
    servicesLabel: "Legal services",
    servicesTitle: "Practice areas built for fast qualification",
    servicesBody:
      "Instead of burying capabilities under long-form prose, the page makes the firm's strongest work visible in a few high-signal blocks.",
    practiceAreas: [
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
    ],
    processLabel: "Why the page works",
    processTitle: "Professional tone without dead space.",
    processNotes: [
      "Short positioning copy clarifies what kinds of matters the firm is best suited to take on.",
      "Practice areas are grouped into a compact grid so prospects can identify fit without reading dense paragraphs.",
      "The consultation section is calm and direct, which suits a high-trust service better than a loud sales pitch.",
    ],
    consultationLabel: "Consultation",
    consultationTitle: "A more grounded intake section.",
    consultationBody:
      "This closing block is designed for legal work that depends on fit and trust. It encourages contact without sounding transactional.",
    consultationItems: [
      "Response window: within one business day",
      "Best suited for: ongoing counsel, disputes, transactions",
      "Preferred intake: brief matter summary, timeline, key counterparties",
    ],
    consultationCta: "Start a legal inquiry",
    summary: {
      eyebrow: "Case summary",
      title: "This law-firm template balances authority, clarity, and a low-friction consultation path.",
      description:
        "The page is designed for legal teams that need to communicate trust quickly, explain where they are strongest, and guide qualified inquiries into a clear next step.",
      bullets: [
        "Introduces the firm with a restrained, confidence-building hero and concise positioning copy.",
        "Organizes services into clear practice-area groups that are easy to scan on desktop and mobile.",
        "Closes with a consultation section that feels professional instead of promotional.",
      ],
    },
  },
} as const satisfies Record<AppLocale, unknown>;

export function LawCasePage({ locale }: { locale: AppLocale }) {
  const content = lawCopy[locale];
  const caseCatalog = getCaseCatalog(locale);
  const shellCopy = getCaseShellCopy(locale);

  return (
    <CaseShell
      brand={caseCatalog.law.brand}
      currentPath={caseCatalog.law.href}
      industry={caseCatalog.law.industry}
      locale={locale}
      navItems={content.navItems}
    >
      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-16"
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
              href="#contact"
            >
              {content.primaryCta}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-slate-300 px-6 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              href="#practice"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-slate-200 shadow-[0_24px_72px_rgba(15,23,42,0.16)] sm:min-h-[460px]">
          <Image
            src="/images/portfolio/case-law.jpg"
            alt={content.heroAlt}
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section
        id="practice"
        aria-label={content.servicesLabel}
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="max-w-3xl">
          <h2 className="section-title">{content.servicesTitle}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            {content.servicesBody}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.practiceAreas.map((area) => (
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
            {content.processLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold">{content.processTitle}</h2>
          <ul className="mt-6 grid gap-4">
            {content.processNotes.map((note) => (
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
            {content.consultationLabel}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">
            {content.consultationTitle}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{content.consultationBody}</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            {content.consultationItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[8px] bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
            href="mailto:hello@lineastudio.cn"
          >
            {content.consultationCta}
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
