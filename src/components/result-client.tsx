"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { PHILOSOPHER_BY_ID } from "@/lib/philosophers";
import { getStaticCommentary } from "@/lib/static-commentary";
import type { AiCommentary, AxisId, QuizResult } from "@/lib/types";

type StoredResult = QuizResult & {
  createdAt?: string;
  commentary?: AiCommentary;
};

type DimensionProfile = {
  id: AxisId;
  label: string;
  shortLabel: string;
  description: string;
  score: number;
  percentage: number;
};

const DIMENSIONS: Omit<DimensionProfile, "score" | "percentage">[] = [
  {
    id: "materialism",
    label: "Material life",
    shortLabel: "Conditions",
    description: "How strongly you read ideas through labor, bodies, property, and lived conditions."
  },
  {
    id: "dialectics",
    label: "Contradiction",
    shortLabel: "Change",
    description: "How naturally you see tension, negation, and development inside events."
  },
  {
    id: "individual_society",
    label: "Self and society",
    shortLabel: "Relation",
    description: "How much you treat identity as something formed through shared life."
  },
  {
    id: "authority_power",
    label: "Power",
    shortLabel: "Authority",
    description: "How alert you are to institutions, command, discipline, and domination."
  },
  {
    id: "ethics_action",
    label: "Action",
    shortLabel: "Practice",
    description: "How much you turn belief into conduct, habit, responsibility, or strategy."
  },
  {
    id: "freedom_alienation",
    label: "Freedom",
    shortLabel: "Alienation",
    description: "How strongly you protect authorship, liberation, and the refusal of false roles."
  }
];

const RADAR_CENTER = 160;
const RADAR_RADIUS = 104;

function formatCreatedDate(createdAt?: string) {
  if (!createdAt) return "New result";

  const createdTime = new Date(createdAt).getTime();
  if (Number.isNaN(createdTime)) return "New result";

  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(createdTime)
  );
}

function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return true;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function buildDimensionProfiles(axisScores?: Partial<Record<AxisId, number>>): DimensionProfile[] {
  const rawScores = DIMENSIONS.map((dimension) => Math.max(axisScores?.[dimension.id] ?? 0, 0));
  const maxScore = Math.max(...rawScores, 1);

  return DIMENSIONS.map((dimension, index) => ({
    ...dimension,
    score: axisScores?.[dimension.id] ?? 0,
    percentage: Math.round((rawScores[index] / maxScore) * 100)
  }));
}

function radarPoint(index: number, percentage: number, radius = RADAR_RADIUS) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / DIMENSIONS.length;
  const distance = radius * (percentage / 100);

  return {
    x: RADAR_CENTER + Math.cos(angle) * distance,
    y: RADAR_CENTER + Math.sin(angle) * distance
  };
}

function radarPolygon(percentages: number[], radius = RADAR_RADIUS) {
  return percentages
    .map((percentage, index) => {
      const point = radarPoint(index, percentage, radius);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

export function ResultClient({ sessionId }: { sessionId: string }) {
  const rootRef = useRef<HTMLElement>(null);
  const [result, setResult] = useState<StoredResult | null>(null);
  const [status, setStatus] = useState("Opening the archive...");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const local = window.localStorage.getItem(`philosopher-result:${sessionId}`);
      if (local && !cancelled) {
        const parsed = JSON.parse(local) as StoredResult;
        setResult(parsed);
        setStatus("Static commentary ready.");
      }

      const response = await fetch(`/api/results?id=${sessionId}`);
      if (!response.ok) {
        if (!local) setStatus("This result could not be found. Retake the quiz to create a new session.");
        return;
      }

      const stored = (await response.json()) as StoredResult;
      if (cancelled) return;
      setResult(stored);
      window.localStorage.setItem(`philosopher-result:${sessionId}`, JSON.stringify(stored));
      setStatus("Static commentary ready.");
    }

    load().catch(() => {
      if (!cancelled) setStatus("The archive could not load this result.");
    });

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  useEffect(() => {
    if (!result || !rootRef.current || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".section-kicker").forEach((heading) => {
        gsap.fromTo(
          heading.querySelectorAll("span, h2"),
          { autoAlpha: 0, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 1.45,
            ease: "power2.out",
            stagger: 0.16,
            scrollTrigger: {
              trigger: heading,
              start: "top 82%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      gsap.fromTo(
        [".dimension-copy", ".dimension-radar-shell"],
        { autoAlpha: 0, filter: "blur(10px)" },
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.55,
          ease: "power2.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".dimension-section",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        [".dimension-radar", ".dimension-row"],
        { autoAlpha: 0, filter: "blur(7px)" },
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".dimension-section",
            start: "top 58%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.utils.toArray<HTMLElement>(".match-card").forEach((card) => {
        const fill = card.querySelector(".match-meter-fill");
        const percent = card.querySelector(".match-percent");

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 92, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              end: "top 48%",
              scrub: 1.7
            }
          }
        );

        if (fill) {
          gsap.fromTo(
            fill,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left center",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                end: "top 42%",
                scrub: 2.4
              }
            }
          );
        }

        if (percent) {
          gsap.fromTo(
            percent,
            { autoAlpha: 0, x: 24 },
            {
              autoAlpha: 1,
              x: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
                end: "top 45%",
                scrub: 1.9
              }
            }
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".quote-stack blockquote").forEach((quote) => {
        gsap.fromTo(
          quote,
          { autoAlpha: 0, y: 86, clipPath: "inset(0 0 18% 0)" },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 82%",
              end: "top 48%",
              scrub: 1.45
            }
          }
        );
      });

      gsap.fromTo(
        [".commentary-heading", ".commentary-scroll", ".commentary-insight-panel"],
        { autoAlpha: 0, filter: "blur(10px)" },
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.55,
          ease: "power2.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".commentary-section",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        [".commentary-list", ".disclaimer"],
        { autoAlpha: 0, filter: "blur(7px)" },
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".commentary-section",
            start: "top 58%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, rootRef);

    return () => context.revert();
  }, [result]);

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
  const createdDate = formatCreatedDate(result.createdAt);
  const dimensions = buildDimensionProfiles(result.axisScores);
  const strongestDimensions = [...dimensions].sort((a, b) => b.percentage - a.percentage).slice(0, 2);
  const quietestDimensions = [...dimensions].sort((a, b) => a.percentage - b.percentage).slice(0, 2);
  const commentary = getStaticCommentary(result);

  return (
    <main ref={rootRef} className="result-page" style={{ "--philosopher-color": primary.color } as CSSProperties}>
      <nav className="result-nav" aria-label="Result navigation">
        <Link className="text-link result-return-link" href="/">
          Return to landing
        </Link>
        <Link className="primary-cta result-retake-link" href="/quiz">
          Retake the test
        </Link>
      </nav>

      <section className="result-hero">
        <div className="result-portrait-stage">
          <div className="portrait-frame">
            <Image
              alt=""
              height={1200}
              priority
              src={primary.cutoutUrl}
              unoptimized
              width={920}
            />
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
              <strong className="result-percentage">{result.topMatches[0].percentage}%</strong>
            </div>
            <div>
              <span>Recorded</span>
              <strong>{createdDate}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="dimension-section" aria-labelledby="dimension-title">
        <div className="section-kicker dimension-copy">
          <span>Hidden axes</span>
          <h2 id="dimension-title">Dimensions</h2>
          <p>
            Your radar compares the six philosophical pressures in the quiz. High points are your strongest habits;
            lower points are quieter muscles that shape the edges of the match.
          </p>
          <div className="dimension-extremes" aria-label="Dimension strengths and weaknesses">
            <div>
              <span>Strength</span>
              <strong>{strongestDimensions.map((dimension) => dimension.label).join(" / ")}</strong>
            </div>
            <div>
              <span>Quieter edge</span>
              <strong>{quietestDimensions.map((dimension) => dimension.label).join(" / ")}</strong>
            </div>
          </div>
        </div>
        <div className="dimension-radar-shell">
          <RadarChart dimensions={dimensions} />
          <div className="dimension-list" aria-label="Dimension percentages">
            {dimensions.map((dimension) => (
              <div
                className="dimension-row"
                key={dimension.id}
                style={{ "--dimension-value": `${dimension.percentage}%` } as CSSProperties}
              >
                <div>
                  <strong>{dimension.label}</strong>
                  <span>{dimension.description}</span>
                </div>
                <em className="result-percentage">{dimension.percentage}%</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="match-section">
        <div className="section-kicker match-heading">
          <span>Constellation</span>
          <h2>Nearby thinkers</h2>
        </div>
        <div className="match-grid" aria-label="Secondary philosopher matches">
          {secondary.map((match) => {
            const philosopher = PHILOSOPHER_BY_ID[match.id];
            return (
              <article
                className="match-card"
                aria-label={`${philosopher.name} is a ${match.percentage}% nearby match`}
                key={match.id}
                style={{ "--match-color": philosopher.color } as CSSProperties}
              >
                <div className="match-identity">
                  <Image alt="" height={700} src={philosopher.portraitUrl} unoptimized width={800} />
                  <div>
                    <h3>{philosopher.name}</h3>
                    <p>{philosopher.shortLabel}</p>
                  </div>
                </div>
                <div className="match-similarity" aria-hidden="true">
                  <span className="match-meter">
                    <span className="match-meter-fill" style={{ width: `${match.percentage}%` }} />
                  </span>
                  <strong className="match-percent result-percentage">{match.percentage}%</strong>
                </div>
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
        </div>
        <div className="commentary-layout">
          <article className="commentary-scroll">
            <h3>{commentary.summary}</h3>
            <p>{commentary.beliefProfile}</p>
          </article>
          <aside className="commentary-insight-panel" aria-label="Reflective commentary details">
            <ListBlock title="Strengths" items={commentary.strengths} />
            <ListBlock title="Blind spots" items={commentary.blindSpots} />
            <ListBlock title="Read next" items={commentary.recommendedReadings} />
            <p className="disclaimer">{commentary.disclaimer}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function RadarChart({ dimensions }: { dimensions: DimensionProfile[] }) {
  const values = dimensions.map((dimension) => dimension.percentage);
  const axisPoints = dimensions.map((dimension, index) => ({
    dimension,
    outer: radarPoint(index, 100),
    label: radarPoint(index, 100, RADAR_RADIUS + 34)
  }));

  return (
    <figure className="dimension-radar" aria-label="Radar chart of philosophical dimensions">
      <svg viewBox="0 0 320 320" role="img" aria-label="Philosophical dimension radar">
        {[25, 50, 75, 100].map((level) => (
          <polygon className="radar-grid" key={level} points={radarPolygon(Array(DIMENSIONS.length).fill(level))} />
        ))}
        {axisPoints.map(({ dimension, outer }) => (
          <line className="radar-axis" key={dimension.id} x1={RADAR_CENTER} x2={outer.x} y1={RADAR_CENTER} y2={outer.y} />
        ))}
        <polygon className="radar-area" points={radarPolygon(values)} />
        <polyline className="radar-stroke" points={`${radarPolygon(values)} ${radarPoint(0, values[0]).x},${radarPoint(0, values[0]).y}`} />
        {dimensions.map((dimension, index) => {
          const point = radarPoint(index, dimension.percentage);
          return <circle className="radar-dot" cx={point.x} cy={point.y} key={dimension.id} r="4.5" />;
        })}
        {axisPoints.map(({ dimension, label }) => (
          <text className="radar-label" key={dimension.id} x={label.x} y={label.y}>
            {dimension.shortLabel}
          </text>
        ))}
      </svg>
    </figure>
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
