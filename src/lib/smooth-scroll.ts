import type Lenis from "lenis";

type SmoothScrollTarget = Parameters<Lenis["scrollTo"]>[0];
type SmoothScrollOptions = Parameters<Lenis["scrollTo"]>[1];

let activeSmoothScroll: Lenis | null = null;

export function setActiveSmoothScroll(scroller: Lenis | null) {
  activeSmoothScroll = scroller;
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSmoothTarget(target: SmoothScrollTarget, options?: SmoothScrollOptions) {
  if (prefersReducedMotion() || !activeSmoothScroll) return false;

  activeSmoothScroll.scrollTo(target, {
    duration: 1.65,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
    ...options
  });

  return true;
}
