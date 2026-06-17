import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DentalPage from "./dental/page";
import HomePage from "./page";

describe("portfolio homepage", () => {
  it("shows the studio brand and full-card links to the three case-study routes", () => {
    render(<HomePage />);

    expect(screen.getAllByRole("link", { name: /Linea Studio/i })[0]).toHaveAttribute(
      "href",
      "/",
    );

    expect(
      screen.getByRole("link", { name: /Sunny Dental/i }),
    ).toHaveAttribute("href", "/dental");
    expect(
      screen.getByRole("link", { name: /Hengzheng Law Office/i }),
    ).toHaveAttribute("href", "/law");
    expect(
      screen.getByRole("link", { name: /Banyu Real Estate/i }),
    ).toHaveAttribute("href", "/real-estate");
  });
});

describe("dental case route", () => {
  it("renders the dental brand and a reusable portfolio return path", () => {
    render(<DentalPage />);

    expect(screen.getByText("Sunny Dental")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Back to portfolio/i }),
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
