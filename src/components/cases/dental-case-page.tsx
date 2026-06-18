import Image from "next/image";
import { CaseShell } from "./case-shell";
import { CaseSummary } from "./case-summary";
import { getCaseCatalog, getCaseShellCopy } from "@/content/cases";
import { AppLocale } from "@/i18n/config";

type IconName =
  | "calendar"
  | "chevron"
  | "clipboard"
  | "implant"
  | "phone"
  | "pin"
  | "shield"
  | "sparkle"
  | "tooth";

const dentalCopy = {
  zh: {
    navItems: [
      { href: "#overview", label: "概览" },
      { href: "#services", label: "服务" },
      { href: "#process", label: "流程" },
      { href: "#contact", label: "联系" },
    ],
    eyebrow: "牙科案例",
    title: "让看牙体验更安心、更清晰、更现代。",
    highlight: null,
    body:
      "晴禾齿科把预防护理、形象治疗、隐形矫正与种植修复放进一条更温和、更容易预约的本地咨询路径里。",
    primaryCta: "预约咨询",
    secondaryCta: "查看服务",
    heroAlt: "明亮现代的牙科诊疗空间",
    servicesRegionLabel: "牙科服务",
    servicesTitle: "围绕信任感组织服务说明",
    servicesBody: "服务模块保留清晰卡片结构，同时把说明写得更像患者真正会看的语言。",
    services: [
      {
        title: "预防检查",
        description: "通过常规检查、数字影像与清晰建议，让患者更早发现问题，也更清楚下一步。",
        image: "/images/service-checkup.png",
        icon: "sparkle",
        alt: "牙医进行温和口腔检查",
      },
      {
        title: "牙齿美白",
        description: "针对想改善笑容状态的患者，提供更安全、更容易理解的美白服务路径。",
        image: "/images/service-whitening.png",
        icon: "tooth",
        alt: "现代诊所里的牙齿美白护理",
      },
      {
        title: "隐形矫正",
        description: "用更清晰的方案说明、佩戴节奏与复诊沟通，降低矫正过程中的理解门槛。",
        image: "/images/service-aligner.png",
        icon: "tooth",
        alt: "隐形牙套近景",
      },
      {
        title: "种植修复",
        description: "通过数字化方案与修复节奏说明，帮助患者理解舒适度、功能恢复与预期变化。",
        image: "/images/service-implant.png",
        icon: "implant",
        alt: "种植修复模型与工具",
      },
    ],
    processTitle: "把就诊路径说得更透明",
    processBody: "案例页保留五步式患者流程，让访客在预约前先知道整个体验会怎样发生。",
    steps: [
      { title: "选择时间", text: "患者可以线上或电话预约适合的时段。", icon: "calendar" },
      { title: "初步评估", text: "团队通过影像与椅旁记录快速理解当前情况。", icon: "sparkle" },
      { title: "方案说明", text: "医生解释可选方案、周期、舒适度与预期结果。", icon: "clipboard" },
      { title: "实施治疗", text: "以更平稳的节奏完成治疗，并清楚说明术后事项。", icon: "tooth" },
      { title: "后续复查", text: "通过复查与维护提醒，帮助患者持续保持治疗结果。", icon: "shield" },
    ],
    receptionAlt: "晴禾齿科前台接待区",
    contactTitle: "联系诊所",
    contactBody: "页面收尾保留诊所联系信息与预约表单，让咨询动作更自然地落地。",
    contactItems: [
      { label: "电话", value: "400-800-2026", icon: "phone" },
      { label: "地址", value: "上海市静安区晨光路 88 号", icon: "pin" },
      { label: "时间", value: "周一至周五 09:00-18:00", icon: "calendar" },
    ],
    loungeAlt: "舒适的诊所候诊区",
    formTitle: "预约咨询",
    formBody: "留下几项基本信息后，诊所团队就能更快确认合适的就诊时间。",
    form: {
      name: "姓名",
      namePlaceholder: "你的姓名",
      phone: "电话",
      phonePlaceholder: "你的联系电话",
      service: "服务项目",
      servicePlaceholder: "选择服务项目",
      preferredDate: "意向日期",
      notes: "补充说明",
      notesPlaceholder: "可以提前说明需求或顾虑",
      submit: "提交预约",
    },
    summary: {
      eyebrow: "案例总结",
      title: "这个牙科模板把安心理解、服务说明与预约动作放进同一条清晰路径。",
      description:
        "它保留了诊所网站应有的温和气质，同时通过更清楚的模块结构与转化入口，把浏览者稳定带向预约咨询。",
      bullets: [
        "用更轻的表达方式承接牙科服务里的信任感。",
        "保留完整服务、流程与联系信息，不靠花哨叙述硬撑页面。",
        "让移动端访客也能更快进入预约动作。",
      ],
    },
  },
  en: {
    navItems: [
      { href: "#overview", label: "Overview" },
      { href: "#services", label: "Services" },
      { href: "#process", label: "Process" },
      { href: "#contact", label: "Contact" },
    ],
    eyebrow: "Dental case study",
    title: "Dental care that feels calm, clear, and modern.",
    highlight: null,
    body:
      "Sunny Dental presents preventive care, cosmetic services, aligner treatment, and implant restoration through a warm conversion path for local patients.",
    primaryCta: "Book a consultation",
    secondaryCta: "View services",
    heroAlt: "Bright modern dental clinic treatment room",
    servicesRegionLabel: "Dental services",
    servicesTitle: "Services shaped for trust",
    servicesBody:
      "The case page keeps the original service grid and gives each treatment a patient-friendly explanation.",
    services: [
      {
        title: "Preventive checkups",
        description:
          "Routine exams, digital imaging, and clear guidance help patients spot issues early and feel in control.",
        image: "/images/service-checkup.png",
        icon: "sparkle",
        alt: "Dentist completing a gentle oral checkup",
      },
      {
        title: "Teeth whitening",
        description:
          "A safe whitening path for patients who want a brighter smile without a harsh clinical experience.",
        image: "/images/service-whitening.png",
        icon: "tooth",
        alt: "Patient receiving teeth whitening care in a modern clinic",
      },
      {
        title: "Clear aligners",
        description:
          "Personalized aligner planning with simple explanations, comfortable routines, and progress check-ins.",
        image: "/images/service-aligner.png",
        icon: "tooth",
        alt: "Clear dental aligner closeup",
      },
      {
        title: "Implant restoration",
        description:
          "Digital implant planning and restorative treatment designed to rebuild comfort, confidence, and function.",
        image: "/images/service-implant.png",
        icon: "implant",
        alt: "Dental implant model and restoration tools",
      },
    ],
    processTitle: "A transparent visit flow",
    processBody:
      "The migrated page keeps the original five-step patient journey and makes it easy to scan before booking.",
    steps: [
      { title: "Book a visit", text: "Patients choose a time online or by phone.", icon: "calendar" },
      { title: "Clinical review", text: "The team uses imaging and chairside notes to understand the case.", icon: "sparkle" },
      { title: "Treatment plan", text: "Dentists explain options, timing, comfort, and expected outcomes.", icon: "clipboard" },
      { title: "Care delivery", text: "Treatment is delivered with a calm pace and clear next steps.", icon: "tooth" },
      { title: "Follow-up", text: "The clinic keeps patients on track with review and maintenance.", icon: "shield" },
    ],
    receptionAlt: "Sunny Dental reception area",
    contactTitle: "Contact the clinic",
    contactBody:
      "The route closes with practical contact information and the same appointment form pattern as the original page.",
    contactItems: [
      { label: "Phone", value: "400-800-2026", icon: "phone" },
      { label: "Address", value: "88 Chenguang Road, Jing'an, Shanghai", icon: "pin" },
      { label: "Hours", value: "Monday to Friday, 09:00-18:00", icon: "calendar" },
    ],
    loungeAlt: "Comfortable dental clinic waiting area",
    formTitle: "Book a consultation",
    formBody:
      "Share a few details and the clinic team can follow up with the next best appointment time.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "Your phone number",
      service: "Service",
      servicePlaceholder: "Select a service",
      preferredDate: "Preferred date",
      notes: "Notes",
      notesPlaceholder: "Share your needs or questions",
      submit: "Submit request",
    },
    summary: {
      eyebrow: "Case summary",
      title:
        "A calm dental homepage became a reusable portfolio case study without losing the original experience.",
      description:
        "The route keeps the original clinic story, imagery, service cards, visit process, and appointment form while moving the page into a shared case-study shell.",
      bullets: [
        "Preserves the dental homepage flow: hero, services, process, contact, and conversion form.",
        "Introduces a shared case shell with a clear return path to the portfolio homepage.",
        "Keeps the closing summary consistent with the other industry case studies.",
      ],
    },
  },
} as const satisfies Record<AppLocale, unknown>;

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const shared = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...shared}>
          <path d="M7 3v3M17 3v3M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" />
          <path d="M8 13h3M8 16h6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...shared}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...shared}>
          <path d="M9 5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V6H9v-.5Z" />
          <path d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 5H16" />
          <path d="M8 12h8M8 16h5" />
        </svg>
      );
    case "implant":
      return (
        <svg {...shared}>
          <path d="M12 3c2.6 0 4.6 2 4.6 4.5 0 2.1-1.3 3.3-2.4 4.5-.8.9-1.2 1.7-1.2 3.1V21h-2v-5.9c0-1.4-.4-2.2-1.2-3.1-1.1-1.2-2.4-2.4-2.4-4.5C7.4 5 9.4 3 12 3Z" />
          <path d="M10.2 17h3.6M10.2 19h3.6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M8.2 4.5 10 8.7 7.8 10c1.1 2.4 2.9 4.2 5.3 5.3l1.3-2.2 4.1 1.8c.5.2.8.8.7 1.3l-.5 2.4c-.1.7-.8 1.2-1.5 1.2C10.1 19.5 4.5 13.9 4.2 6.8c0-.7.5-1.4 1.2-1.5l2.4-.5c.2-.1.3-.1.4-.3Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...shared}>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3.5 19 6v5.3c0 4.3-2.9 7.9-7 9.2-4.1-1.3-7-4.9-7-9.2V6l7-2.5Z" />
          <path d="m8.8 12.1 2.1 2.1 4.4-4.7" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...shared}>
          <path d="M12 3.8 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4-5.4-1.8L10.2 9 12 3.8Z" />
          <path d="m18.5 16 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" />
        </svg>
      );
    case "tooth":
      return (
        <svg {...shared}>
          <path d="M12 4.4c1.5-.9 3.1-1 4.5-.2 2.1 1.2 2.7 4.1 1.4 7-.7 1.5-.8 2.9-.8 4.2 0 2.9-1 5.1-2.5 5.1-1 0-1.3-1.3-1.6-3.4-.2-1.4-.4-2.5-1-2.5s-.8 1.1-1 2.5c-.3 2.1-.6 3.4-1.6 3.4-1.5 0-2.5-2.2-2.5-5.1 0-1.3-.1-2.7-.8-4.2-1.3-2.9-.7-5.8 1.4-7 1.4-.8 3-.7 4.5.2Z" />
          <path d="M10 6.3c1.4.6 2.6.6 4 0" />
        </svg>
      );
  }
}

export function DentalCasePage({ locale }: { locale: AppLocale }) {
  const content = dentalCopy[locale];
  const caseCatalog = getCaseCatalog(locale);
  const shellCopy = getCaseShellCopy(locale);

  return (
    <CaseShell
      brand={caseCatalog.dental.brand}
      currentPath={caseCatalog.dental.href}
      industry={caseCatalog.dental.industry}
      locale={locale}
      navItems={content.navItems}
    >
      <section id="overview" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#f7fcfd_42%,rgba(255,255,255,0)_68%)]" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-teal-700">
              {content.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.12] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              {content.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600 sm:text-xl">
              {content.body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary h-14 px-8 text-base" href="#contact">
                <Icon name="calendar" className="size-5" />
                {content.primaryCta}
              </a>
              <a className="btn-secondary h-14 px-8 text-base" href="#services">
                {content.secondaryCta}
                <Icon name="chevron" className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative z-0 h-[420px] overflow-hidden rounded-[8px] shadow-[0_28px_80px_rgba(15,118,110,0.16)] sm:h-[560px] lg:-mr-16 lg:h-[660px]">
            <Image
              src="/images/clinic-hero.png"
              alt={content.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="relative z-10 h-14 rounded-t-[48%] bg-white" />
      </section>

      <section
        id="services"
        aria-label={content.servicesRegionLabel}
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{content.servicesTitle}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            {content.servicesBody}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,118,110,0.16)]"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative px-6 pb-7 pt-11 text-center">
                <div className="absolute left-1/2 top-0 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-teal-600/15 bg-teal-50 text-teal-700 shadow-[0_10px_28px_rgba(15,118,110,0.16)]">
                  <Icon name={service.icon} className="size-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[8px] bg-sky-50/90 shadow-[0_18px_60px_rgba(14,116,144,0.10)] lg:grid-cols-[1fr_380px]">
          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">{content.processTitle}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{content.processBody}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {content.steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-[8px] bg-white text-teal-700 shadow-[0_10px_24px_rgba(15,118,110,0.12)]">
                    <Icon name={step.icon} className="size-8" />
                  </div>
                  <div className="mx-auto mt-5 flex size-6 items-center justify-center rounded-full bg-teal-700 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/images/clinic-reception.webp"
                alt={content.receptionAlt}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover"
              />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20"
      >
        <div>
          <h2 className="section-title text-left">{content.contactTitle}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{content.contactBody}</p>

          <div className="mt-8 space-y-6">
            {content.contactItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                  <Icon name={item.icon} className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 h-52 overflow-hidden rounded-[8px]">
              <Image
                src="/images/clinic-lounge.webp"
                alt={content.loungeAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
          </div>
        </div>

        <form className="rounded-[8px] bg-sky-50/80 p-6 shadow-[0_16px_48px_rgba(14,116,144,0.10)] sm:p-10">
          <h2 className="text-3xl font-semibold text-slate-950">{content.formTitle}</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">{content.formBody}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              <span>{content.form.name}</span>
              <input className="field-control" type="text" name="name" placeholder={content.form.namePlaceholder} />
            </label>
            <label className="field-label">
              <span>{content.form.phone}</span>
              <input className="field-control" type="tel" name="phone" placeholder={content.form.phonePlaceholder} />
            </label>
            <label className="field-label sm:col-span-2">
              <span>{content.form.service}</span>
              <select className="field-control" name="service" defaultValue="">
                <option value="" disabled>
                  {content.form.servicePlaceholder}
                </option>
                {content.services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label sm:col-span-2">
              <span>{content.form.preferredDate}</span>
              <input className="field-control" type="date" name="date" />
            </label>
            <label className="field-label sm:col-span-2">
              <span>{content.form.notes}</span>
              <textarea
                className="field-control min-h-32 resize-y"
                name="message"
                placeholder={content.form.notesPlaceholder}
              />
            </label>
          </div>

          <button className="btn-primary mt-6 h-14 w-full text-base" type="submit">
            {content.form.submit}
          </button>
        </form>
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
