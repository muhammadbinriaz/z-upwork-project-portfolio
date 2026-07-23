import React, { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { AnimationContext } from "../App";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const ScrambleText = ({
  children,
  as: Tag = "h1",
  className = "",
  style = {},
}) => {
  const textRef = useRef(null);
  const animationReady = useContext(AnimationContext);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!animationReady || hasRun.current) return;

    const el = textRef.current;
    if (!el) return;

    hasRun.current = true;

    const split = new SplitType(el, { types: "chars" });
    const chars = split.chars;
    const finalChars = chars.map((c) => c.textContent);

    // Start all chars as random
    chars.forEach((c) => {
      c.textContent = randomChar();
    });

    const tl = gsap.timeline({ delay: 0.3 });

    chars.forEach((charEl, i) => {
      const obj = { progress: 0 };
      tl.to(
        obj,
        {
          progress: 1,
          duration: 0.15,
          ease: "power3.out",
          onUpdate: () => {
            if (obj.progress < 1) {
              charEl.textContent = randomChar();
            } else {
              charEl.textContent = finalChars[i];
            }
          },
        },
        i * 0.06,
      );
    });

    tl.call(() => split.revert());
  }, [animationReady]);

  return (
    <Tag ref={textRef} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default ScrambleText;
