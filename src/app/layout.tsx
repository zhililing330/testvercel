import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qinghe-dental.example.com"),
  title: {
    default: "晴禾齿科 | 现代化牙医诊所",
    template: "%s | 晴禾齿科",
  },
  description:
    "晴禾齿科提供口腔检查、牙齿美白、隐形矫正、种植修复等现代化口腔诊疗服务，使用数字化设备与透明方案守护全家口腔健康。",
  keywords: [
    "牙医诊所",
    "晴禾齿科",
    "口腔检查",
    "牙齿美白",
    "隐形矫正",
    "种植修复",
    "上海牙科",
  ],
  authors: [{ name: "晴禾齿科" }],
  creator: "晴禾齿科",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://qinghe-dental.example.com",
    siteName: "晴禾齿科",
    title: "晴禾齿科 | 现代化牙医诊所",
    description:
      "从常规检查到隐形矫正，晴禾齿科以数字化设备、温和沟通和透明方案守护全家口腔健康。",
    images: [
      {
        url: "/images/clinic-hero.png",
        width: 1200,
        height: 630,
        alt: "晴禾齿科现代化数字牙科诊室",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
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
