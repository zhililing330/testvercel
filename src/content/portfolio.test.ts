import { describe, expect, it } from "vitest";
import { caseStudies, portfolioBrand, processSteps } from "./portfolio";

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
});
