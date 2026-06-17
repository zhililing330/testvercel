export const LOCALE_PREFIXES = ["zh", "en"] as const;

export type AppLocale = (typeof LOCALE_PREFIXES)[number];

export const DEFAULT_LOCALE: AppLocale = "zh";

export const OPEN_GRAPH_LOCALE = {
  zh: "zh_CN",
  en: "en_US",
} as const satisfies Record<AppLocale, string>;

export function isSupportedLocale(value: string): value is AppLocale {
  return (LOCALE_PREFIXES as readonly string[]).includes(value);
}

export function localizePath(locale: AppLocale, path: string): string {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}
