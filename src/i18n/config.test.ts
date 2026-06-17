import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  LOCALE_PREFIXES,
  getLocaleSwitcherCopy,
  isSupportedLocale,
  localizePath,
  switchLocalePath,
} from "./config";

describe("locale config", () => {
  it("supports exactly zh and en with zh as the default locale", () => {
    expect(LOCALE_PREFIXES).toEqual(["zh", "en"]);
    expect(DEFAULT_LOCALE).toBe("zh");
  });

  it("validates locale strings strictly", () => {
    expect(isSupportedLocale("zh")).toBe(true);
    expect(isSupportedLocale("en")).toBe(true);
    expect(isSupportedLocale("zh-CN")).toBe(false);
    expect(isSupportedLocale("fr")).toBe(false);
  });

  it("adds locale prefixes to root and nested paths", () => {
    expect(localizePath("zh", "/")).toBe("/zh");
    expect(localizePath("en", "/")).toBe("/en");
    expect(localizePath("zh", "/dental")).toBe("/zh/dental");
    expect(localizePath("en", "/real-estate")).toBe("/en/real-estate");
  });

  it("maps localized routes and labels for the language switcher", () => {
    expect(switchLocalePath("/zh", "en")).toBe("/en");
    expect(switchLocalePath("/en/dental", "zh")).toBe("/zh/dental");
    expect(switchLocalePath("/zh#cases", "en")).toBe("/en/#cases");
    expect(getLocaleSwitcherCopy("zh").labels.en).toBe("英文");
    expect(getLocaleSwitcherCopy("en").labels.zh).toBe("Chinese");
  });
});
