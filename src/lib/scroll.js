/** Lenis bridge for route transitions */

let lenis = null;
let blockInput = null;

export function setLenis(instance) {
  lenis = instance;
}

export function pauseLenis() {
  lenis?.stop?.();
}

export function resumeLenis() {
  lenis?.start?.();
}

/** Jump to top for both native scroll and Lenis. */
export function resetScroll() {
  if (lenis) {
    try {
      lenis.scrollTo(0, { immediate: true, force: true });
    } catch {
      lenis.scrollTo(0, { immediate: true });
    }
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function onBlockedScroll(e) {
  e.preventDefault();
}

/** Stop Lenis + swallow wheel/touch without moving the page (no jump). */
export function freezeScrollInput() {
  pauseLenis();
  if (blockInput) return;
  blockInput = onBlockedScroll;
  window.addEventListener("wheel", blockInput, { passive: false });
  window.addEventListener("touchmove", blockInput, { passive: false });
}

function clearScrollInputBlock() {
  if (!blockInput) return;
  window.removeEventListener("wheel", blockInput);
  window.removeEventListener("touchmove", blockInput);
  blockInput = null;
}

/**
 * Pin top then hard-lock. Call only once the route cover fully
 * hides the old page — never while the scrolled page is still visible.
 */
export function lockScrollAtTop() {
  pauseLenis();
  resetScroll();
  document.documentElement.classList.add("route-scroll-lock");
  resetScroll();
}

export function unlockScroll() {
  resetScroll();
  document.documentElement.classList.remove("route-scroll-lock");
  clearScrollInputBlock();
  resetScroll();
  resumeLenis();
  requestAnimationFrame(() => {
    resetScroll();
  });
}
