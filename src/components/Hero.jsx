import React from "react";
import { Link } from "react-router-dom";

const trustStats = [
  { value: "128+", label: "Projects on Upwork" },
  { value: "5.0", label: "Client rating" },
  { value: "Top Rated Plus", label: "Verified freelancer" },
];

const marqueeItems = [
  "B2B Lead Generation",
  "Contact Research",
  "Data Enrichment",
  "CRM-Ready Lists",
  "Email Verification",
  "LinkedIn Sales Nav",
  "HubSpot Import",
  "Clay Workflows",
];

const Hero = () => {
  return (
    <section className="section section--hero section--hero-clonix">
      <div className="container-page hero-clonix__inner">
        <p className="hero-clonix__eyebrow">
          <span className="hero-clonix__slash">//</span> Meet GoLeadFinder
        </p>

        <h1 className="hero-clonix__title">
          We Build Prospect Lists That Demand Attention.
        </h1>

        <p className="hero-clonix__lede">
          GoLeadFinder is a B2B lead generation studio that turns your ICP into
          verified, CRM-ready contact data — research, enrichment, and delivery
          your sales team can use immediately.
        </p>

        <div className="hero-clonix__cta">
          <Link to="/contact" className="btn btn--ink btn--md">
            Explore Services
          </Link>
          <Link to="/portfolio" className="btn btn--outline btn--ink btn--md">
            View Work <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="hero-clonix__trust" aria-label="Trust indicators">
          {trustStats.map((stat) => (
            <div key={stat.label} className="hero-clonix__trust-item">
              <span className="hero-clonix__trust-value">{stat.value}</span>
              <span className="hero-clonix__trust-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-clonix__marquee" aria-hidden="true">
        <div className="hero-clonix__marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="hero-clonix__marquee-item">
              {item}
              <span className="hero-clonix__marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
