import Link from "next/link";
import { getCaseCatalog } from "@/content/cases";
import { getPortfolioContent } from "@/content/portfolio";
import { AppLocale, localizePath } from "@/i18n/config";

export function SiteFooter({ locale }: { locale: AppLocale }) {
  const caseCatalog = getCaseCatalog(locale);
  const content = getPortfolioContent(locale);
  const caseStudyLinks = Object.values(caseCatalog).map(({ href, brand }) => ({
    href,
    label: brand,
  }));

  return (
    <footer className="portfolio-footer" aria-label={content.footer.ariaLabel}>
      <div className="portfolio-footer__inner">
        <div>
          <Link className="portfolio-brand" href={localizePath(locale, "/")}>
            Linea Studio
          </Link>
        </div>
        <nav aria-label={content.footer.navAriaLabel} className="portfolio-footer__nav">
          {caseStudyLinks.map((link) => (
            <Link key={link.href} className="portfolio-footer__link" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
