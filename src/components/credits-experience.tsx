"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { ArrowLeft, ExternalLink, FileText, ScrollText } from "lucide-react";
import { PHILOSOPHERS } from "@/lib/philosophers";

const featuredPhilosophers = PHILOSOPHERS.filter((philosopher) =>
  ["marx", "lenin", "beauvoir"].includes(philosopher.id)
);

const creditFacts = [
  {
    label: "Portrait source links",
    value: PHILOSOPHERS.length.toString().padStart(2, "0"),
    copy: "Every thinker keeps a visible source trail."
  },
  {
    label: "Generated asset scope",
    value: "Map",
    copy: "Prompts stay limited to parchment, scroll, atlas, and abstract interface materials."
  },
  {
    label: "Release check",
    value: "Required",
    copy: "Final selected files still need license and attribution review before public release."
  }
];

const assetNotes = [
  {
    title: "Portraits",
    copy: "Wikimedia Commons source pages are linked where possible so each image can be traced back to its file record."
  },
  {
    title: "Local replacements",
    copy: "Lenin and Engels currently use local source images in the public folder, with their original source pages still listed below."
  },
  {
    title: "Generated materials",
    copy: "Generated visual work stays limited to atmosphere and interface texture: parchment, maps, scrolls, routes, and abstract UI elements."
  }
];

export function CreditsExperience() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const heroReveal = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroReveal
        .from(".credits-nav", { autoAlpha: 0, y: -18, duration: 0.58 })
        .from(
          ".credits-hero-copy .credits-kicker",
          { autoAlpha: 0, x: -26, clipPath: "inset(0 100% 0 0)", duration: 0.58 },
          "-=0.2"
        )
        .from(
          ".credits-hero h1",
          { autoAlpha: 0, y: 44, filter: "blur(8px)", duration: 1.15 },
          "-=0.14"
        )
        .from(".credits-hero-copy p", { autoAlpha: 0, y: 22, duration: 0.68 }, "-=0.58")
        .from(".credits-actions > *", { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.08 }, "-=0.34")
        .from(
          ".credits-featured-portrait",
          { autoAlpha: 0, y: 64, rotate: -3, scale: 0.92, duration: 0.86, stagger: 0.12 },
          "-=0.78"
        )
        .from(".credits-source-ribbon span", { autoAlpha: 0, x: 22, duration: 0.42, stagger: 0.08 }, "-=0.4");

      gsap.to(".credits-map-layer", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".credits-page",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });

      gsap.to(".credits-hero-art", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: ".credits-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.from(".credits-fact", {
        autoAlpha: 0,
        y: 42,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".credits-summary",
          start: "top 78%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.utils.toArray<HTMLElement>(".credits-policy-item").forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          x: 42,
          duration: 0.62,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse"
          }
        });
      });

      gsap.utils.toArray<HTMLElement>(".credits-source-row").forEach((row) => {
        gsap.from(row, {
          autoAlpha: 0,
          y: 34,
          duration: 0.54,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            toggleActions: "play none none reverse"
          }
        });
      });

      gsap.from(".credits-final > *", {
        autoAlpha: 0,
        y: 34,
        duration: 0.68,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".credits-final",
          start: "top 78%",
          toggleActions: "play none none reverse"
        }
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={rootRef} className="credits-page">
      <div className="credits-map-layer" aria-hidden="true" />
      <nav className="credits-nav" aria-label="Credits navigation">
        <Link className="brand-mark" href="/">
          Philosopher Atlas
        </Link>
        <div>
          <Link href="/philosophers">Philosophers</Link>
          <Link href="/quiz">Quiz</Link>
          <a href="#source-ledger">Sources</a>
        </div>
      </nav>

      <section className="credits-hero" aria-label="Credits overview">
        <div className="credits-hero-copy">
          <span className="credits-kicker">Asset ledger</span>
          <h1>Credits</h1>
          <p>
            A transparent source room for the portraits, generated atlas textures, and release notes behind
            Philosopher Atlas.
          </p>
          <div className="credits-actions">
            <a className="primary-cta" href="#source-ledger">
              <ScrollText aria-hidden="true" />
              View Source Ledger
            </a>
            <Link className="secondary-cta credits-secondary-cta" href="/">
              <ArrowLeft aria-hidden="true" />
              Back to the Map
            </Link>
          </div>
        </div>

        <div className="credits-hero-art" aria-hidden="true">
          <div className="credits-portrait-cloud">
            {featuredPhilosophers.map((philosopher) => (
              <Image
                alt=""
                className="credits-featured-portrait"
                height={560}
                key={philosopher.id}
                src={philosopher.portraitUrl}
                unoptimized
                width={420}
              />
            ))}
          </div>
          <div className="credits-source-ribbon">
            <span>Wikimedia Commons</span>
            <span>Generated atlas textures</span>
            <span>Local release checks</span>
          </div>
        </div>
      </section>

      <section className="credits-summary" aria-label="Asset summary">
        {creditFacts.map((fact) => (
          <article className="credits-fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
            <p>{fact.copy}</p>
          </article>
        ))}
      </section>

      <section className="credits-policy" aria-label="Asset policy notes">
        <div className="credits-policy-heading">
          <span className="credits-kicker">Notes before release</span>
          <h2>Sources stay visible so the atlas can stay honest.</h2>
        </div>
        <div className="credits-policy-list">
          {assetNotes.map((note, index) => (
            <article className="credits-policy-item" key={note.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="source-ledger" className="credits-ledger-section" aria-label="Philosopher portrait source ledger">
        <div className="credits-ledger-heading">
          <span className="credits-kicker">Portrait sources</span>
          <h2>Every thinker keeps a visible trail.</h2>
          <p>
            These links open Wikimedia file pages instead of direct image endpoints, so source records and license
            notes remain reachable.
          </p>
        </div>

        <div className="credits-ledger">
          {PHILOSOPHERS.map((philosopher, index) => {
            return (
              <article
                className="credits-source-row"
                key={philosopher.id}
                style={{ "--credit-color": philosopher.color } as CSSProperties}
              >
                <span className="credits-source-index">{String(index + 1).padStart(2, "0")}</span>
                <Image
                  alt={`${philosopher.name} portrait preview`}
                  className="credits-source-thumb"
                  height={160}
                  src={philosopher.cutoutUrl}
                  unoptimized
                  width={130}
                />
                <div className="credits-source-copy">
                  <h3>{philosopher.name}</h3>
                  <p>{philosopher.era}</p>
                </div>
                <a className="credits-source-link" href={philosopher.sourceUrl} rel="noreferrer" target="_blank">
                  <FileText aria-hidden="true" />
                  <span>Source page</span>
                  <ExternalLink aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="credits-final" aria-label="Credits closing note">
        <div>
          <span className="credits-kicker">Keep the archive clean</span>
          <h2>Replace anything uncertain before release.</h2>
          <p>
            If a final image cannot be attributed clearly, swap it for a safer public-domain, commissioned,
            or generated alternative before shipping.
          </p>
        </div>
        <Link className="primary-cta credits-final-cta" href="/">
          <ArrowLeft aria-hidden="true" />
          Back to the Map
        </Link>
      </section>
    </main>
  );
}
