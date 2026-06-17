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
