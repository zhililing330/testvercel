import type { Metadata } from "next";
import { AppLocale, LOCALE_PREFIXES, OPEN_GRAPH_LOCALE, localizePath } from "@/i18n/config";

const SITE_URL = "https://ai1234567.xyz";
const SITE_NAME = "Linea Studio";

export function buildMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: AppLocale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalPath = localizePath(locale, path);
  const languages = Object.fromEntries(
    LOCALE_PREFIXES.map((item) => [item, localizePath(item, path)]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: SITE_NAME,
      type: "website",
      locale: OPEN_GRAPH_LOCALE[locale],
    },
  };
}
