import { describe, expect, it } from "vitest";
import { getCaseCatalog } from "./cases";
import { getPortfolioContent } from "./portfolio";

describe("portfolio content contracts", () => {
  it("defines the portfolio brand and exactly three localized case-study routes in chinese", () => {
    const content = getPortfolioContent("zh");

    expect(content.homeCases.map((item) => item.href)).toEqual([
      "/zh/dental",
      "/zh/law",
      "/zh/real-estate",
    ]);
  });

  it("keeps the homepage process to four steps in both locales", () => {
    expect(getPortfolioContent("zh").process).toHaveLength(4);
    expect(getPortfolioContent("en").process).toHaveLength(4);
  });

  it("derives homepage case studies from the localized shared case catalog", () => {
    const zhCatalog = getCaseCatalog("zh");
    const enCatalog = getCaseCatalog("en");

    expect(getPortfolioContent("zh").homeCases.map(({ href, industry, brand }) => ({
      href,
      industry,
      brand,
    }))).toEqual([
      zhCatalog.dental,
      zhCatalog.law,
      zhCatalog.realEstate,
    ]);

    expect(getPortfolioContent("en").homeCases.map(({ href, industry, brand }) => ({
      href,
      industry,
      brand,
    }))).toEqual([
      enCatalog.dental,
      enCatalog.law,
      enCatalog.realEstate,
    ]);
  });
});
