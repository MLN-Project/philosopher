import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LandingExperience } from "@/components/landing-experience";

const router = vi.hoisted(() => ({
  push: vi.fn()
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock("next/navigation", () => ({
  useRouter: () => router
}));

const mockReducedMotion = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockReturnValue({
      addEventListener: vi.fn(),
      matches,
      removeEventListener: vi.fn()
    })
  });
};

describe("LandingExperience", () => {
  afterEach(() => {
    cleanup();
    router.push.mockClear();
    vi.restoreAllMocks();
  });

  it("uses instant scroll for the reveal cue when reduced motion is requested", () => {
    mockReducedMotion(true);

    const scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView
    });

    render(<LandingExperience />);
    fireEvent.click(screen.getByRole("link", { name: /reveal the path/i }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "auto", block: "start" });
  });

  it("links parchment portraits to dedicated philosopher pages", () => {
    mockReducedMotion(true);

    render(<LandingExperience />);

    expect(screen.getByRole("link", { name: /explore plato/i }).getAttribute("href")).toBe("/philosophers/plato");
    expect(screen.getByRole("link", { name: /explore karl marx/i }).getAttribute("href")).toBe(
      "/philosophers/marx"
    );
  });

  it("navigates directly to the dedicated philosopher page when reduced motion is requested", () => {
    mockReducedMotion(true);

    render(<LandingExperience />);
    fireEvent.click(screen.getByRole("link", { name: /explore plato/i }));

    expect(router.push).toHaveBeenCalledWith("/philosophers/plato");
  });
});
