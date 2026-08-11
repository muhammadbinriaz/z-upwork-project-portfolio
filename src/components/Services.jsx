import React from "react";
import { Link } from "react-router-dom";

const ACCENTS = ["mint", "cyan", "pear", "coral"];

const services = [
  {
    title: "B2B Lead Generation",
    description:
      "Targeted prospect lists matching your ideal customer profile with verified contact data.",
    tags: ["SaaS", "Enterprise", "CRM-Ready"],
  },
  {
    title: "Contact Research",
    description:
      "Decision-maker identification with verified emails and direct dials.",
    tags: ["Sales Nav", "Apollo", "Verified"],
  },
  {
    title: "Data Enrichment",
    description:
      "Clean, enrich, and update your existing CRM data for accuracy.",
    tags: ["HubSpot", "Clay", "Clean"],
  },
  {
    title: "Email List Building",
    description:
      "Verified business email lists with bounce rates under 2%. CRM-ready format.",
    tags: ["Bulk", "Verified", "Outreach"],
  },
  {
    title: "LinkedIn Research",
    description:
      "Deep-dive company and contact research using Sales Navigator.",
    tags: ["LinkedIn", "Prospecting", "Research"],
  },
  {
    title: "CRM Data Cleaning",
    description:
      "Duplicate removal, formatting, and enrichment for HubSpot & Salesforce.",
    tags: ["Cleanup", "De-dup", "Formatted"],
  },
];

const Services = ({ showHead = true }) => {
  return (
    <section
      className={`section${showHead ? "" : " section--tight"}`}
      style={{ borderTop: "1px solid var(--color-rule)" }}
    >
      <div className="container-page">
        {showHead && (
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--mint"></span>
              What I do
            </span>
            <h2 className="section__title">
              Services
            </h2>
            <p className="section__lede">
              Comprehensive B2B lead generation and data research services tailored
              to your business needs.
            </p>
          </div>
        )}

        <div className="grid grid--3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`premium-card service-card service-card--${ACCENTS[i % ACCENTS.length]}`}
              style={{ padding: "var(--space-lg)" }}
            >
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--color-ink)",
                  marginBottom: "var(--space-xs)",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-muted)",
                  lineHeight: 1.5,
                  marginBottom: "var(--space-md)",
                }}
              >
                {service.description}
              </p>
              <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
                {service.tags.map((tag) => (
                  <span key={tag} className="chip" style={{ fontSize: "var(--text-xs)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-3xl)", textAlign: "center" }}>
          <Link to="/contact" className="btn btn--mint">
            View Rates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
