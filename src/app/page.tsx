import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { CaseStudyGrid } from "@/components/portfolio/case-study-grid";
import { ContactSection } from "@/components/portfolio/contact-section";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { ProcessSection } from "@/components/portfolio/process-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "行业网站作品集",
  description: "牙医、律师事务所、房产经纪三类服务行业官网案例作品集。",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="portfolio-home">
        <PortfolioHero />
        <CaseStudyGrid />
        <CapabilitiesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
