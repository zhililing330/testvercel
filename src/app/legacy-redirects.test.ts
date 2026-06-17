import { describe, expect, it, vi } from "vitest";

const { redirectMock } = vi.hoisted(() => ({
  redirectMock: vi.fn((path: string) => {
    throw new Error(`NEXT_REDIRECT:${path}`);
  }),
}));

vi.mock("next/navigation", () => ({
  redirect: redirectMock,
}));

import HomePage from "./(legacy)/page";
import DentalPage from "./(legacy)/dental/page";
import LawPage from "./(legacy)/law/page";
import RealEstatePage from "./(legacy)/real-estate/page";

describe("legacy non-localized routes", () => {
  it("redirects the root route to the default chinese homepage", () => {
    expect(() => HomePage()).toThrow("NEXT_REDIRECT:/zh");
    expect(redirectMock).toHaveBeenCalledWith("/zh");
  });

  it("redirects the dental route to the chinese localized route", () => {
    expect(() => DentalPage()).toThrow("NEXT_REDIRECT:/zh/dental");
    expect(redirectMock).toHaveBeenCalledWith("/zh/dental");
  });

  it("redirects the law route to the chinese localized route", () => {
    expect(() => LawPage()).toThrow("NEXT_REDIRECT:/zh/law");
    expect(redirectMock).toHaveBeenCalledWith("/zh/law");
  });

  it("redirects the real-estate route to the chinese localized route", () => {
    expect(() => RealEstatePage()).toThrow("NEXT_REDIRECT:/zh/real-estate");
    expect(redirectMock).toHaveBeenCalledWith("/zh/real-estate");
  });
});
