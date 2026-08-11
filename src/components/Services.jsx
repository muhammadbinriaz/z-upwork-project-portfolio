import React from "react";
import { Link } from "react-router-dom";
import SectionIntro from "./SectionIntro";

const pillars = [
  {
    num: "01",
    title: "Lead Generation & Research",
    description:
      "Targeted prospect lists built from your ICP — decision-makers, verified emails, and company data your sales team can act on.",
    tags: ["B2B Lead Gen", "Contact Research", "LinkedIn Sales Nav"],
  },
  {
    num: "02",
    title: "Data Enrichment & Verification",
    description:
      "Clean, enrich, and validate existing databases. Email verification, enrichment workflows, and list building at scale.",
    tags: ["Data Enrichment", "Email Lists", "Apollo & Clay"],
  },
  {
    num: "03",
    title: "CRM Delivery & Cleanup",
    description:
      "Formatted deliverables ready for HubSpot, Salesforce, or Google Sheets — plus deduplication and CRM-ready cleanup.",
    tags: ["CRM Cleaning", "HubSpot", "Formatted Export"],
  },
];

const allServices = [
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

const Services = ({ showHead = true, variant = "pillars" }) => {
  return (
    <section
      className={`section${variant === "pillars" ? " section--band" : ""}${showHead ? "" : " section--tight"}`}
      id="services"
      style={variant === "full" ? { borderTop: "1px solid var(--color-rule)" } : undefined}
    >
      <div className="container-page">
        {showHead && (
          <SectionIntro
            eyebrow="What we do"
            title={
              variant === "full"
                ? "Every service built for pipeline."
                : "Strategy-first lead gen that drives pipeline."
            }
            lede={
              variant === "full"
                ? "Comprehensive B2B lead generation and data research — tailored to SaaS companies, agencies, and sales teams."
                : "Research, verification, enrichment, and delivery — every list is built to your ICP, not generic databases."
            }
          />
        )}

        {variant === "pillars" ? (
          <div className="feature-grid">
            {pillars.map((pillar) => (
              <article key={pillar.num} className="feature-card premium-card">
                <p className="feature-card__num">{pillar.num}</p>
                <h3 className="feature-card__title">{pillar.title}</h3>
                <p className="feature-card__text">{pillar.description}</p>
                <div className="feature-card__tags">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="feature-card__link">
                  Explore more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="service-grid">
            {allServices.map((service, i) => (
              <article key={service.title} className="service-item premium-card">
                <span className="service-item__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="service-item__title">{service.title}</h3>
                <p className="service-item__text">{service.description}</p>
                <div className="feature-card__tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        <div className={`section-cta${variant === "full" ? " section-cta--center" : ""}`}>
          {variant === "pillars" && (
            <Link to="/services" className="btn btn--outline btn--ink btn--md">
              All services <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          )}
          <Link to="/contact" className="btn btn--ink btn--md">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
