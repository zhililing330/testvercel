import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { LOCALE_PREFIXES, isSupportedLocale } from "@/i18n/config";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai1234567.xyz"),
  title: {
    default: "Linea Studio",
    template: "%s | Linea Studio",
  },
  description: "Bilingual portfolio websites for service businesses.",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://ai1234567.xyz",
    siteName: "Linea Studio",
    title: "Linea Studio",
    description: "Bilingual portfolio websites for service businesses.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1726",
};

export function generateStaticParams() {
  return LOCALE_PREFIXES.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
