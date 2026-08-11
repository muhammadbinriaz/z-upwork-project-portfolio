import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const RotatingWords = ({ words, interval = 3200, className = "" }) => {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const tlRef = useRef(null);
  const busyRef = useRef(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return undefined;

    const cleanup = () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
    };

    const playIn = (word) => {
      cleanup();
      el.textContent = word;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        busyRef.current = false;
        return;
      }

      const split = new SplitType(el, { types: "chars" });
      splitRef.current = split;

      gsap.set(split.chars, {
        display: "inline-block",
        transformOrigin: "50% 100%",
      });

      tlRef.current = gsap.fromTo(
        split.chars,
        { opacity: 0, y: 36, rotateX: -88 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.58,
          stagger: 0.035,
          ease: "back.out(1.35)",
          onComplete: () => {
            busyRef.current = false;
          },
        },
      );
    };

    const playCycle = () => {
      if (busyRef.current) return;

      busyRef.current = true;
      const nextIndex = (indexRef.current + 1) % words.length;
      const nextWord = words[nextIndex];

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        indexRef.current = nextIndex;
        setIndex(nextIndex);
        el.textContent = nextWord;
        busyRef.current = false;
        return;
      }

      const split = splitRef.current;
      if (!split?.chars?.length) {
        indexRef.current = nextIndex;
        setIndex(nextIndex);
        playIn(nextWord);
        return;
      }

      if (tlRef.current) tlRef.current.kill();

      tlRef.current = gsap.to(split.chars, {
        opacity: 0,
        y: -22,
        rotateX: 68,
        duration: 0.34,
        stagger: { each: 0.024, from: "end" },
        ease: "power3.in",
        onComplete: () => {
          cleanup();
          indexRef.current = nextIndex;
          setIndex(nextIndex);
          playIn(nextWord);
        },
      });
    };

    playIn(words[0]);
    indexRef.current = 0;
    setIndex(0);

    const id = setInterval(playCycle, interval);

    return () => {
      clearInterval(id);
      cleanup();
      busyRef.current = false;
    };
  }, [words, interval]);

  return (
    <span
      className={`rotating-words ${className}`.trim()}
      aria-live="polite"
      aria-atomic="true"
    >
      <em
        ref={textRef}
        className="hl hl--mint rotating-words__word"
        aria-label={words[index]}
      />
    </span>
  );
};

export default RotatingWords;
