import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

const SELECTOR = [
  "main .section__head",
  "main .service-row",
  "main .step-rail__item",
  "main .faq-item",
  "main .rate-sheet__row",
  "main .contact-aside__card",
  "main .contact-form",
  "main .case-list > *",
  "main .about-mission__copy",
  "main .about-mission__stats",
  "main .about-cta__inner",
  "main .agency-hub__panel",
  "main .agency-hub__feature",
  "main .agency-hub__foot",
  "main .team-card",
  "main .contact-trust",
  "main .page-hero__bignum",
  "main .spec-sheet",
  "footer .container-page > *",
].join(", ");

/**
 * Cynthia-style scroll: elements ease from dull opacity → full as they enter.
 */
export default function useScrollReveal(ready, pathname) {
  useEffect(() => {
    if (!ready || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray(SELECTOR).filter((el) => {
        // Hero is already on screen — don't dull it on first paint
        return !el.closest(".section--hero");
      });

      nodes.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.22, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    });

    // After route cover / layout settles
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 320);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, [ready, pathname]);
}
