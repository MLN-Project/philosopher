"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { getAppCopy } from "@/lib/app-copy";
import { axisLabels, getLocalizedQuestions } from "@/lib/localized-quiz";
import type { SubmittedAnswer } from "@/lib/types";

type QuizDirection = "idle" | "next" | "previous";

const AUTO_ADVANCE_DELAY_MS = 450;

export function QuizClient() {
  const router = useRouter();
  const { language } = useLanguage();
  const copy = getAppCopy(language);
  const questions = getLocalizedQuestions(language);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<QuizDirection>("idle");
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const current = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;
  const currentIndexRef = useRef(currentIndex);
  const autoAdvanceTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      if (autoAdvanceTimeoutRef.current !== null) {
        window.clearTimeout(autoAdvanceTimeoutRef.current);
      }
    };
  }, []);

  function clearScheduledAdvance() {
    if (autoAdvanceTimeoutRef.current === null) return;

    window.clearTimeout(autoAdvanceTimeoutRef.current);
    autoAdvanceTimeoutRef.current = null;
  }

  function scheduleAutoAdvance(questionIndex: number) {
    clearScheduledAdvance();

    autoAdvanceTimeoutRef.current = window.setTimeout(() => {
      autoAdvanceTimeoutRef.current = null;

      if (currentIndexRef.current !== questionIndex) return;

      setDirection("next");
      setCurrentIndex(Math.min(questionIndex + 1, questions.length - 1));
      setError("");
    }, AUTO_ADVANCE_DELAY_MS);
  }

  function selectAnswer(answerId: string) {
    setAnswers((previous) => ({ ...previous, [current.id]: answerId }));
    setError("");
  }

  function chooseAnswer(answerId: string) {
    selectAnswer(answerId);

    if (currentIndex < questions.length - 1) {
      scheduleAutoAdvance(currentIndex);
    }
  }

  function handleAnswerKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keyDirections: Partial<Record<string, number>> = {
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -1
    };
    const direction = keyDirections[event.key];
    if (!direction) return;

    event.preventDefault();

    const selectedIndex = current.answers.findIndex((answer) => answers[current.id] === answer.id);
    const focusedIndex = current.answers.findIndex((answer) => {
      const radio = event.currentTarget.querySelector<HTMLButtonElement>(`[data-answer-id="${answer.id}"]`);
      return radio === document.activeElement;
    });
    const baseIndex = focusedIndex >= 0 ? focusedIndex : Math.max(selectedIndex, 0);
    const nextIndex = (baseIndex + direction + current.answers.length) % current.answers.length;
    const nextAnswer = current.answers[nextIndex];
    const nextRadio = event.currentTarget.querySelector<HTMLButtonElement>(`[data-answer-id="${nextAnswer.id}"]`);

    selectAnswer(nextAnswer.id);
    nextRadio?.focus();
  }

  function goPrevious() {
    clearScheduledAdvance();
    setDirection("previous");
    setCurrentIndex((index) => Math.max(index - 1, 0));
    setError("");
  }

  async function submitQuiz() {
    clearScheduledAdvance();

    if (!answers[current.id]) {
      setError(copy.quiz.chooseOne);
      return;
    }

    if (!isComplete) {
      setError(copy.quiz.answerAll.replace("{count}", String(questions.length)));
      return;
    }

    setSubmitting(true);
    setError("");

    const payload: { answers: SubmittedAnswer[] } = {
      answers: questions.map((question) => ({
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
      setError(copy.quiz.scoreError);
      setSubmitting(false);
    }
  }

  return (
    <main className="quiz-page">
      <div className="quiz-map" aria-hidden="true" />
      <header className="quiz-header">
        <Link className="text-link quiz-return-link" href="/">
          {copy.quiz.return}
        </Link>
        <LanguageToggle />
        <div className="quiz-top-progress" aria-hidden="true">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
      </header>

      <div className="quiz-stage">
        <section className={`quiz-panel quiz-panel--${direction}`} key={current.id}>
          <div className="question-topline">
            <div className="question-progress">
              <Button
                aria-label={copy.quiz.previousQuestion}
                className="question-previous-button"
                disabled={currentIndex === 0}
                onClick={goPrevious}
                size="icon"
                type="button"
                variant="outline"
              >
                <ArrowLeft aria-hidden="true" />
              </Button>
              <span>
                {currentIndex + 1}/{questions.length}
              </span>
            </div>
            <span>{axisLabels[language][current.axis]}</span>
          </div>
          <h1>{current.prompt}</h1>
          <p className="question-context">{current.context}</p>
          <div className="answer-grid" role="radiogroup" aria-label={current.prompt} onKeyDown={handleAnswerKeyDown}>
            {current.answers.map((answer) => {
              const selected = answers[current.id] === answer.id;
              const isFirstUnanswered = !answers[current.id] && answer.id === current.answers[0].id;
              return (
                <Button
                  aria-checked={selected}
                  className={selected ? "answer-card selected" : "answer-card"}
                  data-answer-id={answer.id}
                  key={answer.id}
                  onClick={() => chooseAnswer(answer.id)}
                  onPointerDown={() => chooseAnswer(answer.id)}
                  role="radio"
                  tabIndex={selected || isFirstUnanswered ? 0 : -1}
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

          <footer className={currentIndex === questions.length - 1 ? "quiz-controls" : "quiz-controls quiz-controls--auto"}>
            <div aria-live="polite" className="quiz-message-slot">
              {error ? <p className="form-error">{error}</p> : null}
            </div>
            {currentIndex === questions.length - 1 ? (
              <Button
                className="quiz-action-button quiz-action-button--primary"
                disabled={isSubmitting}
                onClick={submitQuiz}
                size="lg"
                type="button"
              >
                <Sparkles aria-hidden="true" data-icon="inline-start" />
                {isSubmitting ? copy.quiz.reading : copy.quiz.reveal}
              </Button>
            ) : null}
          </footer>
        </section>
      </div>
    </main>
  );
}
