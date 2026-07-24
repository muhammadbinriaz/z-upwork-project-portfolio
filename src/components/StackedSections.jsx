import React, { useRef, useEffect, useCallback } from "react";
import { cn } from "../lib/utils";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function StackedSections({
  children,
  withDramaEffect = true,
  stackOffset = 48,
  scrollRunway = "0px",
  className,
}) {
  const deckRef = useRef(null);
  const cardRefs = useRef([]);
  const contentRefs = useRef([]);
  const items = React.Children.toArray(children);
  const total = items.length;
  cardRefs.current.length = total;
  contentRefs.current.length = total;

  const scaleAtDepth = useCallback(
    (cardIndex) => 1.1 - 0.1 * (total - (cardIndex - 1)),
    [total]
  );

  useEffect(() => {
    if (!withDramaEffect || total === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const deck = deckRef.current;
    if (!deck) return;

    let frame = 0;

    const isNextPinned = (i, containerTop) => {
      const next = cardRefs.current[i + 1];
      if (!next) return false;
      return next.getBoundingClientRect().top - containerTop <= (i + 1) * stackOffset + 1;
    };

    const update = () => {
      frame = 0;
      const containerTop = deck.getBoundingClientRect().top;

      for (let i = 0; i < total; i++) {
        const content = contentRefs.current[i];
        if (!content) continue;

        if (isNextPinned(i, containerTop)) {
          content.dataset.stackedCovered = "";
          content.style.transform = `scale(${scaleAtDepth(i + 1)})`;
          continue;
        }

        delete content.dataset.stackedCovered;
        const nextCard = cardRefs.current[i + 1];
        if (!nextCard) {
          content.style.transform = "";
          continue;
        }

        const card = cardRefs.current[i];
        const pinnedTop = (i + 1) * stackOffset;
        const offset = nextCard.getBoundingClientRect().top - containerTop - pinnedTop;
        const rowH = card?.offsetHeight > 0 ? card.offsetHeight : 1;
        const distance = Math.max(rowH - pinnedTop, 1);
        const progress = clamp(1 - offset / distance, 0, 1);
        const scale = 1 + (scaleAtDepth(i + 1) - 1) * progress;
        content.style.transform = progress <= 0.001 ? "" : `scale(${scale})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [total, stackOffset, withDramaEffect, scaleAtDepth]);

  if (total === 0) return null;

  return (
    <div
      ref={deckRef}
      className={cn("flex flex-col w-full", className)}
      style={{
        paddingBottom: `calc(${total} * ${stackOffset}px)`,
      }}
    >
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="sticky top-0 w-full"
          style={{
            zIndex: i + 1,
            paddingTop: `calc(${i + 1} * ${stackOffset}px)`,
          }}
        >
          <div
            ref={(el) => { contentRefs.current[i] = el; }}
            style={{ transformOrigin: "50% 0%" }}
          >
            {child}
          </div>
        </div>
      ))}
      {scrollRunway !== "0px" && (
        <div aria-hidden className="w-full shrink-0" style={{ height: scrollRunway }} />
      )}
    </div>
  );
}