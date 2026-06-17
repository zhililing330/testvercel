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

describe("localized portfolio homepage", () => {
  it("renders a fully chinese homepage at /zh without english CTA copy leaking in", async () => {
    render(await ZhHomePage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getAllByRole("link", { name: /Linea Studio/i })[0]).toHaveAttribute(
      "href",
      "/zh",
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "为服务型行业打造兼具审美与转化的品牌官网",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "咨询合作" })[0]).toHaveAttribute(
      "href",
      "/zh#contact",
    );

    const caseStudies = screen.getByRole("region", { name: "首页案例" });
    expect(within(caseStudies).getByRole("link", { name: /晴禾齿科/i })).toHaveAttribute(
      "href",
      "/zh/dental",
    );
    expect(screen.queryByText("Start a Project")).not.toBeInTheDocument();
  });

  it("renders a fully english homepage at /en without chinese navigation leaking in", async () => {
    render(await EnHomePage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getAllByRole("link", { name: /Linea Studio/i })[0]).toHaveAttribute(
      "href",
      "/en",
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Portfolio websites for service businesses that need trust and conversion.",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Start a Project" })[0]).toHaveAttribute(
      "href",
      "/en#contact",
    );

    const caseStudies = screen.getByRole("region", { name: "Featured case studies" });
    expect(within(caseStudies).getByRole("link", { name: /Sunny Dental/i })).toHaveAttribute(
      "href",
      "/en/dental",
    );
    expect(screen.queryByText("咨询合作")).not.toBeInTheDocument();
  });
});

describe("localized dental case route", () => {
  it("renders a chinese dental page without english section labels", async () => {
    render(await ZhDentalPage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getByText("晴禾齿科", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "返回作品集" })).toHaveAttribute("href", "/zh");
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "让看牙体验更安心、更清晰、更现代。",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "牙科服务" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "案例总结" })).toBeInTheDocument();
    expect(screen.queryByText("More case studies")).not.toBeInTheDocument();
  });

  it("renders an english dental page without chinese return-label leakage", async () => {
    render(await EnDentalPage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getByText("Sunny Dental", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to portfolio" })).toHaveAttribute(
      "href",
      "/en",
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Dental care that feels calm, clear, and modern.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Dental services" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "More case studies" })).toBeInTheDocument();
    expect(screen.queryByText("返回作品集")).not.toBeInTheDocument();
  });
});

describe("localized secondary case routes", () => {
  it("renders a chinese law page without english service labels leaking in", async () => {
    render(await ZhLawPage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getByText("衡正律师事务所", { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "为高风险商业与个人事务提供稳健法律顾问支持。",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "法律服务" })).toBeInTheDocument();
    expect(screen.queryByText("Legal services")).not.toBeInTheDocument();
  });

  it("renders an english law page without chinese return copy leaking in", async () => {
    render(await EnLawPage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getByText("Hengzheng Law Office", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Legal services" })).toBeInTheDocument();
    expect(screen.queryByText("返回作品集")).not.toBeInTheDocument();
  });

  it("renders a chinese real-estate page without english listings labels leaking in", async () => {
    render(await ZhRealEstatePage({ params: Promise.resolve({ lang: "zh" }) }));

    expect(screen.getByText("珑域地产", { selector: "p" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "用更清晰的方式展示城市住宅与看房路径。",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "精选房源" })).toBeInTheDocument();
    expect(screen.queryByText("Featured listings")).not.toBeInTheDocument();
  });

  it("renders an english real-estate page without chinese brokerage labels leaking in", async () => {
    render(await EnRealEstatePage({ params: Promise.resolve({ lang: "en" }) }));

    expect(screen.getByText("Lanyu Realty", { selector: "p" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Featured listings" })).toBeInTheDocument();
    expect(screen.queryByText("经纪支持")).not.toBeInTheDocument();
  });
});
