import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
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
      within(caseStudies).getByRole("link", { name: /晴禾齿科/i }),
    ).toHaveAttribute("href", "/dental");
    expect(
      within(caseStudies).getByRole("link", { name: /衡正律师事务所/i }),
    ).toHaveAttribute("href", "/law");
    expect(
      within(caseStudies).getByRole("link", { name: /珑域地产/i }),
    ).toHaveAttribute("href", "/real-estate");
  });
});

describe("dental case route", () => {
  it("renders the dental brand and a reusable portfolio return path", () => {
    render(<DentalPage />);

    expect(screen.getByText("晴禾齿科", { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /返回作品集/i }),
    ).toHaveAttribute("href", "/");
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
});

describe("secondary case-study routes", () => {
  it("renders the law-firm case page", () => {
    render(<LawPage />);

    expect(screen.getByText("衡正律师事务所", { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Practice areas built for fast qualification/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /Legal services/i }),
    ).toBeInTheDocument();
  });

  it("renders the real-estate case page", () => {
    render(<RealEstatePage />);

    expect(screen.getByText("珑域地产", { selector: "p" })).toBeInTheDocument();
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
