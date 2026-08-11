import React from "react";
import { Link } from "react-router-dom";
import SectionIntro from "./SectionIntro";

const Pricing = () => {
  return (
    <section className="section section--band" id="pricing">
      <div className="container-page">
        <SectionIntro
          eyebrow="Rates"
          title="Simple pricing. No surprises."
          lede="Hourly projects for ongoing work, or a consultation to scope your list before you commit."
          centered
        />

        <div className="plans">
          <div className="premium-card plan-card">
            <span className="plan-card__label">Hourly projects</span>
            <div className="plan-card__price">
              <span className="plan-card__amount">$5</span>
              <span className="plan-card__unit">/hr</span>
            </div>
            <p className="plan-card__text">
              Standard hourly rate for B2B lead generation, contact research,
              data enrichment, and CRM data cleaning.
            </p>
            <Link to="/contact" className="btn btn--ink btn--md">
              Start a project
            </Link>
          </div>

          <div className="premium-card plan-card plan-card--featured">
            <span className="plan-card__label">Consultation</span>
            <div className="plan-card__price">
              <span className="plan-card__amount">$20</span>
              <span className="plan-card__unit">/30 min</span>
            </div>
            <p className="plan-card__text">
              Zoom call to discuss your ICP, list size, deliverable format, and
              timeline before we start.
            </p>
            <Link to="/contact" className="btn btn--outline btn--ink btn--md">
              Book a call
            </Link>
          </div>
        </div>

        <p className="plan-footnote">
          Top Rated Plus on Upwork · 128 projects · 5.0 rating · 7+ years experience
        </p>
      </div>
    </section>
  );
};

export default Pricing;
