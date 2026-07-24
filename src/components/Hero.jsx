import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      window.matchMedia("(hover: none) and (pointer: coarse)").matches,
    );
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || isTouch) return;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
      hero.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, [isTouch]);

  return (
    <section
      ref={heroRef}
      className="section--hero relative"
      style={{ minHeight: "clamp(60vh, 75dvh, 88dvh)" }}
    >
      <div className="container-page relative" style={{ zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
            gap: "var(--space-2xl)",
            alignItems: "center",
          }}
          className="split-grid-hero"
        >
          {/* Left: Headline + lede */}
          <div>
            <h1
              style={{
                color: "var(--color-ink)",
                marginBottom: "var(--space-md)",
                maxWidth: "20ch",
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                lineHeight: 1.05,
                fontWeight: 700,
                fontFamily: "var(--font-display)",
              }}
            >
              We build
              <br />
              <span
                className="typewriter-word"
                style={{
                  color: "var(--color-accent)",
                  display: "inline-block",
                }}
              >
                <span className="typewriter-text">
                  <span>prospect lists</span>
                  <span>lead pipelines</span>
                  <span>sales databases</span>
                  <span>contact rosters</span>
                  <span>web development</span>
                  <span>automation</span>
                </span>
              </span>
              <br />
              that actually convert.
            </h1>

            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--color-muted)",
                maxWidth: "50ch",
                marginBottom: "var(--space-xl)",
                lineHeight: 1.6,
              }}
            >
              GoLeadFinder — Top Rated Plus B2B lead generation for SaaS,
              agencies, and sales teams. Verified contacts, CRM-ready data,
              zero fluff.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "var(--space-sm)",
                flexWrap: "wrap",
              }}
            >
              <Link to="/contact" className="chip">
                Book a Consultation
              </Link>
              <Link to="/services" className="chip chip--outline">
                View Services →
              </Link>
            </div>
          </div>

          {/* Right: Stat block */}
          <div
            className="gradient-border"
            style={{
              padding: "var(--space-xl)",
              textAlign: "center",
            }}
          >
            <div className="stat-figure">
              128<span className="unit">.</span>
            </div>
            <p className="stat-qualifier" style={{ marginInline: "auto" }}>
              Projects completed on Upwork
            </p>

            <div
              style={{
                marginTop: "var(--space-lg)",
                paddingTop: "var(--space-lg)",
                borderTop: "1px solid var(--color-rule)",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--space-md)",
              }}
            >
              <div>
                <div
                  className="stat-figure"
                  style={{ fontSize: "var(--text-4xl)" }}
                >
                  5<span className="unit">.0</span>
                </div>
                <p
                  className="stat-qualifier"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Client rating
                </p>
              </div>
              <div>
                <div
                  className="stat-figure"
                  style={{ fontSize: "var(--text-4xl)" }}
                >
                  7<span className="unit">+</span>
                </div>
                <p
                  className="stat-qualifier"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Years experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 60rem) {
          .split-grid-hero {
            grid-template-columns: 1fr !important;
            gap: var(--space-xl) !important;
          }
        }

        .typewriter-word {
          position: relative;
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          height: 1.15em;
        }

        .typewriter-text {
          display: flex;
          flex-direction: column;
          animation: typewriter-swap 10s ease-in-out infinite;
        }

        .typewriter-text span {
          display: block;
          height: 1.15em;
          line-height: 1.15em;
        }

        @keyframes typewriter-swap {
          0%, 18% {
            transform: translateY(0);
          }
          22%, 40% {
            transform: translateY(-1.15em);
          }
          44%, 62% {
            transform: translateY(-2.3em);
          }
          66%, 84% {
            transform: translateY(-3.45em);
          }
          88%, 100% {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .typewriter-text {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;