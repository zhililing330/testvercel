import Link from "next/link";
import { AppLocale, getLocaleSwitcherCopy, LOCALE_PREFIXES, switchLocalePath } from "@/i18n/config";

type LocaleSwitcherProps = {
  currentPath: string;
  locale: AppLocale;
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
};

export function LocaleSwitcher({
  currentPath,
  locale,
  className,
  linkClassName,
  activeLinkClassName,
}: LocaleSwitcherProps) {
  const copy = getLocaleSwitcherCopy(locale);

  return (
    <nav aria-label={copy.switcherAriaLabel} className={className}>
      {LOCALE_PREFIXES.map((targetLocale) => {
        const isActive = targetLocale === locale;
        const classes = [linkClassName, isActive ? activeLinkClassName : null]
          .filter(Boolean)
          .join(" ");

        return (
          <Link
            key={targetLocale}
            aria-current={isActive ? "page" : undefined}
            className={classes}
            href={switchLocalePath(currentPath, targetLocale)}
          >
            {copy.labels[targetLocale]}
          </Link>
        );
      })}
    </nav>
  );
}
