import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Loading = ({ onComplete }) => {
  const curtainRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const curtain = curtainRef.current;
    const text = textRef.current;
    const container = containerRef.current;

    const split = new SplitType(text, { types: "chars" });

    gsap.set(split.chars, { opacity: 0 });
    gsap.set(container, { visibility: "visible" });

    const tl = gsap.timeline({
      onComplete: () => {
        split.revert();
        if (onComplete) onComplete();
      },
    });

    tl.fromTo(
      curtain,
      { y: "-100%" },
      { y: "0%", duration: 0.7, ease: "power3.inOut" },
    );

    tl.fromTo(
      split.chars,
      { opacity: 0, y: 40, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(1.4)",
      },
    );

    tl.to({}, { duration: 0.5 });

    tl.to(curtain, { y: "-100%", duration: 0.6, ease: "power3.inOut" }, "lift");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        visibility: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        ref={curtainRef}
        className="loading-curtain"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          ref={textRef}
          style={{
            fontFamily: "var(--font-wordmark)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 400,
            color: "var(--loading-text)",
            letterSpacing: "-0.02em",
            textAlign: "center",
            paddingInline: "1rem",
            perspective: "400px",
          }}
        >
          GoLeadFinder 
        </h1>
      </div>

      <style>{`
  .loading-curtain {
    background: linear-gradient(
      180deg,
      oklch(12% 0.015 260) 0%,
      oklch(18% 0.02 250) 30%,
      oklch(22% 0.018 240) 60%,
      oklch(15% 0.012 250) 100%
    );
  }
  [data-theme="light"] .loading-curtain {
    background: linear-gradient(
      180deg,
      oklch(72% 0.08 75) 0%,
      oklch(78% 0.09 72) 30%,
      oklch(82% 0.07 70) 60%,
      oklch(75% 0.08 73) 100%
    );
  }
`}</style>
    </div>
  );
};

export default Loading;
