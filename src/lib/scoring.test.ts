import { describe, expect, it } from "vitest";
import { QUESTIONS } from "@/lib/quiz-data";
import { parseAiCommentary } from "@/lib/ai";
import { QuizValidationError, scoreQuiz } from "@/lib/scoring";

describe("scoreQuiz", () => {
  it("produces deterministic top matches", () => {
    const answers = QUESTIONS.map((question) => ({
      questionId: question.id,
      answerId: question.answers[0].id
    }));

    const first = scoreQuiz(answers, "00000000-0000-0000-0000-000000000001");
    const second = scoreQuiz(answers, "00000000-0000-0000-0000-000000000001");

    expect(second.topMatches).toEqual(first.topMatches);
    expect(first.topMatches).toHaveLength(4);
  });

  it("normalizes top four percentages to 100", () => {
    const answers = QUESTIONS.map((question, index) => ({
      questionId: question.id,
      answerId: question.answers[index % question.answers.length].id
    }));

    const result = scoreQuiz(answers);
    const total = result.topMatches.reduce((sum, match) => sum + match.percentage, 0);

    expect(total).toBe(100);
  });

  it("rejects empty or malformed answers", () => {
    expect(() => scoreQuiz([])).toThrow(QuizValidationError);

    const answers = QUESTIONS.map((question) => ({
      questionId: question.id,
      answerId: question.answers[0].id
    }));

    answers[0] = { questionId: "q999", answerId: "x" };
    expect(() => scoreQuiz(answers)).toThrow(QuizValidationError);
  });
});

describe("parseAiCommentary", () => {
  it("rejects invalid OpenAI commentary shape", () => {
    expect(() => parseAiCommentary({ summary: "too short" })).toThrow();
  });
});
