"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUESTIONS } from "@/lib/quiz-data";
import type { SubmittedAnswer } from "@/lib/types";

const axisLabels = {
  materialism: "Material life",
  dialectics: "Contradiction",
  individual_society: "Self and society",
  authority_power: "Power",
  ethics_action: "Action",
  freedom_alienation: "Freedom"
} as const;

export function QuizClient() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const current = QUESTIONS[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === QUESTIONS.length;
  const progressPercent = ((currentIndex + 1) / QUESTIONS.length) * 100;

  function selectAnswer(answerId: string) {
    setAnswers((previous) => ({ ...previous, [current.id]: answerId }));
    setError("");
  }

  function goNext() {
    if (!answers[current.id]) {
      setError("Choose one answer before moving forward.");
      return;
    }

    setCurrentIndex((index) => Math.min(index + 1, QUESTIONS.length - 1));
    setError("");
  }

  async function submitQuiz() {
    if (!isComplete) {
      setError(`Answer all ${QUESTIONS.length} questions before opening the result.`);
      return;
    }

    setSubmitting(true);
    setError("");

    const payload: { answers: SubmittedAnswer[] } = {
      answers: QUESTIONS.map((question) => ({
        questionId: question.id,
        answerId: answers[question.id]
      }))
    };

    try {
      const response = await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const result = await response.json();
      window.localStorage.setItem(`philosopher-result:${result.sessionId}`, JSON.stringify(result));
      startTransition(() => router.push(`/result/${result.sessionId}`));
    } catch {
      setError("The archive failed to score your result. Check the server and try again.");
      setSubmitting(false);
    }
  }

  return (
    <main className="quiz-page">
      <div className="quiz-map" aria-hidden="true" />
      <header className="quiz-header">
        <Link className="text-link quiz-return-link" href="/">
          Return to landing
        </Link>
        <div className="quiz-top-progress" aria-hidden="true">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </header>

      <div className="quiz-stage">
        <section className="quiz-panel">
          <div className="question-topline">
            <span>
              {currentIndex + 1}/{QUESTIONS.length}
            </span>
            <span>{axisLabels[current.axis]}</span>
          </div>
          <h1>{current.prompt}</h1>
          <p className="question-context">{current.context}</p>
          <div className="answer-grid" role="radiogroup" aria-label={current.prompt}>
            {current.answers.map((answer) => {
              const selected = answers[current.id] === answer.id;
              return (
                <Button
                  aria-checked={selected}
                  className={selected ? "answer-card selected" : "answer-card"}
                  key={answer.id}
                  onClick={() => selectAnswer(answer.id)}
                  role="radio"
                  type="button"
                  variant="outline"
                >
                  <span className="answer-letter">{answer.id.toUpperCase()}</span>
                  <span className="answer-copy">{answer.text}</span>
                  <span className="answer-signal" aria-hidden="true" />
                </Button>
              );
            })}
          </div>

          {error ? <p className="form-error">{error}</p> : null}

          <footer className="quiz-controls">
            <Button
              className="quiz-action-button quiz-action-button--secondary"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
              size="lg"
              type="button"
              variant="outline"
            >
              <ArrowLeft aria-hidden="true" data-icon="inline-start" />
              Previous
            </Button>
            {currentIndex < QUESTIONS.length - 1 ? (
              <Button
                className="quiz-action-button quiz-action-button--primary"
                onClick={goNext}
                size="lg"
                type="button"
              >
                Next question
                <ArrowRight aria-hidden="true" data-icon="inline-end" />
              </Button>
            ) : (
              <Button
                className="quiz-action-button quiz-action-button--primary"
                disabled={isSubmitting}
                onClick={submitQuiz}
                size="lg"
                type="button"
              >
                <Sparkles aria-hidden="true" data-icon="inline-start" />
                {isSubmitting ? "Reading the archive..." : "Reveal my philosopher"}
              </Button>
            )}
          </footer>
        </section>
      </div>
    </main>
  );
}
