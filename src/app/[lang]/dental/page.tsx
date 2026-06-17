import { notFound } from "next/navigation";
import { DentalCasePage } from "@/components/cases/dental-case-page";
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

  const meta = getCaseMeta(lang, "dental");

  return buildMetadata({
    locale: lang,
    title: meta.title,
    description: meta.description,
    path: "/dental",
  });
}

export default async function LocalizedDentalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return <DentalCasePage locale={lang} />;
}
