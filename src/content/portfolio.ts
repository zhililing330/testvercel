import { AppLocale } from "@/i18n/config";
import { getCaseCatalog } from "./cases";

const portfolioDictionaries = {
  zh: {
    meta: {
      title: "行业网站作品集",
      description: "面向服务型行业的双语作品集，包含牙医诊所、律师事务所与房产经纪案例。",
    },
    header: {
      ariaLabel: "站点头部",
      navAriaLabel: "主导航",
      caseStudies: "案例",
      capabilities: "能力",
      process: "流程",
      contact: "联系",
      cta: "咨询合作",
    },
    footer: {
      ariaLabel: "站点页脚",
      navAriaLabel: "案例导航",
    },
    hero: {
      ariaLabel: "作品集首页首屏",
      title: "为服务型行业打造兼具审美与转化的品牌官网",
      body:
        "从牙医诊所到律师事务所、房产经纪，我们把行业信任感、移动端体验与真实咨询路径整合进同一套作品集系统。",
      primaryCta: "查看案例",
      secondaryCta: "咨询合作",
      imageAlt: "Linea Studio 为服务型行业设计官网的工作场景",
    },
    sections: {
      cases: {
        ariaLabel: "首页案例",
        eyebrow: "案例方向",
        title: "三类服务行业的官网转化样板",
        body:
          "每个案例都围绕行业信任、咨询承接与移动端浏览节奏来组织信息，而不是只做一层视觉包装。",
      },
      capabilities: {
        eyebrow: "能力范围",
        title: "从策略到上线，覆盖服务型官网真正需要的关键环节",
        body:
          "我们把内容方向、页面表达、前端体验与交付配合放在同一节奏里，让官网既能展示品牌，也能承接真实咨询。",
      },
      process: {
        eyebrow: "合作流程",
        title: "小团队也能保持清晰、稳定、可预期的合作推进",
        body:
          "每一轮都有明确目标、反馈节点与交付物，适合需要尽快上线又重视品质的服务品牌。",
      },
      contact: {
        ariaLabel: "联系合作",
        eyebrow: "联系合作",
        title: "准备把官网从单页宣传升级成真正的品牌资产？",
        body:
          "无论你是诊所合伙人、律所负责人还是房产团队，我们都可以先从目标、案例方向和上线节奏开始聊起。",
      },
    },
    capabilities: [
      {
        title: "行业信息架构",
        body: "梳理用户最关心的服务、流程、资质与常见问题，让内容顺序更贴近咨询决策。",
      },
      {
        title: "品牌视觉表达",
        body: "通过影像气质、版式层级与页面节奏建立行业可信度，而不是只堆砌漂亮元素。",
      },
      {
        title: "上线交付支持",
        body: "兼顾移动端体验、基础 SEO 与后续可维护性，确保网站不仅好看，也能稳定上线。",
      },
    ],
    process: [
      {
        title: "沟通需求",
        body: "明确行业定位、目标客户与当前站点问题，先找出这次官网最需要解决的业务目标。",
      },
      {
        title: "确定方向",
        body: "整理页面结构、视觉参考与内容重点，确认官网风格与咨询路径的主框架。",
      },
      {
        title: "设计与开发",
        body: "完成页面设计与前端实现，同步处理移动端适配、图片素材与展示细节。",
      },
      {
        title: "上线交付",
        body: "联调上线环境并交付维护说明，让团队后续更新内容时也能保持稳定节奏。",
      },
    ],
    contact: {
      items: [
        { label: "合作邮箱", value: "hello@lineastudio.cn" },
        { label: "项目周期", value: "通常 2-4 周完成首版" },
        { label: "适合客户", value: "牙科、律所、房产经纪等服务品牌" },
        { label: "沟通方式", value: "微信、视频会议或面对面梳理" },
      ],
      primaryCta: "发送合作需求",
    },
    homeCases: [
      {
        id: "dental",
        image: "/images/portfolio/case-dental.jpg",
        alt: "牙科诊所官网案例画面",
        summary:
          "以安心、洁净与预约转化为核心，重构服务说明、就诊流程与移动端咨询入口。",
      },
      {
        id: "law",
        image: "/images/portfolio/case-law.jpg",
        alt: "律师事务所官网案例画面",
        summary:
          "突出专业可信的团队表达与服务边界，让访客在短时间内读懂擅长领域并产生咨询意愿。",
      },
      {
        id: "realEstate",
        image: "/images/portfolio/case-real-estate.jpg",
        alt: "房产经纪官网案例画面",
        summary:
          "把高净值房源展示、区域信任感与线索收集放进更轻盈的浏览路径里，兼顾品牌感与效率。",
      },
    ],
  },
  en: {
    meta: {
      title: "Service Business Portfolio",
      description:
        "A bilingual portfolio for service businesses, featuring dental, legal, and real-estate website case studies.",
    },
    header: {
      ariaLabel: "Site header",
      navAriaLabel: "Primary",
      caseStudies: "Case Studies",
      capabilities: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Start a Project",
    },
    footer: {
      ariaLabel: "Site footer",
      navAriaLabel: "Case studies",
    },
    hero: {
      ariaLabel: "Portfolio homepage hero",
      title: "Portfolio websites for service businesses that need trust and conversion.",
      body:
        "From dental clinics to law offices and real-estate brokerages, this portfolio shows how the same system can balance credibility, mobile clarity, and inquiry flow.",
      primaryCta: "View Case Studies",
      secondaryCta: "Start a Project",
      imageAlt: "Linea Studio working session for service-business websites",
    },
    sections: {
      cases: {
        ariaLabel: "Featured case studies",
        eyebrow: "Case Study Direction",
        title: "Three website templates built around real service-business conversion",
        body:
          "Each example is structured around trust, qualification, and mobile scanning rhythm rather than surface-level styling alone.",
      },
      capabilities: {
        eyebrow: "What We Cover",
        title: "From strategy to launch, covering the parts that service websites actually need",
        body:
          "We shape messaging, visual hierarchy, frontend polish, and delivery flow together so the site can support both brand perception and real inquiries.",
      },
      process: {
        eyebrow: "How We Work",
        title: "A clear process that still works for small teams with fast timelines",
        body:
          "Each phase keeps scope, feedback, and delivery visible, which makes the work easier to review and easier to launch well.",
      },
      contact: {
        ariaLabel: "Start a project",
        eyebrow: "Start a Project",
        title: "Ready to turn a simple promo site into a stronger business asset?",
        body:
          "Whether you run a clinic, a law office, or a brokerage, we can begin with your goals, the right case-study direction, and a realistic launch pace.",
      },
    },
    capabilities: [
      {
        title: "Industry Information Design",
        body:
          "We organize services, process, credentials, and common concerns in the order that best supports real inquiry decisions.",
      },
      {
        title: "Brand Presentation",
        body:
          "We use photography tone, page rhythm, and visual hierarchy to build trust instead of relying on decorative styling alone.",
      },
      {
        title: "Launch Support",
        body:
          "We account for mobile experience, baseline SEO, and maintainability so the finished site is usable beyond the first handoff.",
      },
    ],
    process: [
      {
        title: "Project Discovery",
        body:
          "We define business goals, target audience, and the most important problems the new site needs to solve first.",
      },
      {
        title: "Direction Alignment",
        body:
          "We align page structure, visual references, and content priorities before building the main experience.",
      },
      {
        title: "Design and Build",
        body:
          "We implement the pages, adapt them for mobile, and refine imagery and interaction details as one system.",
      },
      {
        title: "Launch and Handoff",
        body:
          "We coordinate deployment and handoff notes so the site can keep evolving after the first release.",
      },
    ],
    contact: {
      items: [
        { label: "Email", value: "hello@lineastudio.cn" },
        { label: "Typical Timeline", value: "Usually 2-4 weeks for the first release" },
        { label: "Best Fit", value: "Dental, legal, real-estate, and other service brands" },
        { label: "Working Style", value: "WeChat, video calls, or focused review sessions" },
      ],
      primaryCta: "Send Project Details",
    },
    homeCases: [
      {
        id: "dental",
        image: "/images/portfolio/case-dental.jpg",
        alt: "Dental website case-study preview",
        summary:
          "Designed around reassurance, treatment clarity, and a smoother appointment path for local patients.",
      },
      {
        id: "law",
        image: "/images/portfolio/case-law.jpg",
        alt: "Law-firm website case-study preview",
        summary:
          "Built to communicate credibility, expertise boundaries, and consultation intent without sounding promotional.",
      },
      {
        id: "realEstate",
        image: "/images/portfolio/case-real-estate.jpg",
        alt: "Real-estate website case-study preview",
        summary:
          "Combines premium listing presentation, local trust signals, and a clearer path to viewing inquiries.",
      },
    ],
  },
} as const satisfies Record<AppLocale, unknown>;

export function getPortfolioContent(locale: AppLocale) {
  const content = portfolioDictionaries[locale];
  const caseCatalog = getCaseCatalog(locale);

  return {
    ...content,
    caseCatalog,
    homeCases: content.homeCases.map((item) => ({
      ...item,
      href: caseCatalog[item.id].href,
      industry: caseCatalog[item.id].industry,
      brand: caseCatalog[item.id].brand,
    })),
  };
}
