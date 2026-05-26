import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/analyze/route";
import { getQuizSession, persistCommentary } from "@/lib/storage";
import type { AiCommentary, PhilosopherId } from "@/lib/types";

vi.mock("@/lib/storage", () => ({
  getQuizSession: vi.fn(),
  persistCommentary: vi.fn(async (_sessionId: string, commentary: AiCommentary) => commentary)
}));

const sessionId = "11111111-1111-4111-8111-111111111111";

function requestWith(body: unknown) {
  return new Request("http://localhost/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }) as Parameters<typeof POST>[0];
}

describe("POST /api/analyze", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns static commentary instead of stored or generated AI commentary", async () => {
    vi.mocked(getQuizSession).mockResolvedValue({
      answers: [],
      axisScores: {
        authority_power: 4,
        dialectics: 9,
        ethics_action: 12,
        freedom_alienation: 7,
        individual_society: 16,
        materialism: 14
      },
      commentary: {
        summary: "A stale generated summary.",
        beliefProfile: "Old generated profile.",
        strengths: [],
        blindSpots: [],
        recommendedReadings: [],
        disclaimer: "Old disclaimer."
      },
      createdAt: "2026-05-27T00:00:00.000Z",
      philosopherScores: {} as Record<PhilosopherId, number>,
      sessionId,
      strongestAxes: ["individual_society", "materialism", "ethics_action"],
      tensions: [],
      topMatches: [
        { id: "marx", name: "Karl Marx", percentage: 47, score: 40 },
        { id: "beauvoir", name: "Simone de Beauvoir", percentage: 23, score: 20 }
      ]
    });

    const response = await POST(requestWith({ sessionId }));
    const json = (await response.json()) as AiCommentary;

    expect(json.summary).toMatch(/private frustration as a clue to shared material conditions/i);
    expect(json.summary).not.toBe("A stale generated summary.");
    expect(persistCommentary).toHaveBeenCalledWith(
      sessionId,
      expect.objectContaining({
        summary: expect.stringMatching(/private frustration as a clue to shared material conditions/i)
      })
    );
  });
});
