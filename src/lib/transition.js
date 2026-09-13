import gsap from "gsap";
import { prefersReducedMotion } from "./motion";
import {
  freezeScrollInput,
  lockScrollAtTop,
  unlockScroll,
  resetScroll,
} from "./scroll";

/* Matched in/out so the wipe doesn't feel faster one way than the other */
const EASE = "power2.inOut";
const WIPE_DESKTOP = 0.95;
const WIPE_MOBILE = 1.15;
const FILL_DESKTOP = 0.72;
const FILL_MOBILE = 0.72;

let busy = false;
const revealDoneWaiters = [];

export function isTransitioning() {
  return busy;
}

/** Resolves when the route cover has fully left (or now if idle). */
export function whenRevealed() {
  return new Promise((resolve) => {
    if (!busy) {
      resolve();
      return;
    }
    revealDoneWaiters.push(resolve);
  });
}

function flushRevealDone() {
  const pending = revealDoneWaiters.splice(0, revealDoneWaiters.length);
  pending.forEach((fn) => fn());
}

function panel() {
  return document.querySelector(".transition-panel");
}

function shell() {
  return document.querySelector(".transition");
}

function maskEl() {
  return document.querySelector(".tn-mask");
}

function nameBox() {
  return document.querySelector(".tn");
}

function ghostEl() {
  return document.querySelector(".tn-ghost");
}

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function wipeDuration() {
  return isMobile() ? WIPE_MOBILE : WIPE_DESKTOP;
}

function fillDuration() {
  return isMobile() ? FILL_MOBILE : FILL_DESKTOP;
}

function hideNav() {
  document.documentElement.classList.add("route-covering");
  const nav = document.querySelector(".nav");
  if (nav) {
    gsap.killTweensOf(nav);
    gsap.set(nav, { autoAlpha: 0 });
  }
}

function showNav() {
  document.documentElement.classList.remove("route-covering");
  const nav = document.querySelector(".nav");
  if (nav) {
    gsap.killTweensOf(nav);
    gsap.fromTo(
      nav,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: isMobile() ? 0.28 : 0.4,
        ease: "power2.out",
        overwrite: true,
      },
    );
  }
}

function snapMenuClosed() {
  const mobile = document.querySelector(".nav__mobile");
  if (mobile) mobile.classList.remove("is-open");
  const nav = document.querySelector(".nav");
  if (nav) nav.classList.remove("is-menu-open");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

/** Only call once the cover fully hides the outgoing page. */
function settleUnderCover() {
  lockScrollAtTop();
}

export function cover() {
  return new Promise((resolve) => {
    const el = panel();
    if (!el) return resolve();

    busy = true;
    if (shell()) shell().style.pointerEvents = "auto";
    // Keep the scrolled page where it is — only block further input.
    freezeScrollInput();

    const h = window.innerHeight;
    const mask = maskEl();
    const ghost = ghostEl();
    const coverDur = wipeDuration();

    if (prefersReducedMotion()) {
      gsap.set(el, { y: 0, autoAlpha: 1 });
      if (mask) gsap.set(mask, { height: "100%" });
      if (ghost) gsap.set(ghost, { opacity: 0 });
      hideNav();
      snapMenuClosed();
      settleUnderCover();
      return resolve();
    }

    gsap.killTweensOf(el);
    if (mask) gsap.killTweensOf(mask);
    if (ghost) gsap.killTweensOf(ghost);
    gsap.set(el, { y: h, autoAlpha: 1, force3D: true });
    if (mask) gsap.set(mask, { height: 0 });
    if (ghost) gsap.set(ghost, { opacity: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        settleUnderCover();
        resolve();
      },
    });

    tl.to(el, {
      y: 0,
      duration: coverDur,
      ease: EASE,
      onComplete: () => {
        // Panel now fully covers — safe to jump the (hidden) page to top.
        hideNav();
        snapMenuClosed();
        settleUnderCover();
      },
    });

    if (mask) {
      tl.to(mask, {
        height: () => Math.max(nameBox()?.offsetHeight || 0, 1),
        duration: fillDuration(),
        ease: EASE,
        onComplete: () => {
          gsap.set(mask, { height: "100%" });
          if (ghost) gsap.set(ghost, { opacity: 0 });
        },
      });
    }
  });
}

export function reveal() {
  return new Promise((resolve) => {
    const el = panel();
    const mask = maskEl();
    const ghost = ghostEl();
    const h = window.innerHeight;

    const done = () => {
      if (el) gsap.set(el, { y: h, autoAlpha: 0 });
      if (mask) gsap.set(mask, { height: 0 });
      if (ghost) gsap.set(ghost, { opacity: 1 });
      if (shell()) shell().style.pointerEvents = "none";
      resetScroll();
      showNav();
      unlockScroll();
      busy = false;
      flushRevealDone();
      resolve();
    };

    if (!busy) return done();
    if (!el || prefersReducedMotion()) return done();

    hideNav();
    // Still under cover — keep new route pinned at top for the wipe-out.
    settleUnderCover();

    gsap.killTweensOf(el);
    if (mask) gsap.killTweensOf(mask);
    if (ghost) gsap.killTweensOf(ghost);

    gsap.fromTo(
      el,
      { y: 0, autoAlpha: 1 },
      {
        y: -(h + 8),
        duration: wipeDuration(),
        ease: EASE,
        force3D: true,
        onComplete: done,
      },
    );
  });
}
