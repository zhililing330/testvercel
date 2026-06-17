export const LOCALE_PREFIXES = ["zh", "en"] as const;

export type AppLocale = (typeof LOCALE_PREFIXES)[number];

export const DEFAULT_LOCALE: AppLocale = "zh";

export const OPEN_GRAPH_LOCALE = {
  zh: "zh_CN",
  en: "en_US",
} as const satisfies Record<AppLocale, string>;

const localeUiCopy = {
  zh: {
    switcherAriaLabel: "语言切换",
    labels: {
      zh: "中文",
      en: "英文",
    },
  },
  en: {
    switcherAriaLabel: "Language switcher",
    labels: {
      zh: "Chinese",
      en: "English",
    },
  },
} as const satisfies Record<
  AppLocale,
  {
    switcherAriaLabel: string;
    labels: Record<AppLocale, string>;
  }
>;

export function isSupportedLocale(value: string): value is AppLocale {
  return (LOCALE_PREFIXES as readonly string[]).includes(value);
}

export function localizePath(locale: AppLocale, path: string): string {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function switchLocalePath(currentPath: string, targetLocale: AppLocale): string {
  const localePrefixPattern = /^\/(zh|en)(?=[/?#]|$)/;
  const pathWithoutLocale = currentPath.replace(localePrefixPattern, "") || "/";
  const normalizedPath = pathWithoutLocale.startsWith("/") ? pathWithoutLocale : `/${pathWithoutLocale}`;

  return localizePath(targetLocale, normalizedPath);
}

export function getLocaleSwitcherCopy(locale: AppLocale) {
  return localeUiCopy[locale];
}
