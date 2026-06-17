import { render, screen, within } from "@testing-library/react";
import HomePage from "./page";

describe("portfolio homepage", () => {
  it("shows the studio headline and full-card links to the three case-study routes", async () => {
    render(await HomePage());

    expect(screen.getByText(/服务型行业/i)).toBeInTheDocument();

    const caseStudies = screen.getByRole("region", { name: /首页案例/i });

    expect(
      within(caseStudies).getByRole("link", { name: /牙医诊所[\s\S]*晴禾齿科/i }),
    ).toHaveAttribute(
      "href",
      "/dental",
    );
    expect(
      within(caseStudies).getByRole("link", {
        name: /律师事务所[\s\S]*衡正律师事务所/i,
      }),
    ).toHaveAttribute("href", "/law");
    expect(
      within(caseStudies).getByRole("link", {
        name: /房产经纪[\s\S]*珑域地产/i,
      }),
    ).toHaveAttribute("href", "/real-estate");
  });

  it("renders the hero CTAs and the core homepage sections", async () => {
    render(await HomePage());

    const hero = screen.getByRole("region", { name: /作品集首页首屏/i });
    expect(
      within(hero).getByRole("link", { name: /查看案例/i }),
    ).toHaveAttribute("href", "#cases");
    expect(
      within(hero).getByRole("link", { name: /咨询合作/i }),
    ).toHaveAttribute("href", "#contact");

    expect(screen.getByRole("region", { name: /首页案例/i })).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /联系合作/i }),
    ).toBeInTheDocument();
  });
});
