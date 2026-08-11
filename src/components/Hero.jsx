import React from "react";
import { Link } from "react-router-dom";
import RotatingWords from "./RotatingWords";

const steps = [
  { num: "01", label: "research", color: "var(--color-mint)" },
  { num: "02", label: "verify", color: "var(--color-accent-2)" },
  { num: "03", label: "enrich", color: "var(--color-accent)" },
  { num: "04", label: "deliver", color: "var(--color-accent-3)" },
];

const rotatingPhrases = [
  "prospect lists",
  "cold email lists",
  "verified contacts",
  "CRM-ready data",
  "LinkedIn research",
  "Clay automations",
  "data enrichment",
];

const sheetRows = [
  { name: "Sarah K.", email: "s.kim@techflow.io", company: "TechFlow", ok: true },
  { name: "Michael C.", email: "m.chen@growth.co", company: "Growth Co", ok: true },
  { name: "Emma R.", email: "e.rodriguez@…", company: "Real Estate Pro", ok: false },
  { name: "David K.", email: "david@launch.io", company: "StartupLaunch", ok: true },
  { name: "James W.", email: "j.wilson@ent-saas.com", company: "Enterprise SaaS", ok: true },
];

const Hero = () => {
  return (
    <section className="section section--hero">
      <div className="container-page">
        <div className="hero__grid">
          <div>
            <div className="process" aria-label="The four stages">
              {steps.map((step, i) => (
                <React.Fragment key={step.label}>
                  {i > 0 && <span className="process__link" aria-hidden="true"></span>}
                  <span className="process__step">
                    <span className="process__dot" style={{ background: step.color }}></span>
                    <span className="num">{step.num}</span> {step.label}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">We build</span>
              <span className="hero__title-rotate">
                <RotatingWords words={rotatingPhrases} />
              </span>
              <span className="hero__title-line">that actually convert.</span>
            </h1>

            <p className="hero__lede">
              Freelance B2B lead gen &amp; contact research on Upwork — Top Rated Plus,
              128 projects done. You send the ICP, I hand back a clean sheet your
              sales team can use today.
            </p>

            <div className="hero__cta">
              <Link to="/contact" className="btn btn--mint btn--md">
                Send Your Brief
              </Link>
              <Link to="/services" className="btn btn--outline btn--mint btn--md">
                See What I Do <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero__stage">
            <div className="sheet-preview" aria-hidden="true">
              <div className="sheet-preview__bar">
                <span className="sheet-preview__label">client_delivery.xlsx</span>
                <span className="sheet-preview__meta">Google Sheets · v3</span>
              </div>

              <div className="sheet-preview__grid">
                <div className="sheet-preview__row sheet-preview__row--head">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Company</span>
                  <span></span>
                </div>
                {sheetRows.map((row, i) => (
                  <div
                    key={row.email}
                    className="sheet-preview__row"
                    style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                  >
                    <span>{row.name}</span>
                    <span className="sheet-preview__email">{row.email}</span>
                    <span>{row.company}</span>
                    <span className={`sheet-preview__check${row.ok ? "" : " sheet-preview__check--pending"}`}>
                      {row.ok ? "✓" : "…"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="sheet-preview__foot">
                <span>847 rows · <b>98.2%</b> emails found</span>
                <span className="sheet-preview__tag">bounce &lt;2%</span>
              </div>
            </div>

            <div className="remind remind--delivery" role="status">
              <span className="remind__icon remind__icon--cyan" aria-hidden="true"></span>
              <div>
                <p className="remind__head">
                  <b>Delivered</b> · Upwork milestone
                </p>
                <p className="remind__body">
                  Sheet shared with client —{" "}
                  <span className="remind__time">formatted for HubSpot import.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
