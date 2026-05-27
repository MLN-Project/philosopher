"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { getAppCopy, getLandingChapters } from "@/lib/app-copy";
import { getLocalizedPhilosopherById } from "@/lib/localized-philosophers";
import { scrollToSmoothTarget } from "@/lib/smooth-scroll";
import type { PhilosopherId } from "@/lib/types";

const timelinePhilosophers: PhilosopherId[] = [
  "plato",
  "aristotle",
  "confucius",
  "laozi",
  "hegel",
  "feuerbach",
  "marx",
  "engels",
  "lenin",
  "nietzsche",
  "beauvoir",
  "sartre"
];

export function LandingExperience() {
  const router = useRouter();
  const { language } = useLanguage();
  const copy = getAppCopy(language);
  const chapters = getLandingChapters(language);
  const philosopherById = getLocalizedPhilosopherById(language);
  const rootRef = useRef<HTMLElement>(null);
  const pathSectionRef = useRef<HTMLElement>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handlePathPointerMove = (event: PointerEvent<HTMLElement>) => {
    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    section.style.setProperty("--grid-x", `${event.clientX - rect.left}px`);
    section.style.setProperty("--grid-y", `${event.clientY - rect.top}px`);
    section.classList.add("is-grid-active");
  };

  const handlePathPointerLeave = () => {
    pathSectionRef.current?.classList.remove("is-grid-active");
  };

  const handleRevealPathClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const pathSection = pathSectionRef.current;
    if (!pathSection) return;

    const shouldReduceMotion = prefersReducedMotion();

    if (!shouldReduceMotion && scrollToSmoothTarget(pathSection)) {
      return;
    }

    pathSection.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
  };

  const handlePhilosopherPageClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const href = event.currentTarget.getAttribute("href") ?? "/philosophers";
    event.preventDefault();

    if (prefersReducedMotion()) {
      router.push(href);
      return;
    }

    const root = rootRef.current;
    if (!root) {
      router.push(href);
      return;
    }

    root.style.setProperty("--transition-x", `${event.clientX}px`);
    root.style.setProperty("--transition-y", `${event.clientY}px`);
    root.classList.add("is-page-exiting");

    transitionTimeoutRef.current = window.setTimeout(() => {
      router.push(href);
    }, 560);
  };

  useEffect(() => {
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        })
        .to(".hero-video", { scale: 1.16, filter: "sepia(0.55) saturate(0.72) brightness(0.62)", ease: "none" }, 0)
        .to(".video-vignette", { opacity: 0.86, ease: "none" }, 0)
        .to(".hero-copy", { y: -80, opacity: 0, ease: "none" }, 0.18)
        .to(".hero-scroll-cue", { y: 38, opacity: 0, ease: "none" }, 0.1);

      gsap.utils.toArray<HTMLElement>(".story-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.25, y: 80, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              end: "bottom 46%",
              scrub: 1
            }
          }
        );
      });

      gsap.fromTo(
        ".route-thread",
        { scaleY: 0, opacity: 0.2 },
        {
          scaleY: 1,
          opacity: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: ".philosopher-path-section",
            start: "top 62%",
            end: "bottom 58%",
            scrub: 1
          }
        }
      );

      gsap.utils.toArray<HTMLElement>(".philosopher-node").forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0.3, y: 52, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 78%",
              end: "top 48%",
              scrub: 1
            }
          }
        );
      });

      gsap.to(".landing-shell", {
        "--paper-warmth": "#f7e6bd",
        "--ink": "#24140f",
        "--accent": "#9f241c",
        scrollTrigger: {
          trigger: ".final-scroll",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true
        }
      });

      const finalReveal = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".final-scroll",
          start: "top 58%",
          toggleActions: "play none none reverse"
        }
      });

      finalReveal
        .from(".final-seal", { autoAlpha: 0, y: 28, duration: 0.7 })
        .from(
          ".final-copy > span",
          {
            autoAlpha: 0,
            clipPath: "inset(0 100% 0 0)",
            x: -18,
            duration: 0.62
          },
          "-=0.35"
        )
        .from(
          ".final-copy h2",
          {
            autoAlpha: 0,
            clipPath: "inset(0 0 100% 0)",
            yPercent: 10,
            duration: 0.82
          },
          "-=0.36"
        )
        .from(
          [".final-seal p", ".final-cta"],
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.58,
            stagger: 0.12
          },
          "-=0.32"
        )
        .from(
          ".final-route",
          {
            autoAlpha: 0,
            x: 34,
            duration: 0.68
          },
          "-=0.58"
        )
        .from(
          ".final-route div",
          {
            autoAlpha: 0,
            x: 22,
            duration: 0.46,
            stagger: 0.1
          },
          "-=0.42"
        );
    }, rootRef);

    return () => {
      context.revert();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main ref={rootRef} className="landing-shell">
      <div className="map-noise" aria-hidden="true" />
      <section className="hero-section">
        <div className="hero-sticky">
          <div className="video-background" aria-hidden="true">
            <video
              autoPlay
              className="hero-video"
              loop
              muted
              playsInline
              preload="auto"
              src="/videos/map-transition-philosopher-places.mp4"
            />
            <div className="video-vignette" />
            <div className="video-paper-grain" />
          </div>
          <nav className="top-nav" aria-label={copy.landing.navAria}>
            <span className="brand-mark">{copy.nav.brand}</span>
            <div>
              <Link href="/philosophers">{copy.nav.philosophers}</Link>
              <Link href="/quiz">{copy.nav.quiz}</Link>
              <Link href="/credits">{copy.nav.credits}</Link>
              <LanguageToggle />
            </div>
          </nav>
          <div className="hero-copy">
            <p className="scribe-line">{copy.landing.heroScribe}</p>
            <h1>{copy.landing.heroTitle}</h1>
            <p className="hero-text">{copy.landing.heroText}</p>
          </div>
          <a className="hero-scroll-cue" href="#path" onClick={handleRevealPathClick}>
            <span>{copy.landing.revealPath}</span>
            <ChevronDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="path"
        ref={pathSectionRef}
        className="philosopher-path-section"
        aria-label={copy.landing.pathAria}
        onPointerLeave={handlePathPointerLeave}
        onPointerMove={handlePathPointerMove}
      >
        <div className="path-grid-texture" aria-hidden="true" />
        <div className="path-intro">
          <span>{copy.landing.pathKicker}</span>
          <h2>{copy.landing.pathTitle}</h2>
          <p>{copy.landing.pathText}</p>
        </div>
        <div className="philosopher-path">
          <div className="route-thread" aria-hidden="true" />
          {timelinePhilosophers.map((id) => {
            const philosopher = philosopherById[id];
            return (
              <article className="philosopher-node" key={id}>
                <Link
                  aria-label={`${copy.landing.explore} ${philosopher.name}`}
                  className="node-portrait philosopher-portrait-link"
                  href={`/philosophers/${id}`}
                  onClick={handlePhilosopherPageClick}
                >
                  <Image
                    alt={`${philosopher.name} portrait`}
                    height={680}
                    src={philosopher.cutoutUrl}
                    unoptimized
                    width={520}
                  />
                </Link>
                <div className="node-copy">
                  <p className="node-era">{philosopher.era}</p>
                  <h3>{philosopher.name}</h3>
                  <p>{philosopher.description}</p>
                  <blockquote>{philosopher.shortLabel}</blockquote>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="story" className="story-section" aria-label={copy.landing.storyAria}>
        <div className="story-track">
          {chapters.map((chapter, index) => (
            <article className="story-card" key={chapter.title}>
              <div className="chapter-title-side">
                <span className="chapter-rule">
                  {copy.landing.chapterLabel} {String(index + 1).padStart(2, "0")}
                </span>
                <span className="chapter-mark">{chapter.mark}</span>
                <h2>{chapter.title}</h2>
              </div>
              <div className="chapter-answer-side">
                <span>{chapter.signal}</span>
                <p className="chapter-answer">{chapter.answer}</p>
                <p className="chapter-note">{chapter.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-scroll">
        <div className="final-seal">
          <div className="final-constellation" aria-hidden="true" />
          <div className="final-copy">
            <span>{copy.landing.finalKicker}</span>
            <h2>{copy.landing.finalTitle}</h2>
            <p>{copy.landing.finalText}</p>
            <Link className="primary-cta large final-cta" href="/quiz">
              {copy.landing.takeTest}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="final-route" aria-label={copy.landing.resultSummaryAria}>
            <div>
              <strong>30</strong>
              <span>{copy.landing.questions}</span>
            </div>
            <div>
              <strong>6</strong>
              <span>{copy.landing.hiddenAxes}</span>
            </div>
            <div>
              <strong>12</strong>
              <span>{copy.landing.thinkers}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
