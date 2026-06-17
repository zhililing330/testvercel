import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EnDentalPage from "./[lang]/dental/page";
import EnLawPage from "./[lang]/law/page";
import EnRealEstatePage from "./[lang]/real-estate/page";
import ZhDentalPage from "./[lang]/dental/page";
import EnHomePage from "./[lang]/page";
import ZhLawPage from "./[lang]/law/page";
import ZhRealEstatePage from "./[lang]/real-estate/page";
import ZhHomePage from "./[lang]/page";
import { getCaseCatalog, getCaseShellCopy } from "@/content/cases";
import { getPortfolioContent } from "@/content/portfolio";

describe("localized portfolio homepage", () => {
  it("renders a fully chinese homepage at /zh without english CTA copy leaking in", async () => {
    const content = getPortfolioContent("zh");
    const caseCatalog = getCaseCatalog("zh");

    render(await ZhHomePage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getAllByRole("link", { name: /Linea Studio/i })[0]).toHaveAttribute(
      "href",
      "/zh",
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: content.hero.title,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: content.header.cta })[0]).toHaveAttribute(
      "href",
      "/zh#contact",
    );

    const caseStudies = screen.getByRole("region", { name: content.sections.cases.ariaLabel });
    expect(
      within(caseStudies).getByRole("link", { name: new RegExp(caseCatalog.dental.brand) }),
    ).toHaveAttribute("href", caseCatalog.dental.href);
    expect(screen.getByRole("link", { name: "英文" })).toHaveAttribute("href", "/en");
    expect(screen.queryByText("Start a Project")).not.toBeInTheDocument();
  });

  it("renders a fully english homepage at /en without chinese navigation leaking in", async () => {
    const content = getPortfolioContent("en");
    const caseCatalog = getCaseCatalog("en");

    render(await EnHomePage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getAllByRole("link", { name: /Linea Studio/i })[0]).toHaveAttribute(
      "href",
      "/en",
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: content.hero.title,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: content.header.cta })[0]).toHaveAttribute(
      "href",
      "/en#contact",
    );

    const caseStudies = screen.getByRole("region", { name: content.sections.cases.ariaLabel });
    expect(
      within(caseStudies).getByRole("link", { name: new RegExp(caseCatalog.dental.brand) }),
    ).toHaveAttribute("href", caseCatalog.dental.href);
    expect(screen.getByRole("link", { name: "Chinese" })).toHaveAttribute("href", "/zh");
    expect(screen.queryByText("咨询合作")).not.toBeInTheDocument();
  });
});

describe("localized dental case route", () => {
  it("renders a chinese dental page without english section labels", async () => {
    const caseCatalog = getCaseCatalog("zh");
    const shellCopy = getCaseShellCopy("zh");

    render(await ZhDentalPage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getByText(caseCatalog.dental.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: shellCopy.portfolioReturnLabel })).toHaveAttribute(
      "href",
      "/zh",
    );
    expect(screen.getByRole("region", { name: shellCopy.summaryRegionLabel })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "英文" })).toHaveAttribute("href", "/en/dental");
    expect(screen.queryByText("More case studies")).not.toBeInTheDocument();
  });

  it("renders an english dental page without chinese return-label leakage", async () => {
    const caseCatalog = getCaseCatalog("en");
    const shellCopy = getCaseShellCopy("en");

    render(await EnDentalPage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getByText(caseCatalog.dental.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: shellCopy.portfolioReturnLabel })).toHaveAttribute(
      "href",
      "/en",
    );
    expect(screen.getByRole("region", { name: "Dental services" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: shellCopy.moreCasesRegionLabel })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Chinese" })).toHaveAttribute("href", "/zh/dental");
    expect(screen.queryByText("返回作品集")).not.toBeInTheDocument();
  });
});

describe("localized secondary case routes", () => {
  it("renders a chinese law page without english service labels leaking in", async () => {
    const caseCatalog = getCaseCatalog("zh");

    render(await ZhLawPage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getByText(caseCatalog.law.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.queryByText("Legal services")).not.toBeInTheDocument();
  });

  it("renders an english law page without chinese return copy leaking in", async () => {
    const caseCatalog = getCaseCatalog("en");

    render(await EnLawPage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getByText(caseCatalog.law.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Legal services" })).toBeInTheDocument();
    expect(screen.queryByText("返回作品集")).not.toBeInTheDocument();
  });

  it("renders a chinese real-estate page without english listings labels leaking in", async () => {
    const caseCatalog = getCaseCatalog("zh");

    render(await ZhRealEstatePage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getByText(caseCatalog.realEstate.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.queryByText("Featured listings")).not.toBeInTheDocument();
  });

  it("renders an english real-estate page without chinese brokerage labels leaking in", async () => {
    const caseCatalog = getCaseCatalog("en");

    render(await EnRealEstatePage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getByText(caseCatalog.realEstate.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Featured listings" })).toBeInTheDocument();
    expect(screen.queryByText("经纪支持")).not.toBeInTheDocument();
  });
});
