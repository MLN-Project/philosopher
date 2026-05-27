import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";

function Probe() {
  const { language } = useLanguage();

  return <p data-testid="active-language">{language}</p>;
}

describe("LanguageToggle", () => {
  afterEach(() => {
    cleanup();
    window.localStorage.clear();
    document.documentElement.removeAttribute("lang");
  });

  it("highlights and persists the selected language for the whole app", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
        <Probe />
      </LanguageProvider>
    );

    const english = screen.getByRole("button", { name: "EN" });
    const vietnamese = screen.getByRole("button", { name: "VN" });

    expect(english.getAttribute("aria-pressed")).toBe("true");
    expect(vietnamese.getAttribute("aria-pressed")).toBe("false");
    expect(screen.getByTestId("active-language").textContent).toBe("en");

    fireEvent.click(vietnamese);

    expect(english.getAttribute("aria-pressed")).toBe("false");
    expect(vietnamese.getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByTestId("active-language").textContent).toBe("vi");
    expect(window.localStorage.getItem("philosopher-language")).toBe("vi");
    expect(document.documentElement.lang).toBe("vi");
  });
});
