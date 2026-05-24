"use client";

import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import type { Group } from "three";

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

export function LandingExperience() {
  const rootRef = useRef<HTMLElement>(null);

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
        .to(".hero-copy", { y: -80, opacity: 0, ease: "none" }, 0.18)
        .to(".hero-stage", { y: 90, opacity: 0, ease: "none" }, 0.22);

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
                Enter the scroll
              </a>
            </div>
          </div>
          <div className="hero-stage" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <ambientLight intensity={1.6} />
              <directionalLight position={[4, 5, 5]} intensity={2.8} color="#ffd08a" />
              <ParchmentScene />
              <Environment preset="warehouse" />
            </Canvas>
          </div>
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

function ParchmentScene() {
  const group = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = pointer.x * 0.18 + Math.sin(clock.elapsedTime * 0.3) * 0.05;
    group.current.rotation.x = -pointer.y * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh position={[0, 0.1, 0]} rotation={[0.2, -0.28, -0.08]}>
          <boxGeometry args={[4.7, 3.1, 0.05]} />
          <meshStandardMaterial color="#d9ad68" roughness={0.85} metalness={0.05} />
        </mesh>
        <mesh position={[-1.35, 0.68, 0.09]} rotation={[0.2, -0.28, -0.08]}>
          <torusGeometry args={[0.38, 0.008, 8, 80]} />
          <meshStandardMaterial color="#6c341f" roughness={0.9} />
        </mesh>
        <mesh position={[1.05, -0.72, 0.12]} rotation={[0.2, -0.28, -0.08]}>
          <torusGeometry args={[0.62, 0.01, 8, 100]} />
          <meshStandardMaterial color="#6f5b32" roughness={0.9} />
        </mesh>
      </Float>
      <Float speed={1.7} rotationIntensity={0.35} floatIntensity={0.7}>
        <mesh position={[-1.9, -1.15, 0.7]} rotation={[0.5, 0.2, 0.18]}>
          <cylinderGeometry args={[0.26, 0.34, 1.3, 32]} />
          <meshStandardMaterial color="#c8b69a" roughness={0.72} />
        </mesh>
      </Float>
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh position={[2.1, 1.15, -0.2]} rotation={[0.1, -0.4, 0.35]}>
          <boxGeometry args={[1.15, 0.72, 0.03]} />
          <meshStandardMaterial color="#c89452" roughness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}
