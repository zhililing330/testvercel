import { AppLocale } from "@/i18n/config";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { CaseStudyGrid } from "@/components/portfolio/case-study-grid";
import { ContactSection } from "@/components/portfolio/contact-section";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { ProcessSection } from "@/components/portfolio/process-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";

export function PortfolioHome({ locale }: { locale: AppLocale }) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="portfolio-home min-h-screen bg-[var(--portfolio-bg)] pb-8 text-[var(--portfolio-ink)]">
        <PortfolioHero locale={locale} />
        <CaseStudyGrid locale={locale} />
        <CapabilitiesSection locale={locale} />
        <ProcessSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
