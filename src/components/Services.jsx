import React from "react";

const Services = () => {
  const services = [
    {
      title: "B2B Lead Generation",
      icon: "Users",
      span: "2x1",
      description:
        "Targeted prospect lists matching your ideal customer profile with verified contact data.",
    },
    {
      title: "Contact Research",
      icon: "Search",
      span: "1x1",
      description:
        "Decision-maker identification with verified emails and direct dials.",
    },
    {
      title: "Data Enrichment",
      icon: "Database",
      span: "1x1",
      description:
        "Clean, enrich, and update your existing CRM data for accuracy.",
    },
    {
      title: "Email List Building",
      icon: "Mail",
      span: "1x2",
      description:
        "Verified business email lists with bounce rates under 2%. CRM-ready format.",
    },
    {
      title: "LinkedIn Research",
      icon: "Building2",
      span: "1x1",
      description:
        "Deep-dive company and contact research using Sales Navigator.",
    },
    {
      title: "CRM Data Cleaning",
      icon: "Sparkles",
      span: "1x1",
      description:
        "Duplicate removal, formatting, and enrichment for HubSpot & Salesforce.",
    },
  ];

  const getSpanStyle = (span) => {
    switch (span) {
      case "2x1":
        return { gridColumn: "span 2" };
      case "1x2":
        return { gridRow: "span 2" };
      default:
        return {};
    }
  };

  return (
    <section
      className="section section--gradient"
      style={{ borderTop: "1px solid var(--color-rule)" }}
    >
      {/* Static orbs for atmosphere */}
      <div
        className="gradient-orb gradient-orb--top-right"
        aria-hidden="true"
      />
      <div
        className="gradient-orb gradient-orb--bottom-left"
        aria-hidden="true"
      />

      <div
        className="container-page"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2
          style={{
            color: "var(--color-ink)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "var(--space-md)",
          }}
          className="bento-grid"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card--gradient"
              style={{
                ...getSpanStyle(service.span),
                position: "relative",
                isolation: "isolate",
                backgroundColor: "var(--color-paper-2)",
                border: "1px solid var(--color-rule)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-lg)",
                transition:
                  "transform 180ms var(--ease-out), background-color 180ms var(--ease-out), border-color 180ms var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "var(--color-paper-3)";
                e.currentTarget.style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "var(--color-paper-2)";
                e.currentTarget.style.borderColor = "var(--color-rule)";
              }}
            >
              {/* Card content above gradient */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor:
                      "color-mix(in oklch, var(--color-accent) 15%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "var(--space-md)",
                    color: "var(--color-accent)",
                  }}
                >
                  <ServiceIcon name={service.icon} />
                </div>
                <h3
                  style={{
                    fontSize: "var(--text-xl)",
                    color: "var(--color-ink)",
                    marginBottom: "var(--space-xs)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
  @media (max-width: 60rem) {
    .bento-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }
  @media (max-width: 40rem) {
    .bento-grid {
      grid-template-columns: 1fr !important;
    }
    .bento-grid > div {
      grid-column: span 1 !important;
      grid-row: span 1 !important;
    }
  }
`}</style>
    </section>
  );
};

// Simple inline SVG icons to avoid icon library dependency issues
const ServiceIcon = ({ name }) => {
  const icons = {
    Users: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    Search: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    Database: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    Mail: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    Building2: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 22V2h12v20" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
    Sparkles: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

export default Services;
