import type { Metadata, Viewport } from "next";
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

export default function LegacyRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
