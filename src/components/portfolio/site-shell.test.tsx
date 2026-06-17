import { isValidElement } from "react";
import { render, screen } from "@testing-library/react";
import LocaleLayout from "@/app/[lang]/layout";
import { getCaseCatalog } from "@/content/cases";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

describe("portfolio shell", () => {
  it("renders chinese header links with locale-safe section anchors", () => {
    render(<SiteHeader locale="zh" />);

    expect(screen.getByText("Linea Studio")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "案例" })).toHaveAttribute("href", "/zh#cases");
    expect(screen.getByRole("link", { name: "能力" })).toHaveAttribute(
      "href",
      "/zh#capabilities",
    );
    expect(screen.getByRole("link", { name: "流程" })).toHaveAttribute("href", "/zh#process");
    expect(screen.getByRole("link", { name: "联系" })).toHaveAttribute("href", "/zh#contact");
    expect(screen.getByRole("link", { name: "咨询合作" })).toHaveAttribute(
      "href",
      "/zh#contact",
    );
  });

  it("renders english footer links to localized case-study routes", () => {
    const caseCatalog = getCaseCatalog("en");
    render(<SiteFooter locale="en" />);

    expect(screen.getByRole("link", { name: caseCatalog.dental.brand })).toHaveAttribute(
      "href",
      caseCatalog.dental.href,
    );
    expect(screen.getByRole("link", { name: caseCatalog.law.brand })).toHaveAttribute(
      "href",
      caseCatalog.law.href,
    );
    expect(screen.getByRole("link", { name: caseCatalog.realEstate.brand })).toHaveAttribute(
      "href",
      caseCatalog.realEstate.href,
    );
  });

  it("renders the locale root layout with the requested html lang", async () => {
    const layout = await LocaleLayout({
      children: <div>Page body</div>,
      params: Promise.resolve({ lang: "zh" }),
    });

    expect(isValidElement(layout)).toBe(true);
    expect(layout.type).toBe("html");
    expect(layout.props.lang).toBe("zh");

    const body = layout.props.children;
    expect(isValidElement(body)).toBe(true);
    expect(body.type).toBe("body");
    expect(body.props.children).toEqual(<div>Page body</div>);
  });
});
