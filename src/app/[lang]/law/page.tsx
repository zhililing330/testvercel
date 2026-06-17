import { notFound } from "next/navigation";
import { LawCasePage } from "@/components/cases/law-case-page";
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

  const meta = getCaseMeta(lang, "law");

  return buildMetadata({
    locale: lang,
    title: meta.title,
    description: meta.description,
    path: "/law",
  });
}

export default async function LocalizedLawPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return <LawCasePage locale={lang} />;
}
