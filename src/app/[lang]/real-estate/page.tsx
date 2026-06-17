import { notFound } from "next/navigation";
import { RealEstateCasePage } from "@/components/cases/real-estate-case-page";
import { getCaseMeta } from "@/content/cases";
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

  const meta = getCaseMeta(lang, "realEstate");

  return buildMetadata({
    locale: lang,
    title: meta.title,
    description: meta.description,
    path: "/real-estate",
  });
}

export default async function LocalizedRealEstatePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return <RealEstateCasePage locale={lang} />;
}
