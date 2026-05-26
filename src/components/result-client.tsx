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
  const createdDate = result.createdAt
    ? new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(result.createdAt))
    : "New result";

  return (
    <main className="result-page" style={{ "--philosopher-color": primary.color } as CSSProperties}>
      <nav className="result-nav" aria-label="Result navigation">
        <Link className="text-link result-return-link" href="/">
          Back to the map
        </Link>
        <Link className="primary-cta result-retake-link" href="/quiz">
          Retake the test
        </Link>
      </nav>

      <section className="result-hero">
        <div className="result-portrait-stage">
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
          <div className="result-score-seal" aria-label={`${result.topMatches[0].percentage}% match`}>
            <strong>{result.topMatches[0].percentage}%</strong>
            <span>match</span>
          </div>
        </div>
        <div className="result-copy">
          <p className="scribe-line">Your philosophical signature</p>
          <h1>{primary.name}</h1>
          <p className="primary-label">{primary.shortLabel}</p>
          <p>{primary.description}</p>
          <div className="result-meta-grid" aria-label="Result details">
            <div>
              <span>Top cluster</span>
              <strong>{result.topMatches[0].percentage}%</strong>
            </div>
            <div>
              <span>Recorded</span>
              <strong>{createdDate}</strong>
            </div>
            <div>
              <span>Archive id</span>
              <strong>{sessionId.slice(0, 8)}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="match-section">
        <div className="section-kicker">
          <span>Constellation</span>
          <h2>Nearby thinkers</h2>
        </div>
        <div className="match-grid" aria-label="Secondary philosopher matches">
          {secondary.map((match) => {
            const philosopher = PHILOSOPHER_BY_ID[match.id];
            return (
              <article
                className="match-card"
                key={match.id}
                style={{ "--match-color": philosopher.color, "--match-score": `${match.percentage}%` } as CSSProperties}
              >
                <Image alt="" height={700} src={philosopher.portraitUrl} unoptimized width={800} />
                <div>
                  <h3>{philosopher.name}</h3>
                  <p>{philosopher.shortLabel}</p>
                  <span className="match-meter" aria-hidden="true" />
                </div>
                <strong>{match.percentage}%</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className="quote-section">
        <div className="section-kicker">
          <span>Reading room</span>
          <h2>Quotes from your result constellation</h2>
        </div>
        <div className="quote-stack">
          {result.topMatches.map((match) => {
            const philosopher = PHILOSOPHER_BY_ID[match.id];
            return (
              <blockquote key={match.id}>
                <p>&ldquo;{philosopher.quote}&rdquo;</p>
                <cite>
                  {philosopher.name}, {philosopher.quoteNote}
                </cite>
              </blockquote>
            );
          })}
        </div>
      </section>

      <section className="commentary-section">
        <div className="section-kicker commentary-heading">
          <span>Interpretation</span>
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
    <div className="commentary-list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
