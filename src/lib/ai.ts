import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from "zod";
import type { AiCommentary, QuizResult } from "@/lib/types";

export const aiCommentarySchema = z.object({
  summary: z.string().min(20),
  beliefProfile: z.string().min(20),
  strengths: z.array(z.string().min(3)).min(2).max(5),
  blindSpots: z.array(z.string().min(3)).min(2).max(5),
  recommendedReadings: z.array(z.string().min(3)).min(2).max(6),
  disclaimer: z.string().min(20)
});

let client: OpenAI | null = null;

function getOpenAI() {
  if (!process.env.OPENAI_API_KEY) return null;
  client ??= new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

export function parseAiCommentary(value: unknown): AiCommentary {
  return aiCommentarySchema.parse(value);
}

export async function generateAiCommentary(result: QuizResult): Promise<AiCommentary> {
  const openai = getOpenAI();

  if (!openai) {
    return fallbackCommentary(result);
  }

  const prompt = [
    "Write a reflective, non-diagnostic personality interpretation for a philosophy quiz.",
    "Use the user's philosopher matches, axis scores, and tensions.",
    "Frame it as interpretation, not truth, medical advice, political labeling, or academic grading.",
    "Keep it warm, specific, and connected to Marxism-Leninism syllabus themes when relevant.",
    JSON.stringify(
      {
        topMatches: result.topMatches,
        strongestAxes: result.strongestAxes,
        axisScores: result.axisScores,
        tensions: result.tensions
      },
      null,
      2
    )
  ].join("\n\n");

  const response = await openai.responses.parse({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    input: prompt,
    text: {
      format: zodTextFormat(aiCommentarySchema, "philosopher_commentary")
    }
  });

  return parseAiCommentary(response.output_parsed);
}

export function fallbackCommentary(result: QuizResult): AiCommentary {
  const primary = result.topMatches[0];
  const secondary = result.topMatches
    .slice(1)
    .map((match) => match.name)
    .join(", ");

  return {
    summary: `Your strongest match is ${primary.name}. The profile suggests a mind that returns repeatedly to ${result.strongestAxes.join(", ")} when interpreting life and society.`,
    beliefProfile: `You tend to connect personal choices with larger philosophical patterns. Your adjacent matches (${secondary}) show that your answers are not one-note: they combine a dominant style with neighboring concerns.`,
    strengths: [
      "You look for the structure beneath ordinary opinions.",
      "You prefer beliefs that can guide action rather than remain decorative."
    ],
    blindSpots: [
      "You may sometimes turn complex human situations into a single favored lens.",
      "You may need to balance critique with patience for people who reason from different starting points."
    ],
    recommendedReadings: result.topMatches.map((match) => `${match.name}: start with a short introductory text before the primary work.`),
    disclaimer: "This is a reflective interpretation of quiz answers, not a psychological diagnosis, political label, or academic evaluation."
  };
}
