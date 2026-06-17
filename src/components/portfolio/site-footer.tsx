import Link from "next/link";

const caseStudyLinks = [
  { href: "/dental", label: "晴禾齿科" },
  { href: "/law", label: "衡正律师事务所" },
  { href: "/real-estate", label: "珑域地产" },
] as const;

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
