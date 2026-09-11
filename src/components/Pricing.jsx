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
          <h2 className="section__title">Simple Pricing</h2>
        </div>

        <div className="rate-sheet">
          <div className="rate-sheet__row">
            <div className="rate-sheet__meta">
              <span className="rate-sheet__label">Hourly projects</span>
              <p className="rate-sheet__desc">
                B2B lead generation, contact research, data enrichment, and CRM cleaning.
              </p>
            </div>
            <div className="rate-sheet__price">
              <span className="rate-sheet__amount">$5</span>
              <span className="rate-sheet__unit">/hr</span>
            </div>
            <Link to="/contact" className="btn btn--mint btn--sm">
              Start a project
            </Link>
          </div>

          <div className="rate-sheet__row rate-sheet__row--feature">
            <div className="rate-sheet__meta">
              <span className="rate-sheet__label">Consultation</span>
              <p className="rate-sheet__desc">
                Zoom to align on ICP, audience, and how we build your prospect list.
              </p>
            </div>
            <div className="rate-sheet__price">
              <span className="rate-sheet__amount">$20</span>
              <span className="rate-sheet__unit">/30 min</span>
            </div>
            <Link to="/contact" className="btn btn--outline btn--mint btn--sm">
              Book a call
            </Link>
          </div>
        </div>

        <p className="rate-sheet__note">
          Top Rated Plus on Upwork · 128+ projects · 5.0 rating · 6-person team
        </p>
      </div>
    </section>
  );
};

export default Pricing;
