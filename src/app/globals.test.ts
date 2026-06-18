import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("global portfolio styles", () => {
  it("keeps the active locale switcher text white inside the site header", () => {
    const css = readFileSync(join(process.cwd(), "src", "app", "globals.css"), "utf8");

    expect(css).toContain(".portfolio-header .portfolio-locale-switcher__link--active");
    expect(css).toContain("color: #ffffff;");
  });

  it("keeps the header CTA text white inside the site header", () => {
    const css = readFileSync(join(process.cwd(), "src", "app", "globals.css"), "utf8");

    expect(css).toContain(".portfolio-header .portfolio-cta");
    expect(css).toContain("color: #ffffff;");
  });
});
