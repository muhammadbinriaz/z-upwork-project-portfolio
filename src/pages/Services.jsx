import React from "react";
import ServicesComponent from "../components/Services";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="section section--hero"
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
              I specialize in B2B lead generation, contact research, data
              enrichment, email list building, and CRM data cleaning for SaaS
              companies, agencies, and sales teams.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <ServicesComponent />

      {/* Tools */}
      <Tools />

      {/* Pricing */}
      <Pricing />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default Services;