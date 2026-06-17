import Link from "next/link";
import { LocaleSwitcher } from "@/components/portfolio/locale-switcher";
import { getPortfolioContent } from "@/content/portfolio";
import { AppLocale, localizePath } from "@/i18n/config";

export function SiteHeader({
  locale,
  currentPath,
}: {
  locale: AppLocale;
  currentPath: string;
}) {
  const content = getPortfolioContent(locale);

  const sectionLinks = [
    { href: localizePath(locale, "/#cases"), label: content.header.caseStudies },
    { href: localizePath(locale, "/#capabilities"), label: content.header.capabilities },
    { href: localizePath(locale, "/#process"), label: content.header.process },
    { href: localizePath(locale, "/#contact"), label: content.header.contact },
  ] as const;

  return (
    <header className="portfolio-header" aria-label={content.header.ariaLabel}>
      <div className="portfolio-header__inner">
        <Link className="portfolio-brand" href={localizePath(locale, "/")}>
          Linea Studio
        </Link>
        <nav aria-label={content.header.navAriaLabel} className="portfolio-nav">
          {sectionLinks.map((link) => (
            <Link key={link.href} className="portfolio-nav__link" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="portfolio-header__actions">
          <LocaleSwitcher
            locale={locale}
            currentPath={currentPath}
            className="portfolio-locale-switcher"
            linkClassName="portfolio-locale-switcher__link"
            activeLinkClassName="portfolio-locale-switcher__link--active"
          />
          <Link className="portfolio-cta" href={localizePath(locale, "/#contact")}>
            {content.header.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
