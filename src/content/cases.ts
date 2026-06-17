import { AppLocale, localizePath } from "@/i18n/config";

export type CaseKey = "dental" | "law" | "realEstate";

const caseSlugs = {
  dental: "/dental",
  law: "/law",
  realEstate: "/real-estate",
} as const satisfies Record<CaseKey, string>;

const localizedCatalog = {
  zh: {
    dental: { industry: "牙医诊所", brand: "晴禾齿科" },
    law: { industry: "律师事务所", brand: "衡正律师事务所" },
    realEstate: { industry: "房产经纪", brand: "珑域地产" },
  },
  en: {
    dental: { industry: "Dental Clinic", brand: "Sunny Dental" },
    law: { industry: "Law Firm", brand: "Hengzheng Law Office" },
    realEstate: { industry: "Real Estate", brand: "Lanyu Realty" },
  },
} as const satisfies Record<AppLocale, Record<CaseKey, { industry: string; brand: string }>>;

const sharedCaseCopy = {
  zh: {
    portfolioReturnLabel: "返回作品集",
    moreCasesRegionLabel: "更多案例",
    moreCasesEyebrow: "更多案例",
    moreCasesTitle: "同一套作品集系统，也可以平滑适配不同服务行业。",
    summaryRegionLabel: "案例总结",
  },
  en: {
    portfolioReturnLabel: "Back to portfolio",
    moreCasesRegionLabel: "More case studies",
    moreCasesEyebrow: "More case studies",
    moreCasesTitle: "See how the same portfolio system adapts to other service businesses.",
    summaryRegionLabel: "Case study summary",
  },
} as const;

const caseMeta = {
  zh: {
    dental: {
      title: "晴禾齿科案例",
      description: "现代牙医诊所官网案例，突出安心感、清晰说明与预约转化。",
    },
    law: {
      title: "衡正律师事务所案例",
      description: "律师事务所官网案例，突出专业可信、服务边界与咨询承接。",
    },
    realEstate: {
      title: "珑域地产案例",
      description: "房产经纪官网案例，突出房源展示、区域信任与高意向咨询。",
    },
  },
  en: {
    dental: {
      title: "Sunny Dental Case Study",
      description:
        "A modern dental-clinic website case study focused on trust, clarity, and appointment conversion.",
    },
    law: {
      title: "Hengzheng Law Office Case Study",
      description:
        "A law-firm website case study focused on credibility, service clarity, and consultation intent.",
    },
    realEstate: {
      title: "Lanyu Realty Case Study",
      description:
        "A real-estate website case study focused on listing presentation, local trust, and viewing inquiries.",
    },
  },
} as const;

export function getCaseCatalog(locale: AppLocale) {
  const catalog = localizedCatalog[locale];

  return {
    dental: {
      href: localizePath(locale, caseSlugs.dental),
      industry: catalog.dental.industry,
      brand: catalog.dental.brand,
    },
    law: {
      href: localizePath(locale, caseSlugs.law),
      industry: catalog.law.industry,
      brand: catalog.law.brand,
    },
    realEstate: {
      href: localizePath(locale, caseSlugs.realEstate),
      industry: catalog.realEstate.industry,
      brand: catalog.realEstate.brand,
    },
  } as const;
}

export function getCaseShellCopy(locale: AppLocale) {
  return sharedCaseCopy[locale];
}

export function getCaseMeta(locale: AppLocale, key: CaseKey) {
  return caseMeta[locale][key];
}
