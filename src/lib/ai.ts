import { z } from "zod";
import type { AiCommentary } from "@/lib/types";

export const aiCommentarySchema = z.object({
  summary: z.string().min(20),
  beliefProfile: z.string().min(20),
  strengths: z.array(z.string().min(3)).min(2).max(5),
  blindSpots: z.array(z.string().min(3)).min(2).max(5),
  recommendedReadings: z.array(z.string().min(3)).min(2).max(6),
  disclaimer: z.string().min(20)
});

export function parseAiCommentary(value: unknown): AiCommentary {
  return aiCommentarySchema.parse(value);
}
