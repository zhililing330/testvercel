import Link from "next/link";
import { caseCatalog } from "@/content/cases";

const caseStudyLinks = Object.values(caseCatalog).map(({ href, brand }) => ({
  href,
  label: brand,
})) as readonly { href: string; label: string }[];

export function SiteFooter() {
  return (
    <footer className="portfolio-footer" aria-label="Site footer">
      <div className="portfolio-footer__inner">
        <div>
          <Link className="portfolio-brand" href="/">
            Linea Studio
          </Link>
        </div>
        <nav aria-label="Case studies" className="portfolio-footer__nav">
          {caseStudyLinks.map((link) => (
            <Link
              key={link.href}
              className="portfolio-footer__link"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
