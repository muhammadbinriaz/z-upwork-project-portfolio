/** Lenis bridge for route transitions */

let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

export function pauseLenis() {
  lenis?.stop?.();
}

export function resumeLenis() {
  lenis?.start?.();
}

export function resetScroll() {
  lenis?.scrollTo?.(0, { immediate: true });
  window.scrollTo(0, 0);
}
