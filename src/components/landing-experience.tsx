"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { PHILOSOPHER_BY_ID } from "@/lib/philosophers";
import type { PhilosopherId } from "@/lib/types";

const chapters = [
  {
    title: "What is philosophy?",
    answer:
      "A disciplined way of asking what is real, what can be known, and what kind of life deserves your loyalty.",
    note: "The quiz begins with the habit behind every answer: how you decide what deserves to be called true.",
    signal: "Truth, value, method",
    mark: "I"
  },
  {
    title: "Matter and consciousness",
    answer:
      "The old divide between thought and world: whether ideas command history, or material life gives ideas their shape.",
    note: "This is where worldview becomes a map: spirit, nature, labor, memory, and the conditions that shape thought.",
    signal: "Worldview, labor, perception",
    mark: "II"
  },
  {
    title: "Contradiction and development",
    answer:
      "A world in motion cannot be understood by still categories. Tension is often the pressure by which things become otherwise.",
    note: "Here the test listens for whether you see conflict as error, tragedy, discipline, or the engine of change.",
    signal: "Movement, negation, change",
    mark: "III"
  },
  {
    title: "Society, class, and the state",
    answer:
      "No self floats alone. Work, power, institutions, and shared history write themselves into private life.",
    note: "Your answers start to reveal how you read authority: as order, alienation, duty, violence, or collective form.",
    signal: "Power, history, collective life",
    mark: "IV"
  },
  {
    title: "Human beings and liberation",
    answer:
      "The final question is personal: what kind of freedom do your answers keep trying to defend?",
    note: "By the end, the result is less a label than a portrait of the freedom you keep returning to.",
    signal: "Freedom, responsibility, becoming",
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
  const lenisRef = useRef<Lenis | null>(null);

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

    if (lenisRef.current) {
      lenisRef.current.scrollTo(pathSection, {
        duration: 1.65,
        easing: (t: number) => 1 - Math.pow(1 - t, 4)
      });
      return;
    }

    pathSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    lenisRef.current = lenis;
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
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
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
          </div>
          <a className="hero-scroll-cue" href="#path" onClick={handleRevealPathClick}>
            <span>Reveal the path</span>
            <ChevronDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="path"
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
        <div className="story-track">
          {chapters.map((chapter, index) => (
            <article className="story-card" key={chapter.title}>
              <div className="chapter-title-side">
                <span className="chapter-rule">Chapter {String(index + 1).padStart(2, "0")}</span>
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
            <span>The atlas resolves</span>
            <h2>Find the thinker your answers have been tracing.</h2>
            <p>
              Open a scored result with your closest philosopher, neighboring influences, selected quotes,
              and a short reflection on the pattern behind your choices.
            </p>
            <Link className="primary-cta large final-cta" href="/quiz">
              Take the Test
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="final-route" aria-label="Result summary">
            <div>
              <strong>30</strong>
              <span>questions</span>
            </div>
            <div>
              <strong>6</strong>
              <span>hidden axes</span>
            </div>
            <div>
              <strong>12</strong>
              <span>thinkers</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
