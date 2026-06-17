import { notFound } from "next/navigation";
import { PortfolioHome } from "@/content/portfolio-home";
import { getPortfolioContent } from "@/content/portfolio";
import { isSupportedLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const content = getPortfolioContent(lang);

  return buildMetadata({
    locale: lang,
    title: content.meta.title,
    description: content.meta.description,
    path: "/",
  });
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return <PortfolioHome locale={lang} />;
}
