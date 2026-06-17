import { describe, expect, it } from "vitest";
import { caseCatalog } from "./cases";
import {
  caseStudies,
  portfolioBrand,
  portfolioCases,
  processSteps,
} from "./portfolio";

describe("portfolio content contracts", () => {
  it("defines the portfolio brand and exactly three case-study routes", () => {
    expect(portfolioBrand.name).toBe("Linea Studio");
    expect(caseStudies.map((item) => item.href)).toEqual([
      "/dental",
      "/law",
      "/real-estate",
    ]);
  });

  it("keeps the small-studio process to four steps", () => {
    expect(processSteps).toHaveLength(4);
  });

  it("derives homepage case studies from the shared case catalog", () => {
    expect(caseStudies).toEqual([
      {
        href: "/dental",
        industry: caseCatalog.dental.industry,
        brand: caseCatalog.dental.brand,
      },
      {
        href: "/law",
        industry: caseCatalog.law.industry,
        brand: caseCatalog.law.brand,
      },
      {
        href: "/real-estate",
        industry: caseCatalog.realEstate.industry,
        brand: caseCatalog.realEstate.brand,
      },
    ]);
  });

  it("derives the lightweight case-study list from the homepage case source", () => {
    expect(caseStudies).toEqual(
      portfolioCases.map(({ href, industry, brand }) => ({
        href,
        industry,
        brand,
      })),
    );
  });
});
