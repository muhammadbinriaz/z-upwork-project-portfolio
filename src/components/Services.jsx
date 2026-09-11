import React from "react";
import { Link } from "react-router-dom";

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
    title: "Web Development",
    description:
      "Creating websites and web applications for businesses and agencies.",
    tags: ["Custom", "Agency", "Business"],
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
              What we do
            </span>
            <h2 className="section__title">Services</h2>
            <p className="section__lede">
              Lead research, data ops, automations, email, and web — scoped and
              delivered by the right specialists on our team.
            </p>
          </div>
        )}

        <ol className="service-list">
          {services.map((service, i) => (
            <li key={service.title} className="service-row">
              <span className="service-row__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="service-row__main">
                <h3 className="service-row__title">{service.title}</h3>
                <p className="service-row__text">{service.description}</p>
              </div>
              <ul className="service-row__tags">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="service-list__cta">
          <Link to="/services#pricing" className="btn btn--mint">
            View rates
          </Link>
          <Link to="/contact" className="btn btn--text">
            Or start a project →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
