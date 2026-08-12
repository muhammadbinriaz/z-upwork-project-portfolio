import React from "react";
import PortfolioComponent from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import PortfolioDeliveryLab from "../components/PortfolioDeliveryLab";

const Portfolio = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="section section--page-hero"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--pear"></span>
              Work
            </span>
            <h1 className="section__title">
              Selected Projects
            </h1>
            <p className="section__lede">
              Projects completed for clients across SaaS, real estate,
              marketing, and enterprise industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <PortfolioComponent showHead={false} />

      {/* Testimonials */}
      <Testimonials />

      {/* Interactive delivery preview */}
      <PortfolioDeliveryLab />
    </>
  );
};

export default Portfolio;