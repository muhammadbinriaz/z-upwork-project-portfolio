import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="section" id="pricing" style={{ borderTop: "1px solid var(--color-rule)" }}>
      <div className="container-page">
        <div className="section__head">
          <span className="eyebrow">
            <span className="eyebrow__dot eyebrow__dot--pear"></span>
            Rates
          </span>
          <h2 className="section__title">
            Simple Pricing
          </h2>
        </div>

        <div className="plans">
          {/* Hourly rate card */}
          <div className="premium-card" style={{ padding: "var(--space-xl)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "var(--space-md)",
              }}
            >
              Hourly Projects
            </span>
            <div style={{ marginBottom: "var(--space-md)" }}>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "var(--text-5xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1,
                }}
              >
                $5
              </span>
              <span style={{ fontSize: "var(--text-lg)", color: "var(--color-muted)", marginLeft: "var(--space-xs)" }}>
                /hr
              </span>
            </div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                lineHeight: 1.5,
                marginBottom: "var(--space-xl)",
              }}
            >
              Standard hourly rate for all B2B lead generation, contact research,
              data enrichment, and CRM data cleaning services.
            </p>
            <Link to="/contact" className="btn btn--mint">
              Start a Project
            </Link>
          </div>

          {/* Consultation card — featured (Bubble plan--feature pattern) */}
          <div className="premium-card plan--feature" style={{ padding: "var(--space-xl)" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "var(--space-md)",
              }}
            >
              Consultation
            </span>
            <div style={{ marginBottom: "var(--space-md)" }}>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "var(--text-5xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1,
                }}
              >
                $20
              </span>
              <span style={{ fontSize: "var(--text-lg)", color: "var(--color-muted)", marginLeft: "var(--space-xs)" }}>
                /30 min
              </span>
            </div>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-muted)",
                lineHeight: 1.5,
                marginBottom: "var(--space-xl)",
              }}
            >
              Zoom meeting to discuss your project requirements, target audience,
              and how our team can build qualified prospect lists for you.
            </p>
            <Link to="/contact" className="btn btn--outline btn--mint">
              Book a Call
            </Link>
          </div>
        </div>

        <p
          style={{
            marginTop: "var(--space-xl)",
            fontSize: "var(--text-sm)",
            color: "var(--color-muted)",
            textAlign: "center",
          }}
        >
          Top Rated Plus on Upwork · 128+ projects · 5.0 rating · 6-person team
        </p>
      </div>
    </section>
  );
};

export default Pricing;