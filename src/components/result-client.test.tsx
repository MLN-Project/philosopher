import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ResultClient } from "@/components/result-client";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

vi.mock("next/image", () => ({
  default: ({ alt, src }: { alt: string; src: string }) => createElement("img", { alt, src })
}));

const sessionId = "00000000-0000-0000-0000-000000000001";
const storedResult = {
  answers: [],
  axisScores: {
    authority_power: 4,
    dialectics: 9,
    ethics_action: 12,
    freedom_alienation: 7,
    individual_society: 16,
    materialism: 14
  },
  createdAt: "2026-05-27T00:00:00.000Z",
  philosopherScores: {},
  sessionId,
  strongestAxes: ["individual_society", "materialism", "ethics_action"],
  tensions: [],
  topMatches: [
    { id: "marx", name: "Karl Marx", percentage: 47, score: 40 },
    { id: "beauvoir", name: "Simone de Beauvoir", percentage: 23, score: 20 },
    { id: "sartre", name: "Jean-Paul Sartre", percentage: 17, score: 14 },
    { id: "engels", name: "Friedrich Engels", percentage: 13, score: 10 }
  ]
};

describe("ResultClient", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false
      })
    );
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("falls back when a stored result has an invalid created date", async () => {
    window.localStorage.setItem(
      `philosopher-result:${sessionId}`,
      JSON.stringify({
        answers: [],
        axisScores: {},
        createdAt: "not-a-date",
        philosopherScores: {},
        sessionId,
        strongestAxes: [],
        tensions: [],
        topMatches: [{ id: "marx", name: "Karl Marx", percentage: 100, score: 1 }]
      })
    );

    render(<ResultClient sessionId={sessionId} />);

    expect(await screen.findByText("New result")).toBeTruthy();
  });

  it("renders philosophical dimensions and nearby thinker percentages", async () => {
    window.localStorage.setItem(`philosopher-result:${sessionId}`, JSON.stringify(storedResult));

    render(<ResultClient sessionId={sessionId} />);

    expect(await screen.findByRole("heading", { name: "Dimensions" })).toBeTruthy();
    expect(screen.getByText("Self and society")).toBeTruthy();
    expect(screen.getByText("100%")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Nearby thinkers" })).toBeTruthy();
    expect(screen.getByLabelText("Simone de Beauvoir is a 23% nearby match")).toBeTruthy();
  });

  it("uses static philosopher commentary without requesting AI analysis", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => storedResult
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<ResultClient sessionId={sessionId} />);

    expect(await screen.findByText(/private frustration as a clue to shared material conditions/i)).toBeTruthy();
    await waitFor(() => {
      expect(fetchMock).not.toHaveBeenCalledWith(
        "/api/analyze",
        expect.objectContaining({ method: "POST" })
      );
    });
  });
});
