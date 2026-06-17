import { render, screen } from "@testing-library/react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

describe("portfolio shell", () => {
  it("renders the studio brand and a contact CTA", () => {
    render(<SiteHeader />);
    expect(screen.getByText("Linea Studio")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /咨询合作|Start a Project/i }),
    ).toBeInTheDocument();
  });

  it("renders footer links to the three case-study routes", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("link", { name: /晴禾齿科/i })).toHaveAttribute(
      "href",
      "/dental",
    );
    expect(
      screen.getByRole("link", { name: /衡正律师事务所/i }),
    ).toHaveAttribute("href", "/law");
    expect(screen.getByRole("link", { name: /珑域地产/i })).toHaveAttribute(
      "href",
      "/real-estate",
    );
  });
});
