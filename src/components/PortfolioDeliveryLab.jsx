import React from "react";
import { Link } from "react-router-dom";

const sheetRows = [
  { name: "Sarah K.", email: "s.kim@techflow.io", company: "TechFlow", ok: true },
  { name: "Michael C.", email: "m.chen@growth.co", company: "Growth Co", ok: true },
  { name: "Priya N.", email: "p.nair@stackbase.io", company: "StackBase", ok: true },
];

const automationSteps = [
  { label: "Trigger", detail: "New lead in CRM" },
  { label: "Enrich", detail: "Clay waterfall" },
  { label: "Verify", detail: "NeverBounce pass" },
  { label: "Route", detail: "Rep assignment" },
];

const lanes = [
  {
    id: "research",
    accent: "mint",
    title: "Lead research & lists",
    text: "ICP-mapped prospect sheets with verified emails, titles, and firmographics — CRM-ready on delivery.",
    tags: ["Sales Navigator", "Apollo", "Verified"],
  },
  {
    id: "data",
    accent: "cyan",
    title: "Data entry & CRM ops",
    text: "Cleanup, dedupe, enrichment, and bulk imports for HubSpot, Salesforce, and Sheets.",
    tags: ["HubSpot", "Dedupe", "Import-ready"],
  },
  {
    id: "automation",
    accent: "pear",
    title: "Automations & workflows",
    text: "Clay tables, enrichment waterfalls, and handoffs that replace manual copy-paste between tools.",
    tags: ["Clay", "Zapier", "Pipelines"],
  },
  {
    id: "email",
    accent: "coral",
    title: "Email & outreach ops",
    text: "Verified list builds, bounce-checked batches, and sequence-ready exports for your reps.",
    tags: ["NeverBounce", "<2% bounce", "Sequences"],
  },
  {
    id: "web",
    accent: "lavender",
    title: "Web development",
    text: "Marketing sites, landing pages, and lightweight internal tools — built to match your brand.",
    tags: ["React", "Landing pages", "Dashboards"],
  },
];

const PortfolioDeliveryLab = () => {
  return (
    <section
      className="section section--band agency-hub"
      aria-labelledby="agency-hub-title"
    >
      <div className="container-page">
        <div className="section__head section__head--center">
          <span className="eyebrow">
            <span className="eyebrow__dot eyebrow__dot--pear"></span>
            Full-stack agency
          </span>
          <h2 id="agency-hub-title" className="section__title">
            More than lists — a team across the pipeline.
          </h2>
          <p className="section__lede">
            GoLeadFinder ships research, data ops, automations, email infrastructure,
            and web — six specialists coordinating on every project.
          </p>
        </div>

        <div className="agency-hub__panel premium-card">
          <div className="agency-hub__stats">
            <div className="agency-hub__stat">
              <span className="agency-hub__stat-value">128+</span>
              <span className="agency-hub__stat-label">Projects delivered</span>
            </div>
            <div className="agency-hub__stat">
              <span className="agency-hub__stat-value">6</span>
              <span className="agency-hub__stat-label">Core specialists</span>
            </div>
            <div className="agency-hub__stat">
              <span className="agency-hub__stat-value">5</span>
              <span className="agency-hub__stat-label">Service lanes</span>
            </div>
            <div className="agency-hub__stat">
              <span className="agency-hub__stat-value">5.0</span>
              <span className="agency-hub__stat-label">Upwork rating</span>
            </div>
          </div>

          <div className="agency-hub__bento">
            <article className="agency-hub__feature agency-hub__feature--sheet agency-hub__feature--mint">
              <div className="agency-hub__feature-head">
                <h3 className="agency-hub__feature-title">{lanes[0].title}</h3>
                <p className="agency-hub__feature-text">{lanes[0].text}</p>
              </div>
              <div className="sheet-preview agency-hub__mini-sheet">
                <div className="sheet-preview__bar">
                  <span className="sheet-preview__label">icp_delivery.xlsx</span>
                  <span className="sheet-preview__meta">98.4% verified</span>
                </div>
                <div className="sheet-preview__grid">
                  <div className="sheet-preview__row sheet-preview__row--head">
                    <span>Name</span>
                    <span>Email</span>
                    <span></span>
                  </div>
                  {sheetRows.map((row, i) => (
                    <div
                      key={row.email}
                      className="sheet-preview__row agency-hub__row"
                      style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                    >
                      <span>{row.name}</span>
                      <span className="sheet-preview__email">{row.email}</span>
                      <span className="sheet-preview__check">✓</span>
                    </div>
                  ))}
                </div>
              </div>
              <ul className="agency-hub__tags">
                {lanes[0].tags.map((tag) => (
                  <li key={tag} className="agency-hub__tag agency-hub__tag--mint">{tag}</li>
                ))}
              </ul>
            </article>

            <article className="agency-hub__feature agency-hub__feature--flow agency-hub__feature--pear">
              <h3 className="agency-hub__feature-title">{lanes[2].title}</h3>
              <p className="agency-hub__feature-text">{lanes[2].text}</p>
              <ol className="agency-hub__flow">
                {automationSteps.map((step, i) => (
                  <li key={step.label} className="agency-hub__flow-step">
                    <span className="agency-hub__flow-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="agency-hub__flow-copy">
                      <strong>{step.label}</strong>
                      <span>{step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <ul className="agency-hub__tags">
                {lanes[2].tags.map((tag) => (
                  <li key={tag} className="agency-hub__tag agency-hub__tag--pear">{tag}</li>
                ))}
              </ul>
            </article>

            {[lanes[1], lanes[3], lanes[4]].map((lane) => (
              <article
                key={lane.id}
                className={`agency-hub__feature agency-hub__feature--card agency-hub__feature--${lane.accent}`}
              >
                <h3 className="agency-hub__feature-title">{lane.title}</h3>
                <p className="agency-hub__feature-text">{lane.text}</p>
                <ul className="agency-hub__tags">
                  {lane.tags.map((tag) => (
                    <li key={tag} className={`agency-hub__tag agency-hub__tag--${lane.accent}`}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="agency-hub__foot">
            <div className="remind remind--delivery agency-hub__remind" role="status">
              <span className="remind__icon remind__icon--cyan" aria-hidden="true"></span>
              <div>
                <p className="remind__head">
                  <b>Milestone delivered</b> · Upwork project
                </p>
                <p className="remind__body">
                  Lists, automations, and web assets —{" "}
                  <span className="remind__time">scoped and owned by the right specialist.</span>
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn btn--mint btn--md agency-hub__cta">
              Scope your project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDeliveryLab;
