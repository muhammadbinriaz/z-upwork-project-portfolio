import React from "react";

const ACCENTS = ["mint", "cyan", "pear", "coral"];

const projects = [
  {
    title: "SaaS Lead Generation",
    client: "B2B SaaS Company",
    result: "10,000+ verified contacts",
    rating: "5.0",
    review:
      "Outstanding work on the B2B lead generation project. The prospects matched our target audience perfectly, and the final list was CRM-ready.",
    tags: ["Lead Gen", "SaaS", "CRM-Ready"],
  },
  {
    title: "Real Estate Prospect List",
    client: "Commercial Real Estate Firm",
    result: "5,000+ targeted prospects",
    rating: "5.0",
    review:
      "Clean, accurate data delivered ahead of schedule. Muhammad understood exactly what we needed.",
    tags: ["Real Estate", "Prospects", "Verified"],
  },
  {
    title: "Marketing Agency Research",
    client: "Digital Marketing Agency",
    result: "2,500+ decision-makers",
    rating: "5.0",
    review:
      "Working with Muhammad on contact list building was a great experience. Detail-oriented and reliable.",
    tags: ["Agency", "Decision-Makers", "ICP"],
  },
  {
    title: "HubSpot Data Cleanup",
    client: "Enterprise SaaS",
    result: "50,000+ records cleaned",
    rating: "5.0",
    review:
      "Muhammad was a great communicator. Database was organized, error-free, and ready for immediate use.",
    tags: ["CRM", "HubSpot", "Data Cleanup"],
  },
];

const Portfolio = ({ showHead = true }) => {
  return (
    <section
      className={`section${showHead ? "" : " section--tight"}`}
      style={{ borderTop: "1px solid var(--color-rule)" }}
    >
      <div className="container-page">
        {showHead && (
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--pear"></span>
              Completed work
            </span>
            <h2 className="section__title">
              Selected Projects
            </h2>
            <p className="section__lede">
              Projects completed for clients across SaaS, real estate, marketing,
              and enterprise industries.
            </p>
          </div>
        )}

        <div className="grid grid--2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`premium-card service-card service-card--${ACCENTS[i % ACCENTS.length]}`}
              style={{ padding: "var(--space-lg)" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.client}
                </span>
                <span className="rating-badge">
                  ★ {project.rating}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "var(--text-2xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1.1,
                  marginBottom: "var(--space-sm)",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--color-accent-2-deep)",
                  fontFamily: "var(--font-label)",
                  fontWeight: 500,
                  marginBottom: "var(--space-md)",
                }}
              >
                {project.result}
              </p>

              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-muted)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  marginBottom: "var(--space-md)",
                }}
              >
                "{project.review}"
              </p>

              <div style={{ display: "flex", gap: "var(--space-xs)", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="chip" style={{ fontSize: "var(--text-xs)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;