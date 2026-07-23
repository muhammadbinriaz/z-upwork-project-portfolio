import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
      hero.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="section--hero relative overflow-hidden"
      style={{ isolation: "isolate", minHeight: "clamp(60vh, 75dvh, 88dvh)" }}
    >
      {/* Abstract background */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Cursor spotlight */}
      <div className="hero-spotlight" aria-hidden="true" />

      {/* Content */}
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
                marginBottom: "var(--space-sm)",
                maxWidth: "20ch",
              }}
            >
              Accurate B2B leads your sales team can actually use.
            </h1>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--color-muted)",
                maxWidth: "55ch",
                marginBottom: "var(--space-lg)",
                lineHeight: 1.6,
              }}
            >
              Top Rated Plus Lead Generation & Contact Research Specialist with
              7+ years of experience helping SaaS companies, agencies, and sales
              teams build high-quality prospect lists with verified contact
              information.
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
      `}</style>
    </section>
  );
};

export default Hero;
