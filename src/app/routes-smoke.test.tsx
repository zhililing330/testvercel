import { render, screen, within } from "@testing-library/react";
import HomePage from "./page";

describe("portfolio homepage", () => {
  it("shows the studio headline and links to the three case-study routes", async () => {
    render(await HomePage());

    expect(screen.getByText(/服务型行业/i)).toBeInTheDocument();

    const caseStudies = screen.getByRole("region", { name: /首页案例/i });

    expect(
      within(caseStudies).getByRole("link", { name: /晴禾齿科/i }),
    ).toHaveAttribute(
      "href",
      "/dental",
    );
    expect(
      within(caseStudies).getByRole("link", { name: /衡正律师事务所/i }),
    ).toHaveAttribute("href", "/law");
    expect(
      within(caseStudies).getByRole("link", { name: /珑域地产/i }),
    ).toHaveAttribute("href", "/real-estate");
  });

  it("does not render an eyebrow line above the portfolio hero title", async () => {
    render(await HomePage());

    const hero = screen.getByRole("region", { name: /作品集首页首屏/i });
    expect(within(hero).queryByText("Linea Studio")).not.toBeInTheDocument();
  });
});
