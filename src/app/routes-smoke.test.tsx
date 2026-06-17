import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { caseCatalog, portfolioReturnLabel } from "@/content/cases";
import DentalPage from "./dental/page";
import LawPage from "./law/page";
import HomePage from "./page";
import RealEstatePage from "./real-estate/page";

describe("portfolio homepage", () => {
  it("shows the studio brand and full-card links to the three case-study routes", () => {
    render(<HomePage />);

    expect(screen.getAllByRole("link", { name: /Linea Studio/i })[0]).toHaveAttribute(
      "href",
      "/",
    );

    const caseStudies = screen.getByRole("region", { name: /首页案例/i });

    expect(
      within(caseStudies).getByRole("link", { name: new RegExp(caseCatalog.dental.brand) }),
    ).toHaveAttribute("href", caseCatalog.dental.href);
    expect(
      within(caseStudies).getByRole("link", { name: new RegExp(caseCatalog.law.brand) }),
    ).toHaveAttribute("href", caseCatalog.law.href);
    expect(
      within(caseStudies).getByRole("link", { name: new RegExp(caseCatalog.realEstate.brand) }),
    ).toHaveAttribute("href", caseCatalog.realEstate.href);
  });
});

describe("dental case route", () => {
  it("renders the dental brand and a reusable portfolio return path", () => {
    render(<DentalPage />);

    expect(screen.getByText(caseCatalog.dental.brand, { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: portfolioReturnLabel })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders the migrated dental homepage structure and summary", () => {
    render(<DentalPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Dental care that feels calm, clear, and modern/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Dental services/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Preventive checkups" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "A transparent visit flow" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Book a consultation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Case study summary/i }),
    ).toBeInTheDocument();
  });

  it("offers links to the other case studies near the bottom", () => {
    render(<DentalPage />);

    const moreCases = screen.getByRole("region", { name: /More case studies/i });

    expect(
      within(moreCases).getByRole("link", { name: new RegExp(caseCatalog.law.brand) }),
    ).toHaveAttribute("href", caseCatalog.law.href);
    expect(
      within(moreCases).getByRole("link", { name: new RegExp(caseCatalog.realEstate.brand) }),
    ).toHaveAttribute("href", caseCatalog.realEstate.href);
  });
});

describe("secondary case-study routes", () => {
  it("renders the law-firm case page", () => {
    render(<LawPage />);

    expect(screen.getByText(caseCatalog.law.brand, { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Practice areas built for fast qualification/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Legal services/i }),
    ).toBeInTheDocument();
  });

  it("renders the real-estate case page", () => {
    render(<RealEstatePage />);

    expect(screen.getByText(caseCatalog.realEstate.brand, { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Featured homes with enough context to compare/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Featured listings/i }),
    ).toBeInTheDocument();
  });
});
