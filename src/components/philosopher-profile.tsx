"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, FileText, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { formatTemplate, getAppCopy } from "@/lib/app-copy";
import { getLocalizedArchiveDetails, getLocalizedArchiveThreads } from "@/lib/localized-archive";
import { getLocalizedPhilosopherById } from "@/lib/localized-philosophers";
import { archiveOrder } from "@/lib/philosopher-archive";
import type { PhilosopherId } from "@/lib/types";

type PhilosopherProfileProps = {
  philosopherId: PhilosopherId;
};

export function PhilosopherProfile({ philosopherId }: PhilosopherProfileProps) {
  const { language } = useLanguage();
  const copy = getAppCopy(language);
  const philosopherById = getLocalizedPhilosopherById(language);
  const archiveDetails = getLocalizedArchiveDetails(language);
  const archiveThreads = getLocalizedArchiveThreads(language);
  const rootRef = useRef<HTMLElement>(null);
  const philosopher = philosopherById[philosopherId];
  const detail = archiveDetails[philosopherId];
  const index = archiveOrder.indexOf(philosopherId);
  const previousId = archiveOrder[(index - 1 + archiveOrder.length) % archiveOrder.length];
  const nextId = archiveOrder[(index + 1) % archiveOrder.length];
  const relatedThreads = archiveThreads.filter((thread) => thread.ids.includes(philosopherId));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".profile-nav",
        { autoAlpha: 0, y: -18 },
        { autoAlpha: 1, y: 0, duration: 0.58, ease: "power3.out" }
      );

      gsap.fromTo(
        ".profile-hero-copy > *",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09, ease: "power3.out" }
      );

      gsap.fromTo(
        ".profile-portrait-stage",
        { autoAlpha: 0, y: 42, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.86, ease: "power3.out" }
      );

      gsap.utils.toArray<HTMLElement>(".profile-reveal").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 46 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.68,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="philosopher-profile"
      style={{ "--archive-color": philosopher.color } as CSSProperties}
    >
      <div className="archive-paper-grain" aria-hidden="true" />
      <nav className="top-nav profile-nav" aria-label={formatTemplate(copy.profile.navigation, { name: philosopher.name })}>
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

      <section className="profile-hero" aria-label={formatTemplate(copy.profile.profileAria, { name: philosopher.name })}>
        <div className="profile-hero-copy">
          <span>{detail.life} / {detail.place}</span>
          <h1>{philosopher.name}</h1>
          <p className="profile-era">{philosopher.era}</p>
          <p>{detail.history}</p>
          <div className="profile-hero-actions">
            <Link className="primary-cta" href="#history">
              {copy.profile.readHistory}
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="secondary-cta" href="/philosophers">
              {copy.profile.fullIndex}
            </Link>
          </div>
        </div>

        <div className="profile-portrait-stage" aria-hidden="true">
          <Image
            alt=""
            height={780}
            src={philosopher.cutoutUrl}
            unoptimized
            width={580}
          />
        </div>
      </section>

      <section className="profile-quote-band profile-reveal" aria-label={formatTemplate(copy.profile.quoteAria, { name: philosopher.name })}>
        <Quote aria-hidden="true" />
        <blockquote>{detail.quotes[0].text}</blockquote>
        <cite>
          {detail.quotes[0].work} / {detail.quotes[0].note}
        </cite>
      </section>

      <section id="history" className="profile-history-section profile-reveal" aria-label={formatTemplate(copy.profile.historyAria, { name: philosopher.name })}>
        <div className="profile-section-heading">
          <span>{copy.profile.history}</span>
          <h2>{copy.profile.historyTitle}</h2>
        </div>
        <div className="profile-history-copy">
          {detail.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="profile-timeline-section profile-reveal" aria-label={formatTemplate(copy.profile.timelineAria, { name: philosopher.name })}>
        <div className="profile-section-heading">
          <span>{copy.profile.timeline}</span>
          <h2>{copy.profile.timelineTitle}</h2>
        </div>
        <div className="profile-timeline">
          {detail.timeline.map((event, eventIndex) => (
            <article className="profile-timeline-item" key={`${event.year}-${event.title}`}>
              <span>{String(eventIndex + 1).padStart(2, "0")}</span>
              <time>{event.year}</time>
              <div>
                <h3>{event.title}</h3>
                <p>{event.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-detail-grid profile-reveal" aria-label={formatTemplate(copy.profile.ideasAria, { name: philosopher.name })}>
        <div className="profile-idea-panel">
          <span>{copy.profile.coreIdeas}</span>
          <div>
            {detail.ideas.map((idea) => (
              <Link href={`/philosophers/${philosopherId}#history`} key={idea}>
                {idea}
              </Link>
            ))}
          </div>
        </div>

        <div className="profile-reading-panel">
          <BookOpen aria-hidden="true" />
          <span>{copy.profile.startWith}</span>
          <h2>{detail.primaryWork}</h2>
          <p>{detail.archiveNote}</p>
        </div>
      </section>

      <section className="profile-quote-section profile-reveal" aria-label={formatTemplate(copy.profile.quotesAria, { name: philosopher.name })}>
        <div className="profile-section-heading">
          <span>{copy.profile.quotes}</span>
          <h2>{copy.profile.quotesTitle}</h2>
        </div>
        <div className="profile-quote-grid">
          {detail.quotes.map((quote, quoteIndex) => (
            <article className="profile-quote-card" key={`${quote.work}-${quote.text}`}>
              <span>{String(quoteIndex + 1).padStart(2, "0")}</span>
              <blockquote>{quote.text}</blockquote>
              <cite>{quote.work}</cite>
              <p>{quote.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-thread-section profile-reveal" aria-label={formatTemplate(copy.profile.threadsAria, { name: philosopher.name })}>
        <div className="profile-section-heading">
          <span>{copy.profile.threads}</span>
          <h2>{copy.profile.threadsTitle}</h2>
        </div>
        <div className="profile-thread-list">
          {relatedThreads.map((thread) => (
            <article className="profile-thread-item" key={thread.title}>
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

      <section className="profile-source-section profile-reveal" aria-label={formatTemplate(copy.profile.sourcesAria, { name: philosopher.name })}>
        <div className="profile-section-heading">
          <span>{copy.profile.sources}</span>
          <h2>{copy.profile.sourcesTitle}</h2>
        </div>
        <div className="profile-source-list">
          {detail.sources.map((source) => (
            <a href={source.url} key={source.url} rel="noreferrer" target="_blank">
              <FileText aria-hidden="true" />
              <div>
                <span>{copy.sourceTypes[source.type]}</span>
                <strong>{source.label}</strong>
                <p>{source.note}</p>
              </div>
              <ExternalLink aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="profile-next-section profile-reveal" aria-label={copy.profile.neighborsAria}>
        <Link href={`/philosophers/${previousId}`}>
          <ArrowLeft aria-hidden="true" />
          <span>{philosopherById[previousId].name}</span>
        </Link>
        <Link href={`/philosophers/${nextId}`}>
          <span>{philosopherById[nextId].name}</span>
          <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
