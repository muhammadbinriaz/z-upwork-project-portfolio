import { useLayoutEffect } from "react";
import gsap from "gsap";

const LABEL = "GoLeadFinder";

export default function TransitionOverlay() {
  useLayoutEffect(() => {
    const el = document.querySelector(".transition-panel");
    if (el) {
      gsap.set(el, { y: window.innerHeight, autoAlpha: 0 });
    }
  }, []);

  return (
    <div className="transition" aria-hidden="true">
      <div className="transition-panel">
        <div className="tn">
          <span className="tn-ghost">{LABEL}</span>
          <span className="tn-mask">
            <span className="tn-fill">{LABEL}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
