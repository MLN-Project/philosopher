"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { formatTemplate, getAppCopy } from "@/lib/app-copy";
import { getLocalizedPhilosopherById } from "@/lib/localized-philosophers";
import { getStaticCommentary } from "@/lib/static-commentary";
import type { Language } from "@/lib/i18n";
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

const DIMENSIONS: Record<Language, Omit<DimensionProfile, "score" | "percentage">[]> = {
  en: [
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
  ],
  vi: [
    {
      id: "materialism",
      label: "Đời sống vật chất",
      shortLabel: "Điều kiện",
      description: "Mức bạn đọc ý tưởng qua lao động, thân thể, sở hữu và điều kiện sống."
    },
    {
      id: "dialectics",
      label: "Mâu thuẫn",
      shortLabel: "Thay đổi",
      description: "Mức bạn tự nhiên nhìn thấy căng thẳng, phủ định và phát triển trong sự kiện."
    },
    {
      id: "individual_society",
      label: "Cá nhân và xã hội",
      shortLabel: "Quan hệ",
      description: "Mức bạn xem căn tính là điều được hình thành qua đời sống chung."
    },
    {
      id: "authority_power",
      label: "Quyền lực",
      shortLabel: "Quyền uy",
      description: "Mức bạn cảnh giác với thiết chế, mệnh lệnh, kỷ luật và thống trị."
    },
    {
      id: "ethics_action",
      label: "Hành động",
      shortLabel: "Thực hành",
      description: "Mức bạn biến niềm tin thành ứng xử, thói quen, trách nhiệm hoặc chiến lược."
    },
    {
      id: "freedom_alienation",
      label: "Tự do",
      shortLabel: "Tha hóa",
      description: "Mức bạn bảo vệ quyền tác giả đời mình, giải phóng và từ chối vai giả."
    }
  ]
};

const RADAR_CENTER = 160;
const RADAR_RADIUS = 104;
const RADAR_AXIS_COUNT = DIMENSIONS.en.length;

function formatCreatedDate(createdAt: string | undefined, language: Language) {
  if (!createdAt) return language === "vi" ? "Kết quả mới" : "New result";

  const createdTime = new Date(createdAt).getTime();
  if (Number.isNaN(createdTime)) return language === "vi" ? "Kết quả mới" : "New result";

  return new Intl.DateTimeFormat(language === "vi" ? "vi-VN" : "en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(createdTime)
  );
}

function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return true;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function buildDimensionProfiles(axisScores: Partial<Record<AxisId, number>> | undefined, language: Language): DimensionProfile[] {
  const dimensionText = DIMENSIONS[language];
  const rawScores = dimensionText.map((dimension) => Math.max(axisScores?.[dimension.id] ?? 0, 0));
  const maxScore = Math.max(...rawScores, 1);

  return dimensionText.map((dimension, index) => ({
    ...dimension,
    score: axisScores?.[dimension.id] ?? 0,
    percentage: Math.round((rawScores[index] / maxScore) * 100)
  }));
}

function radarPoint(index: number, percentage: number, radius = RADAR_RADIUS) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / RADAR_AXIS_COUNT;
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
  const { language } = useLanguage();
  const copy = getAppCopy(language);
  const philosopherById = getLocalizedPhilosopherById(language);
  const rootRef = useRef<HTMLElement>(null);
  const [result, setResult] = useState<StoredResult | null>(null);
  const [status, setStatus] = useState<string>(copy.result.loading);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const local = window.localStorage.getItem(`philosopher-result:${sessionId}`);
      if (local && !cancelled) {
        const parsed = JSON.parse(local) as StoredResult;
        setResult(parsed);
        setStatus(copy.result.ready);
      }

      const response = await fetch(`/api/results?id=${sessionId}`);
      if (!response.ok) {
        if (!local) setStatus(copy.result.missing);
        return;
      }

      const stored = (await response.json()) as StoredResult;
      if (cancelled) return;
      setResult(stored);
      window.localStorage.setItem(`philosopher-result:${sessionId}`, JSON.stringify(stored));
      setStatus(copy.result.ready);
    }

    load().catch(() => {
      if (!cancelled) setStatus(copy.result.loadError);
    });

    return () => {
      cancelled = true;
    };
  }, [copy.result.loadError, copy.result.missing, copy.result.ready, sessionId]);

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
            {copy.result.retake}
          </Link>
        </div>
      </main>
    );
  }

  const primary = philosopherById[result.topMatches[0].id];
  const secondary = result.topMatches.slice(1);
  const createdDate = formatCreatedDate(result.createdAt, language);
  const dimensions = buildDimensionProfiles(result.axisScores, language);
  const strongestDimensions = [...dimensions].sort((a, b) => b.percentage - a.percentage).slice(0, 2);
  const quietestDimensions = [...dimensions].sort((a, b) => a.percentage - b.percentage).slice(0, 2);
  const commentary = getStaticCommentary(result, language);

  return (
    <main ref={rootRef} className="result-page" style={{ "--philosopher-color": primary.color } as CSSProperties}>
      <nav className="result-nav" aria-label="Result navigation">
        <Link className="text-link result-return-link" href="/">
          {copy.result.return}
        </Link>
        <div className="result-nav-actions">
          <Link className="primary-cta result-retake-link" href="/quiz">
            {copy.result.retake}
          </Link>
          <LanguageToggle />
        </div>
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
          <p className="scribe-line">{copy.result.signature}</p>
          <h1>{primary.name}</h1>
          <p className="primary-label">{primary.shortLabel}</p>
          <p>{primary.description}</p>
          <div className="result-meta-grid" aria-label={copy.result.detailsAria}>
            <div>
              <span>{copy.result.topCluster}</span>
              <strong className="result-percentage">{result.topMatches[0].percentage}%</strong>
            </div>
            <div>
              <span>{copy.result.recorded}</span>
              <strong>{createdDate}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="dimension-section" aria-labelledby="dimension-title">
        <div className="section-kicker dimension-copy">
          <span>{copy.result.hiddenAxes}</span>
          <h2 id="dimension-title">{copy.result.dimensions}</h2>
          <p>{copy.result.dimensionIntro}</p>
          <div className="dimension-extremes" aria-label={copy.result.extremesAria}>
            <div>
              <span>{copy.result.strength}</span>
              <strong>{strongestDimensions.map((dimension) => dimension.label).join(" / ")}</strong>
            </div>
            <div>
              <span>{copy.result.quietEdge}</span>
              <strong>{quietestDimensions.map((dimension) => dimension.label).join(" / ")}</strong>
            </div>
          </div>
        </div>
        <div className="dimension-radar-shell">
          <RadarChart dimensions={dimensions} figureLabel={copy.result.radarFigure} imageLabel={copy.result.radarImage} />
          <div className="dimension-list" aria-label={copy.result.dimensionPercentages}>
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
          <span>{copy.result.constellation}</span>
          <h2>{copy.result.nearbyThinkers}</h2>
        </div>
        <div className="match-grid" aria-label="Secondary philosopher matches">
          {secondary.map((match) => {
            const philosopher = philosopherById[match.id];
            return (
              <article
                className="match-card"
                aria-label={formatTemplate(copy.result.nearbyMatch, {
                  name: philosopher.name,
                  percentage: match.percentage
                })}
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
          <span>{copy.result.readingRoom}</span>
          <h2>{copy.result.quotesTitle}</h2>
        </div>
        <div className="quote-stack">
          {result.topMatches.map((match) => {
            const philosopher = philosopherById[match.id];
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
          <span>{copy.result.interpretation}</span>
          <h2>{copy.result.commentary}</h2>
        </div>
        <div className="commentary-layout">
          <article className="commentary-scroll">
            <h3>{commentary.summary}</h3>
            <p>{commentary.beliefProfile}</p>
          </article>
          <aside className="commentary-insight-panel" aria-label={copy.result.commentaryDetails}>
            <ListBlock title={copy.result.strengths} items={commentary.strengths} />
            <ListBlock title={copy.result.blindSpots} items={commentary.blindSpots} />
            <ListBlock title={copy.result.readNext} items={commentary.recommendedReadings} />
            <p className="disclaimer">{commentary.disclaimer}</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function RadarChart({
  dimensions,
  figureLabel,
  imageLabel
}: {
  dimensions: DimensionProfile[];
  figureLabel: string;
  imageLabel: string;
}) {
  const values = dimensions.map((dimension) => dimension.percentage);
  const axisPoints = dimensions.map((dimension, index) => ({
    dimension,
    outer: radarPoint(index, 100),
    label: radarPoint(index, 100, RADAR_RADIUS + 34)
  }));

  return (
    <figure className="dimension-radar" aria-label={figureLabel}>
      <svg viewBox="0 0 320 320" role="img" aria-label={imageLabel}>
        {[25, 50, 75, 100].map((level) => (
          <polygon className="radar-grid" key={level} points={radarPolygon(Array(dimensions.length).fill(level))} />
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
