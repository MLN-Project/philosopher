"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties, MouseEvent } from "react";
import { useEffect, useRef } from "react";
import { ArrowLeft, ChevronDown, ExternalLink, FileText } from "lucide-react";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { getAppCopy } from "@/lib/app-copy";
import { getLocalizedArchiveDetails } from "@/lib/localized-archive";
import { getLocalizedPhilosophers } from "@/lib/localized-philosophers";
import { scrollToSmoothTarget } from "@/lib/smooth-scroll";
import { archiveOrder } from "@/lib/philosopher-archive";
import type { Language } from "@/lib/i18n";

function getAssetNotes(language: Language) {
  if (language === "vi") {
    return [
      {
        title: "Chân dung",
        copy: "Mỗi chân dung đều có đường dẫn đến trang tiểu sử nơi ảnh được nhúng, để người xem kiểm tra nguồn mà không mở trực tiếp tệp ảnh."
      },
      {
        title: "Ảnh thay thế cục bộ",
        copy: "Lenin và Engels đang dùng ảnh lưu trong thư mục public; các trang nguồn gốc vẫn được giữ trong sổ nguồn bên dưới."
      },
      {
        title: "Chất liệu tạo bằng AI",
        copy: "Phần hình ảnh tạo bằng AI chỉ dùng cho không khí và chất liệu giao diện: giấy da, bản đồ, cuộn giấy, tuyến đường và các chi tiết trừu tượng."
      },
      {
        title: "Tạo video",
        copy: "Google Flow được dùng để tạo video cho các đoạn chuyển động trong bản đồ."
      },
      {
        title: "Ghi chú ý tưởng",
        copy: "Ý tưởng ban đầu của bản đồ và phần lên ý tưởng cho câu hỏi trắc nghiệm được giữ lại như một nguồn làm việc.",
        href: "https://www.perplexity.ai/spaces/mln-aGASaXElTLOfyA_O6Ob02Q/27152611-b1f3-4b65-bd1c-d087890dacea",
        linkLabel: "Mở nguồn Perplexity"
      },
      {
        title: "Liên kết nghiên cứu",
        copy: "Mỗi hồ sơ triết gia liệt kê nguồn nghiên cứu và văn bản gốc dùng cho phần tiểu sử, trích dẫn và dòng thời gian."
      }
    ];
  }

  return [
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
    },
    {
      title: "Video generation",
      copy: "Google Flow was used for video generation in the atlas motion assets."
    },
    {
      title: "Concept brainstorming",
      copy: "The original atlas concept and quiz-question brainstorming are kept linked as a working source.",
      href: "https://www.perplexity.ai/spaces/mln-aGASaXElTLOfyA_O6Ob02Q/27152611-b1f3-4b65-bd1c-d087890dacea",
      linkLabel: "Open Perplexity source"
    },
    {
      title: "Research links",
      copy: "Each philosopher profile now lists the research and primary-text links used for the expanded history, quote labels, and timeline."
    }
  ];
}

export function CreditsExperience() {
  const { language } = useLanguage();
  const copy = getAppCopy(language);
  const philosophers = getLocalizedPhilosophers(language);
  const archiveDetails = getLocalizedArchiveDetails(language);
  const featuredPhilosophers = philosophers.filter((philosopher) =>
    ["marx", "lenin", "beauvoir"].includes(philosopher.id)
  );
  const researchSources = archiveOrder.flatMap((id) =>
    archiveDetails[id].sources.map((source) => ({
      ...source,
      philosopherId: id
    }))
  );
  const creditFacts = [
    {
      label: language === "vi" ? "Nguồn chân dung" : "Portrait source links",
      value: philosophers.length.toString().padStart(2, "0"),
      copy: language === "vi" ? "Mỗi chân dung đều có đường dẫn kiểm chứng rõ ràng." : "Every thinker keeps a visible source trail."
    },
    {
      label: language === "vi" ? "Nguồn nghiên cứu" : "Research sources",
      value: researchSources.length.toString().padStart(2, "0"),
      copy:
        language === "vi"
          ? "Tiểu sử và ghi chú trích dẫn đều quay lại các nguồn đã kiểm."
          : "Profile histories and quote notes point back to checked references."
    },
    {
      label: language === "vi" ? "Phạm vi AI" : "Generated asset scope",
      value: language === "vi" ? "Bản đồ" : "Map",
      copy:
        language === "vi"
          ? "Prompt chỉ dùng cho giấy da, cuộn giấy, bản đồ và chất liệu giao diện trừu tượng."
          : "Prompts stay limited to parchment, scroll, atlas, and abstract interface materials."
    }
  ];
  const assetNotes = getAssetNotes(language);
  const rootRef = useRef<HTMLElement>(null);
  const sourceLedgerRef = useRef<HTMLElement>(null);

  const handleViewSourceClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const sourceLedger = sourceLedgerRef.current;
    if (!sourceLedger) return;

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!shouldReduceMotion && scrollToSmoothTarget(sourceLedger)) {
      return;
    }

    sourceLedger.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
  };

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
        .from(
          ".credits-featured-portrait",
          { autoAlpha: 0, y: 64, rotate: -3, scale: 0.92, duration: 0.86, stagger: 0.12 },
          "-=0.78"
        )
        .fromTo(
          ".credits-scroll-cue",
          { autoAlpha: 0, xPercent: -50, y: 18 },
          { autoAlpha: 1, xPercent: -50, y: 0, duration: 0.58 },
          "-=0.16"
        );

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".credits-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        })
        .to(".credits-hero-art", { yPercent: -7, ease: "none" }, 0)
        .to(".credits-hero > .credits-scroll-cue", { y: 38, autoAlpha: 0, ease: "none" }, 0.1);

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
    <main ref={rootRef} className="credits-page" data-language={language}>
      <div className="credits-map-layer" aria-hidden="true" />
      <nav className="credits-nav" aria-label={copy.credits.navAria}>
        <Link className="brand-mark" href="/">
          {copy.nav.brand}
        </Link>
        <div>
          <Link href="/philosophers">{copy.nav.philosophers}</Link>
          <Link href="/quiz">{copy.nav.quiz}</Link>
          <a href="#source-ledger">{copy.nav.sources}</a>
          <LanguageToggle />
        </div>
      </nav>

      <section className="credits-hero" aria-label={copy.credits.overviewAria}>
        <div className="credits-hero-copy">
          <span className="credits-kicker">{copy.credits.assetLedger}</span>
          <h1>{copy.credits.title}</h1>
          <p>{copy.credits.intro}</p>
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
        </div>
        <a className="credits-scroll-cue" href="#source-ledger" onClick={handleViewSourceClick}>
          <span>{copy.credits.viewSource}</span>
          <ChevronDown aria-hidden="true" />
        </a>
      </section>

      <section className="credits-summary" aria-label={copy.credits.summaryAria}>
        {creditFacts.map((fact) => (
          <article className="credits-fact" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
            <p>{fact.copy}</p>
          </article>
        ))}
      </section>

      <section className="credits-policy" aria-label={copy.credits.policyAria}>
        <div className="credits-policy-heading">
          <span className="credits-kicker">{copy.credits.notesKicker}</span>
          <h2>{copy.credits.notesTitle}</h2>
        </div>
        <div className="credits-policy-list">
          {assetNotes.map((note, index) => (
            <article className="credits-policy-item" key={note.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
                {note.href ? (
                  <a className="credits-note-link" href={note.href} rel="noreferrer" target="_blank">
                    <FileText aria-hidden="true" />
                    <span>{note.linkLabel}</span>
                    <ExternalLink aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="source-ledger"
        ref={sourceLedgerRef}
        className="credits-ledger-section"
        aria-label={copy.credits.portraitSourcesAria}
      >
        <div className="credits-ledger-heading">
          <span className="credits-kicker">{copy.credits.portraitSources}</span>
          <h2>{copy.credits.visibleTrail}</h2>
          <p>{copy.credits.sourceIntro}</p>
        </div>

        <div className="credits-ledger">
          {philosophers.map((philosopher, index) => {
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
                <a className="credits-source-link" href={philosopher.sourcePageUrl} rel="noreferrer" target="_blank">
                  <FileText aria-hidden="true" />
                  <span>{copy.credits.sourcePage}</span>
                  <ExternalLink aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="credits-ledger-section credits-research-ledger-section"
        aria-label={copy.credits.researchAria}
      >
        <div className="credits-ledger-heading">
          <span className="credits-kicker">{copy.credits.profileResearch}</span>
          <h2>{copy.credits.historiesCite}</h2>
          <p>{copy.credits.researchIntro}</p>
        </div>

        <div className="credits-ledger">
          {researchSources.map((source, index) => {
            const philosopher = philosophers.find((item) => item.id === source.philosopherId);

            return (
              <article
                className="credits-source-row credits-source-row--research"
                key={`${source.philosopherId}-${source.url}`}
                style={{ "--credit-color": philosopher?.color ?? "#d7a65f" } as CSSProperties}
              >
                <span className="credits-source-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="credits-source-type" aria-hidden="true">
                  <FileText />
                </div>
                <div className="credits-source-copy">
                  <h3>{source.label}</h3>
                  <p>
                    {philosopher?.name ?? copy.credits.researchFallback} / {copy.sourceTypes[source.type]} / {source.note}
                  </p>
                </div>
                <a className="credits-source-link" href={source.url} rel="noreferrer" target="_blank">
                  <FileText aria-hidden="true" />
                  <span>{copy.credits.openSource}</span>
                  <ExternalLink aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="credits-final" aria-label={copy.credits.finalAria}>
        <div>
          <span className="credits-kicker">{copy.credits.finalKicker}</span>
          <h2>{copy.credits.finalTitle}</h2>
          <p>{copy.credits.finalText}</p>
        </div>
        <Link className="primary-cta credits-final-cta" href="/">
          <ArrowLeft aria-hidden="true" />
          {copy.credits.backToMap}
        </Link>
      </section>
    </main>
  );
}
