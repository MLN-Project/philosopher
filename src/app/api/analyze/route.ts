import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateAiCommentary } from "@/lib/ai";
import { getQuizSession, persistCommentary } from "@/lib/storage";

const analyzeSchema = z.object({
  sessionId: z.string().uuid()
});

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = analyzeSchema.parse(await request.json());
    const session = await getQuizSession(sessionId);

    if (!session) {
      return NextResponse.json({ error: "Result not found." }, { status: 404 });
    }

    if (session.commentary) {
      return NextResponse.json(session.commentary);
    }

    const commentary = await generateAiCommentary(session);
    await persistCommentary(sessionId, commentary);

    return NextResponse.json(commentary);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("POST /api/analyze failed", error);
    return NextResponse.json({ error: "Unable to generate commentary." }, { status: 500 });
  }
}
