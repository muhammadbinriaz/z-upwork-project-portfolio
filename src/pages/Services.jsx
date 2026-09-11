import React from "react";
import { Link } from "react-router-dom";
import ServicesComponent from "../components/Services";
import Tools from "../components/Tools";
import Pricing from "../components/Pricing";

const Services = () => {
  return (
    <>
      <section
        className="section section--page-hero"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--mint"></span>
              Services
            </span>
            <h1 className="section__title">
              Simple. <em className="hl hl--cyan">Focused.</em>
            </h1>
            <p className="section__lede">
              We specialize in B2B lead generation, contact research, data
              enrichment, email list building, and CRM data cleaning — plus web
              builds and automations for SaaS companies, agencies, and sales teams.
            </p>
          </div>
        </div>
      </section>

      <ServicesComponent showHead={false} />
      <Tools />
      <Pricing />

      <section className="section section--mint about-cta">
        <div className="container-page about-cta__inner">
          <h2 className="about-cta__title">Ready to scope a list build?</h2>
          <p className="about-cta__lede">
            Tell us your ICP and timeline — we reply within 24 hours with a clear plan.
          </p>
          <Link to="/contact" className="btn btn--mint btn--lg">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
