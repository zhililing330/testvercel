export const caseCatalog = {
  dental: {
    href: "/dental",
    industry: "牙医诊所",
    brand: "晴禾齿科",
  },
  law: {
    href: "/law",
    industry: "律师事务所",
    brand: "衡正律师事务所",
  },
  realEstate: {
    href: "/real-estate",
    industry: "房产经纪",
    brand: "珑域地产",
  },
} as const;

export const caseBrands = {
  dental: caseCatalog.dental.brand,
  law: caseCatalog.law.brand,
  realEstate: caseCatalog.realEstate.brand,
} as const;

export const portfolioReturnLabel = "返回作品集";

export const dentalCaseMeta = {
  title: "Sunny Dental case study",
  description:
    "A focused migration of the Sunny Dental homepage into the portfolio case-study system.",
} as const;

export const dentalCaseSections = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const dentalCaseSummary = {
  eyebrow: "Case summary",
  title:
    "A calm dental homepage became a reusable portfolio case study without losing the original experience.",
  description:
    "The route keeps the original clinic story, imagery, service cards, visit process, and appointment form while moving the page into a shared case-study shell.",
  bullets: [
    "Preserves the dental homepage flow: hero, services, process, contact, and conversion form.",
    "Introduces CaseShell as a reusable case wrapper with a clear return link to the portfolio homepage.",
    "Uses CaseSummary near the bottom so future case routes can close with consistent project context.",
  ],
} as const;
