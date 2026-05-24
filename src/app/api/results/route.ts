import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { scoreQuiz, QuizValidationError } from "@/lib/scoring";
import { getQuizSession, persistQuizSession } from "@/lib/storage";

const submittedAnswerSchema = z.object({
  questionId: z.string(),
  answerId: z.string()
});

const resultsSchema = z.object({
  answers: z.array(submittedAnswerSchema)
});

export async function POST(request: NextRequest) {
  try {
    const body = resultsSchema.parse(await request.json());
    const result = scoreQuiz(body.answers);
    const stored = await persistQuizSession(result);

    return NextResponse.json(stored);
  } catch (error) {
    if (error instanceof QuizValidationError || error instanceof z.ZodError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("POST /api/results failed", error);
    return NextResponse.json({ error: "Unable to score quiz." }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing id parameter." }, { status: 400 });
  }

  const session = await getQuizSession(sessionId);

  if (!session) {
    return NextResponse.json({ error: "Result not found." }, { status: 404 });
  }

  return NextResponse.json(session);
}
