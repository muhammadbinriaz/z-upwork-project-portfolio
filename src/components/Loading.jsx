import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Loading = ({ onComplete }) => {
  const curtainRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const curtain = curtainRef.current;
    const text = textRef.current;
    const container = containerRef.current;

    const split = new SplitType(text, { types: "chars" });

    const finish = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      split.revert();
      if (onComplete) onComplete();
    };

    gsap.set(split.chars, { opacity: 0 });
    gsap.set(container, { visibility: "visible" });

    const tl = gsap.timeline({ onComplete: finish });

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
      if (!completedRef.current && tl.progress() >= 0.95) finish();
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
            color: "var(--color-ink)",
            letterSpacing: "-0.02em",
            textAlign: "center",
            paddingInline: "1rem",
            perspective: "400px",
          }}
        >
          GoLeadFinder
        </h1>
      </div>
    </div>
  );
};

export default Loading;