import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="section--tight section--gradient">
      {/* Subtle orb */}
      <div
        className="gradient-orb gradient-orb--center-right"
        aria-hidden="true"
      />

      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            color: "var(--color-ink)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Rates
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "var(--space-md)",
          }}
          className="pricing-grid"
        >
          {/* Hourly rate card */}
          <div
            className="gradient-border"
            style={{
              padding: "var(--space-xl)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Hourly Projects
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-outlier)",
                  fontSize: "var(--text-5xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1,
                }}
              >
                $5
              </span>
              <span
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--color-muted)",
                  marginLeft: "var(--space-xs)",
                }}
              >
                /hr
              </span>
            </div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                lineHeight: 1.5,
              }}
            >
              Standard hourly rate for all B2B lead generation, contact
              research, data enrichment, and CRM data cleaning services.
            </p>
            <div>
              <Link to="/contact" className="chip">
                Start a Project
              </Link>
            </div>
          </div>

          {/* Consultation card */}
          <div
            style={{
              padding: "var(--space-xl)",
              backgroundColor: "var(--color-paper-2)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-rule)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Consultation
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-outlier)",
                  fontSize: "var(--text-5xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1,
                }}
              >
                $20
              </span>
              <span
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--color-muted)",
                  marginLeft: "var(--space-xs)",
                }}
              >
                /30 min
              </span>
            </div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                lineHeight: 1.5,
              }}
            >
              Zoom meeting to discuss your project requirements, target
              audience, and how I can help you build qualified prospect lists.
            </p>
            <div>
              <Link to="/contact" className="chip chip--outline">
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <p
          style={{
            marginTop: "var(--space-lg)",
            fontSize: "var(--text-sm)",
            color: "var(--color-muted)",
            textAlign: "center",
          }}
        >
          Top Rated Plus on Upwork · 128 projects · 5.0 rating · 7+ years
          experience
        </p>
      </div>

      <style>{`
        @media (max-width: 60rem) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;