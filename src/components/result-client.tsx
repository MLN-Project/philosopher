"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { PHILOSOPHER_BY_ID } from "@/lib/philosophers";
import type { AiCommentary, QuizResult } from "@/lib/types";

type StoredResult = QuizResult & {
  createdAt?: string;
  commentary?: AiCommentary;
};

export function ResultClient({ sessionId }: { sessionId: string }) {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [commentary, setCommentary] = useState<AiCommentary | null>(null);
  const [status, setStatus] = useState("Opening the archive...");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const local = window.localStorage.getItem(`philosopher-result:${sessionId}`);
      if (local && !cancelled) {
        const parsed = JSON.parse(local) as StoredResult;
        setResult(parsed);
        setCommentary(parsed.commentary ?? null);
      }

      const response = await fetch(`/api/results?id=${sessionId}`);
      if (!response.ok) {
        if (!local) setStatus("This result could not be found. Retake the quiz to create a new session.");
        return;
      }

      const stored = (await response.json()) as StoredResult;
      if (cancelled) return;
      setResult(stored);
      setCommentary(stored.commentary ?? null);
      window.localStorage.setItem(`philosopher-result:${sessionId}`, JSON.stringify(stored));
      setStatus("Generating reflective commentary...");

      const aiResponse = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId })
      });

      if (!aiResponse.ok) {
        setStatus("Commentary is temporarily unavailable, but your scored result is ready.");
        return;
      }

      const ai = (await aiResponse.json()) as AiCommentary;
      if (cancelled) return;
      setCommentary(ai);
      window.localStorage.setItem(
        `philosopher-result:${sessionId}`,
        JSON.stringify({
          ...stored,
          commentary: ai
        })
      );
      setStatus("Commentary ready.");
    }

    load().catch(() => {
      if (!cancelled) setStatus("The archive could not load this result.");
    });

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  if (!result) {
    return (
      <main className="result-page loading-state">
        <div className="result-scroll">
          <p>{status}</p>
          <Link className="primary-cta" href="/quiz">
            Retake the test
          </Link>
        </div>
      </main>
    );
  }

  const primary = PHILOSOPHER_BY_ID[result.topMatches[0].id];
  const secondary = result.topMatches.slice(1);

  return (
    <main className="result-page">
      <section className="result-hero" style={{ "--philosopher-color": primary.color } as CSSProperties}>
        <div className="portrait-frame">
          <Image
            alt={`${primary.name} portrait`}
            height={1200}
            priority
            src={primary.portraitUrl}
            unoptimized
            width={920}
          />
          <span>{primary.name.split(" ").map((part) => part[0]).join("")}</span>
        </div>
        <div className="result-copy">
          <Link className="text-link" href="/">
            Back to the map
          </Link>
          <p className="scribe-line">Your closest philosophical signature</p>
          <h1>{primary.name}</h1>
          <p className="primary-label">{primary.shortLabel}</p>
          <p>{primary.description}</p>
          <div className="primary-score">{result.topMatches[0].percentage}% of your top profile cluster</div>
        </div>
      </section>

      <section className="match-section">
        <h2>Nearby thinkers</h2>
        <div className="match-grid">
          {secondary.map((match) => {
            const philosopher = PHILOSOPHER_BY_ID[match.id];
            return (
              <article className="match-card" key={match.id}>
                <Image alt="" height={700} src={philosopher.portraitUrl} unoptimized width={800} />
                <h3>{philosopher.name}</h3>
                <p>{philosopher.shortLabel}</p>
                <strong>{match.percentage}%</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="quote-section">
        <h2>Quotes from your result constellation</h2>
        {result.topMatches.map((match) => {
          const philosopher = PHILOSOPHER_BY_ID[match.id];
          return (
            <blockquote key={match.id}>
              <p>“{philosopher.quote}”</p>
              <cite>
                {philosopher.name}, {philosopher.quoteNote}
              </cite>
            </blockquote>
          );
        })}
      </section>

      <section className="commentary-section">
        <div>
          <h2>Reflective commentary</h2>
          <p className="status-line">{status}</p>
        </div>
        {commentary ? (
          <article className="commentary-scroll">
            <h3>{commentary.summary}</h3>
            <p>{commentary.beliefProfile}</p>
            <div className="commentary-columns">
              <ListBlock title="Strengths" items={commentary.strengths} />
              <ListBlock title="Blind spots" items={commentary.blindSpots} />
              <ListBlock title="Read next" items={commentary.recommendedReadings} />
            </div>
            <p className="disclaimer">{commentary.disclaimer}</p>
          </article>
        ) : (
          <div className="commentary-scroll skeleton-scroll">
            <span />
            <span />
            <span />
          </div>
        )}
      </section>
    </main>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
