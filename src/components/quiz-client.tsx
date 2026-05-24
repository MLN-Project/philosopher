"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { QUESTIONS } from "@/lib/quiz-data";
import type { SubmittedAnswer } from "@/lib/types";

export function QuizClient() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const current = QUESTIONS[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === QUESTIONS.length;

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
        <Link className="text-link" href="/">
          Return to landing
        </Link>
        <span>
          {answeredCount}/{QUESTIONS.length} answered
        </span>
      </header>

      <section className="quiz-panel">
        <div className="progress-track" aria-hidden="true">
          <span style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }} />
        </div>
        <p className="question-context">{current.context}</p>
        <h1>{current.prompt}</h1>
        <div className="answer-grid" role="radiogroup" aria-label={current.prompt}>
          {current.answers.map((answer) => {
            const selected = answers[current.id] === answer.id;
            return (
              <button
                aria-checked={selected}
                className={selected ? "answer-card selected" : "answer-card"}
                key={answer.id}
                onClick={() => selectAnswer(answer.id)}
                role="radio"
                type="button"
              >
                <span>{answer.id.toUpperCase()}</span>
                {answer.text}
              </button>
            );
          })}
        </div>

        {error ? <p className="form-error">{error}</p> : null}

        <footer className="quiz-controls">
          <button
            className="secondary-cta"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((index) => Math.max(index - 1, 0))}
            type="button"
          >
            Previous
          </button>
          {currentIndex < QUESTIONS.length - 1 ? (
            <button className="primary-cta" onClick={goNext} type="button">
              Next question
            </button>
          ) : (
            <button className="primary-cta" disabled={isSubmitting} onClick={submitQuiz} type="button">
              {isSubmitting ? "Reading the archive..." : "Reveal my philosopher"}
            </button>
          )}
        </footer>
      </section>

      <aside className="quiz-index" aria-label="Question navigation">
        {QUESTIONS.map((question, index) => (
          <button
            className={index === currentIndex ? "current" : answers[question.id] ? "answered" : ""}
            key={question.id}
            onClick={() => setCurrentIndex(index)}
            type="button"
          >
            {index + 1}
          </button>
        ))}
      </aside>
    </main>
  );
}
