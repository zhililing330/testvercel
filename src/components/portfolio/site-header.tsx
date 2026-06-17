import Link from "next/link";

const sectionLinks = [
  { href: "/#cases", label: "案例" },
  { href: "/#capabilities", label: "能力" },
  { href: "/#process", label: "流程" },
  { href: "/#contact", label: "联系" },
] as const;

export function SiteHeader() {
  return (
    <header className="portfolio-header" aria-label="Site header">
      <div className="portfolio-header__inner">
        <Link className="portfolio-brand" href="/">
          Linea Studio
        </Link>
        <nav aria-label="Primary" className="portfolio-nav">
          {sectionLinks.map((link) => (
            <Link key={link.href} className="portfolio-nav__link" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="portfolio-cta" href="/#contact">
          咨询合作
        </Link>
      </div>
    </header>
  );
}
