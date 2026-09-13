import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Cynthia Ugwu–style cursor: follows fast, pinches with velocity.
 * Soft moves barely deform; fast moves stretch more.
 */
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    let xprev = 0;
    let yprev = 0;
    let idle;
    let primed = false;

    const onMove = (e) => {
      clearTimeout(idle);

      // First event only seeds position — avoid a huge first-frame pinch
      if (!primed) {
        primed = true;
        xprev = e.clientX;
        yprev = e.clientY;
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
        return;
      }

      // /10 matches Cynthia-style sensitivity (portfolio used /2 — far too eager)
      const xscale = gsap.utils.clamp(0.8, 1.2, Math.abs(e.clientX - xprev) / 10);
      const yscale = gsap.utils.clamp(0.8, 1.2, Math.abs(e.clientY - yprev) / 10);
      xprev = e.clientX;
      yprev = e.clientY;

      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;

      idle = setTimeout(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
      }, 100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      clearTimeout(idle);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div className="minicircle" ref={ref} aria-hidden="true" />;
}
