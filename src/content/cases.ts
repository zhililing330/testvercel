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

export const lawCaseMeta = {
  title: "Hengzheng Law Office case study",
  description:
    "A legal-services case page focused on credibility, practice-area clarity, and consultation intent.",
} as const;

export const lawCaseSections = [
  { href: "#overview", label: "Overview" },
  { href: "#practice", label: "Practice areas" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
] as const;

export const lawCaseSummary = {
  eyebrow: "Case summary",
  title:
    "This law-firm template balances authority, clarity, and a low-friction consultation path.",
  description:
    "The page is designed for legal teams that need to communicate trust quickly, explain where they are strongest, and guide qualified inquiries into a clear next step.",
  bullets: [
    "Introduces the firm with a restrained, confidence-building hero and concise positioning copy.",
    "Organizes services into clear practice-area groups that are easy to scan on desktop and mobile.",
    "Closes with a consultation section that feels professional instead of promotional.",
  ],
} as const;

export const realEstateCaseMeta = {
  title: "Banyu Real Estate case study",
  description:
    "A real-estate brokerage case page that combines premium listings, neighborhood trust, and viewing conversion.",
} as const;

export const realEstateCaseSections = [
  { href: "#overview", label: "Overview" },
  { href: "#listings", label: "Listings" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const realEstateCaseSummary = {
  eyebrow: "Case summary",
  title:
    "This brokerage template pairs premium presentation with a simpler path to schedule a viewing.",
  description:
    "The page brings together listing highlights, buyer guidance, and contact prompts so prospects can understand the offer quickly and move toward a property conversation.",
  bullets: [
    "Uses a visually led hero to present the brand as polished, local, and high-touch.",
    "Turns featured inventory into easy-to-compare cards without overwhelming the page.",
    "Ends with a viewing section that supports both high-intent inquiries and early-stage browsing.",
  ],
} as const;
