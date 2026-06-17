import { isValidElement } from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";
import { caseCatalog } from "@/content/cases";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

describe("portfolio shell", () => {
  it("renders route-safe header links for portfolio sections", () => {
    render(<SiteHeader />);

    expect(screen.getByText("Linea Studio")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "案例" })).toHaveAttribute(
      "href",
      "/#cases",
    );
    expect(screen.getByRole("link", { name: "能力" })).toHaveAttribute(
      "href",
      "/#capabilities",
    );
    expect(screen.getByRole("link", { name: "流程" })).toHaveAttribute(
      "href",
      "/#process",
    );
    expect(screen.getByRole("link", { name: "联系" })).toHaveAttribute(
      "href",
      "/#contact",
    );
    expect(screen.getByRole("link", { name: "咨询合作" })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });

  it("renders footer links to the three case-study routes", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: caseCatalog.dental.brand })).toHaveAttribute(
      "href",
      "/dental",
    );
    expect(screen.getByRole("link", { name: caseCatalog.law.brand })).toHaveAttribute(
      "href",
      "/law",
    );
    expect(
      screen.getByRole("link", { name: caseCatalog.realEstate.brand }),
    ).toHaveAttribute("href", "/real-estate");
  });

  it("keeps the root layout focused on document shell only", () => {
    const layout = RootLayout({
      children: <div>Page body</div>,
    });

    expect(isValidElement(layout)).toBe(true);
    expect(layout.type).toBe("html");
    expect(layout.props.lang).toBe("zh-CN");

    const body = layout.props.children;
    expect(isValidElement(body)).toBe(true);
    expect(body.type).toBe("body");
    expect(body.props.children).toEqual(<div>Page body</div>);
  });
});
