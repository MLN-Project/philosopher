"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { prefersReducedMotion, scrollToSmoothTarget, setActiveSmoothScroll } from "@/lib/smooth-scroll";

function getHashTarget(hash: string) {
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return null;

  return document.getElementById(id);
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) {
      setActiveSmoothScroll(null);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    setActiveSmoothScroll(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    const handleHashClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.includes("#")) return;

      const targetUrl = new URL(anchor.href);
      if (targetUrl.origin !== window.location.origin || targetUrl.pathname !== window.location.pathname) return;

      const target = getHashTarget(targetUrl.hash);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", targetUrl.hash);
      scrollToSmoothTarget(target);
    };

    frame = requestAnimationFrame(raf);
    document.addEventListener("click", handleHashClick);

    return () => {
      document.removeEventListener("click", handleHashClick);
      cancelAnimationFrame(frame);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      setActiveSmoothScroll(null);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
