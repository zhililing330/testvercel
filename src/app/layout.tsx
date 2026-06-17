import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai1234567.xyz"),
  title: {
    default: "Linea Studio | 行业网站作品集",
    template: "%s | Linea Studio",
  },
  description:
    "面向服务型行业的高品质官网作品集，包含牙医、律师事务所与房产经纪案例。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://ai1234567.xyz",
    siteName: "Linea Studio",
    title: "Linea Studio | 行业网站作品集",
    description:
      "面向服务型行业的高品质官网作品集，包含牙医、律师事务所与房产经纪案例。",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
