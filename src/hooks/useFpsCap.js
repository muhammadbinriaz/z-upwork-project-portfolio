import { useEffect, useRef } from "react";

const useFpsCap = (fps = 50) => {
  const originalRaf = useRef(null);

  useEffect(() => {
    // Save the original rAF
    originalRaf.current = window.requestAnimationFrame;

    const interval = 1000 / fps;
    let lastTime = performance.now();

    // Override rAF to cap at target fps
    window.requestAnimationFrame = (callback) => {
      const now = performance.now();
      const delay = Math.max(0, interval - (now - lastTime));

      return setTimeout(() => {
        lastTime = performance.now();
        callback(performance.now());
      }, delay);
    };

    // Also override cancelAnimationFrame
    const originalCaf = window.cancelAnimationFrame;
    window.cancelAnimationFrame = (id) => {
      clearTimeout(id);
    };

    return () => {
      window.requestAnimationFrame = originalRaf.current;
      window.cancelAnimationFrame = originalCaf;
    };
  }, [fps]);
};

export default useFpsCap;
