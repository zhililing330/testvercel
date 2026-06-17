import type { Metadata } from "next";

const SITE_URL = "https://ai1234567.xyz";
const SITE_NAME = "Linea Studio";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "website",
      locale: "zh_CN",
    },
  };
}
