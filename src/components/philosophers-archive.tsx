"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { getAppCopy } from "@/lib/app-copy";
import { getLocalizedArchiveDetails, getLocalizedArchiveThreads } from "@/lib/localized-archive";
import { getLocalizedPhilosopherById } from "@/lib/localized-philosophers";
import { archiveOrder } from "@/lib/philosopher-archive";

export function PhilosophersArchive() {
  const { language } = useLanguage();
  const copy = getAppCopy(language);
  const philosopherById = getLocalizedPhilosopherById(language);
  const archiveDetails = getLocalizedArchiveDetails(language);
  const archiveThreads = getLocalizedArchiveThreads(language);
  const archivePhilosophers = archiveOrder.map((id) => philosopherById[id]);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".archive-nav",
        { autoAlpha: 0, y: -18 },
        { autoAlpha: 1, y: 0, duration: 0.58, ease: "power3.out" }
      );

      const heroReveal = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroReveal
        .fromTo(
          ".archive-hero-copy > span",
          { autoAlpha: 0, clipPath: "inset(0 100% 0 0)", filter: "blur(4px)", x: -24 },
          { autoAlpha: 1, clipPath: "inset(0 0% 0 0)", filter: "blur(0px)", x: 0, duration: 0.95 }
        )
        .fromTo(
          ".archive-hero-copy h1",
          { autoAlpha: 0, y: 42, filter: "blur(8px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.55 },
          "-=0.3"
        )
        .fromTo(
          ".archive-hero-copy p",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1.05 },
          "-=0.58"
        );

      gsap.utils.toArray<HTMLElement>(".archive-portrait-link").forEach((link) => {
        gsap.fromTo(
          link,
          { autoAlpha: 0, y: 34, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.62,
            ease: "power3.out",
            scrollTrigger: {
              trigger: link,
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".thinker-panel").forEach((panel) => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0.28, y: 70 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 82%",
              end: "top 42%",
              scrub: 1
            }
          }
        );
      });

      gsap.fromTo(
        ".archive-thread-item",
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.68,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".archive-thread-section",
            start: "top 72%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const finalReveal = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".archive-final-scroll",
          start: "top 58%",
          toggleActions: "play none none reverse"
        }
      });

      finalReveal
        .from(".archive-final-scroll .final-seal", { autoAlpha: 0, y: 28, duration: 0.7 })
        .from(
          ".archive-final-scroll .final-copy > span",
          {
            autoAlpha: 0,
            clipPath: "inset(0 100% 0 0)",
            x: -18,
            duration: 0.62
          },
          "-=0.35"
        )
        .from(
          ".archive-final-scroll .final-copy h2",
          {
            autoAlpha: 0,
            clipPath: "inset(0 0 100% 0)",
            yPercent: 10,
            duration: 0.82
          },
          "-=0.36"
        )
        .from(
          [".archive-final-scroll .final-seal p", ".archive-final-scroll .final-cta"],
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.58,
            stagger: 0.12
          },
          "-=0.32"
        )
        .from(
          ".archive-final-scroll .final-route",
          {
            autoAlpha: 0,
            x: 34,
            duration: 0.68
          },
          "-=0.58"
        )
        .from(
          ".archive-final-scroll .final-route div",
          {
            autoAlpha: 0,
            x: 22,
            duration: 0.46,
            stagger: 0.1
          },
          "-=0.42"
        );
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={rootRef} className="philosophers-archive">
      <div className="archive-paper-grain" aria-hidden="true" />
      <nav className="archive-nav" aria-label={copy.archive.navAria}>
        <Link className="brand-mark" href="/">
          {copy.nav.brand}
        </Link>
        <div>
          <Link href="/philosophers">{copy.nav.philosophers}</Link>
          <Link href="/quiz">{copy.nav.quiz}</Link>
          <Link href="/credits">{copy.nav.credits}</Link>
          <LanguageToggle />
        </div>
      </nav>

      <section className="philosophers-hero" aria-label={copy.archive.heroAria}>
        <div className="archive-hero-copy">
          <span>{copy.archive.heroKicker}</span>
          <h1>{copy.archive.heroTitle}</h1>
          <p>{copy.archive.heroText}</p>
        </div>

      </section>

      <section id="roster" className="archive-roster" aria-label={copy.archive.rosterAria}>
        <div className="archive-section-heading">
          <span>{copy.archive.roster}</span>
          <h2>{copy.archive.selectThinker}</h2>
          <p>{copy.archive.rosterText}</p>
        </div>
        <div className="archive-portrait-grid">
          {archivePhilosophers.map((philosopher) => (
            <Link
              className="archive-portrait-link"
              href={`/philosophers/${philosopher.id}`}
              key={philosopher.id}
              style={{ "--archive-color": philosopher.color } as CSSProperties}
            >
              <Image
                alt={`${philosopher.name} portrait`}
                height={420}
                src={philosopher.cutoutUrl}
                unoptimized
                width={320}
              />
              <span>{philosopher.name}</span>
              <small>{philosopher.era}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="thinker-ledger" aria-label={copy.archive.ledgerAria}>
        {archivePhilosophers.map((philosopher, index) => {
          const detail = archiveDetails[philosopher.id];

          return (
            <article
              className="thinker-panel"
              id={philosopher.id}
              key={philosopher.id}
              style={{ "--archive-color": philosopher.color } as CSSProperties}
            >
              <div className="thinker-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="thinker-image">
                <Image
                  alt={`${philosopher.name} portrait`}
                  height={720}
                  src={philosopher.cutoutUrl}
                  unoptimized
                  width={540}
                />
              </div>
              <div className="thinker-copy">
                <span className="thinker-life">
                  {detail.life} / {detail.place}
                </span>
                <h2>{philosopher.name}</h2>
                <p className="thinker-era">{philosopher.era}</p>
                <div className="thinker-history">
                  <p>{detail.history}</p>
                  <p>{detail.legacy}</p>
                </div>
                <div className="thinker-ideas" aria-label={`${philosopher.name} ${copy.archive.coreIdeas}`}>
                  {detail.ideas.map((idea) => (
                    <span key={idea}>{idea}</span>
                  ))}
                </div>
              </div>
              <aside className="thinker-aside" aria-label={`${philosopher.name} ${copy.archive.quoteReading}`}>
                <Quote aria-hidden="true" />
                <blockquote>{philosopher.quote}</blockquote>
                <cite>{philosopher.quoteNote}</cite>
                <div className="thinker-reading">
                  <BookOpen aria-hidden="true" />
                  <div>
                    <span>{copy.archive.startWith}</span>
                    <strong>{detail.primaryWork}</strong>
                  </div>
                </div>
                <p>{detail.archiveNote}</p>
              </aside>
            </article>
          );
        })}
      </section>

      <section className="archive-thread-section" aria-label={copy.archive.threadsAria}>
        <div className="archive-section-heading">
          <span>{copy.archive.threads}</span>
          <h2>{copy.archive.mapConnects}</h2>
          <p>{copy.archive.mapConnectsText}</p>
        </div>
        <div className="archive-thread-list">
          {archiveThreads.map((thread) => (
            <article className="archive-thread-item" key={thread.title}>
              <h3>{thread.title}</h3>
              <p>{thread.copy}</p>
              <div>
                {thread.ids.map((id) => (
                  <Link href={`/philosophers/${id}`} key={id}>
                    {philosopherById[id].name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-scroll archive-final-scroll" aria-label={copy.archive.finalAria}>
        <div className="final-seal">
          <div className="final-constellation" aria-hidden="true" />
          <div className="final-copy">
            <span>{copy.archive.finalKicker}</span>
            <h2>{copy.archive.finalTitle}</h2>
            <p>{copy.archive.finalText}</p>
            <Link className="primary-cta large final-cta" href="/quiz">
              {copy.landing.takeTest}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="final-route" aria-label={copy.archive.summaryAria}>
            <div>
              <strong>12</strong>
              <span>{copy.landing.thinkers}</span>
            </div>
            <div>
              <strong>3</strong>
              <span>{copy.archive.threads}</span>
            </div>
            <div>
              <strong>30</strong>
              <span>{copy.landing.questions}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
