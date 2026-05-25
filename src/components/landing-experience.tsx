"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { PHILOSOPHER_BY_ID } from "@/lib/philosophers";
import type { PhilosopherId } from "@/lib/types";

const chapters = [
  {
    title: "What is philosophy?",
    text: "Not trivia, but a way of asking what reality is, how people know it, and why life should be lived one way rather than another.",
    mark: "I"
  },
  {
    title: "Matter and consciousness",
    text: "The old question returns: do ideas rule life, or does material life give ideas their shape?",
    mark: "II"
  },
  {
    title: "Contradiction and development",
    text: "A world in motion is not explained by still categories. Contradictions pressure things to become otherwise.",
    mark: "III"
  },
  {
    title: "Society, class, and the state",
    text: "The self is never floating alone. Work, power, institutions, and shared history write themselves into private life.",
    mark: "IV"
  },
  {
    title: "Human beings and liberation",
    text: "The final question is personal: what kind of freedom do your answers keep trying to defend?",
    mark: "V"
  }
];

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
  const rootRef = useRef<HTMLElement>(null);
  const pathSectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

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
        .to(".hero-copy", { y: -80, opacity: 0, ease: "none" }, 0.18);

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
        "--paper-warmth": "#2d1711",
        "--ink": "#fff2d2",
        "--accent": "#f1b35a",
        scrollTrigger: {
          trigger: ".final-scroll",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true
        }
      });

      gsap.fromTo(
        ".final-seal",
        { scale: 0.74, rotate: -8, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".final-scroll",
            start: "top 60%",
            end: "top 20%",
            scrub: 1
          }
        }
      );
    }, rootRef);

    return () => {
      context.revert();
      cancelAnimationFrame(frame);
      lenis.destroy();
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
          <nav className="top-nav" aria-label="Main navigation">
            <span className="brand-mark">Philosopher Atlas</span>
            <div>
              <Link href="/quiz">Quiz</Link>
              <Link href="/credits">Credits</Link>
            </div>
          </nav>
          <div className="hero-copy">
            <p className="scribe-line">A cinematic personality test through ancient questions and material history.</p>
            <h1>Which philosopher is hidden in your way of seeing the world?</h1>
            <p className="hero-text">
              Walk through a parchment map of ideas, contradiction, society, power, and freedom. At the end,
              your answers are scored against twelve thinkers from Plato to Marx, Lenin, Beauvoir, Laozi, and Sartre.
            </p>
            <div className="hero-actions">
              <Link className="primary-cta" href="/quiz">
                Take the Test
              </Link>
              <a className="secondary-cta" href="#story">
                Enter the path
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={pathSectionRef}
        className="philosopher-path-section"
        aria-label="Connected philosopher timeline"
        onPointerLeave={handlePathPointerLeave}
        onPointerMove={handlePathPointerMove}
      >
        <div className="path-grid-texture" aria-hidden="true" />
        <div className="path-intro">
          <span>Follow the line</span>
          <h2>A path of thinkers across the map</h2>
          <p>
            As you scroll, the route moves from ancient ideals and virtue, through dialectics and materialism,
            toward freedom, critique, and existence.
          </p>
        </div>
        <div className="philosopher-path">
          <div className="route-thread" aria-hidden="true" />
          {timelinePhilosophers.map((id) => {
            const philosopher = PHILOSOPHER_BY_ID[id];
            return (
              <article className="philosopher-node" key={id}>
                <div className="node-portrait">
                  <Image
                    alt={`${philosopher.name} portrait`}
                    height={680}
                    src={philosopher.cutoutUrl}
                    unoptimized
                    width={520}
                  />
                </div>
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

      <section id="story" className="story-section" aria-label="Philosophy story chapters">
        {chapters.map((chapter, index) => (
          <article className="story-card" key={chapter.title}>
            <span className="chapter-mark">{chapter.mark}</span>
            <div>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
              <span className="chapter-rule">Scroll depth {index + 1}/5</span>
            </div>
          </article>
        ))}
      </section>

      <section className="final-scroll">
        <div className="final-seal">
          <span>The map closes.</span>
          <h2>Your answers become a philosophical portrait.</h2>
          <p>
            Thirty questions. Six hidden axes. One dominant match, three neighboring thinkers, quotes, and
            reflective commentary shaped by your result.
          </p>
          <Link className="primary-cta large" href="/quiz">
            Take the Test
          </Link>
        </div>
      </section>
    </main>
  );
}
