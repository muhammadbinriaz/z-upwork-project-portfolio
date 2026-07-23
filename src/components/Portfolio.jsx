import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "SaaS Lead Generation",
      client: "B2B SaaS Company",
      result: "10,000+ verified contacts",
      rating: "5.0",
      review:
        "Outstanding work. Prospects matched our target audience perfectly.",
    },
    {
      title: "Real Estate Prospect List",
      client: "Commercial Real Estate Firm",
      result: "5,000+ targeted prospects",
      rating: "5.0",
      review: "Clean, accurate data delivered ahead of schedule.",
    },
    {
      title: "Marketing Agency Research",
      client: "Digital Marketing Agency",
      result: "2,500+ decision-makers",
      rating: "5.0",
      review: "Detail-oriented, reliable, and genuinely cares about quality.",
    },
    {
      title: "HubSpot Data Cleanup",
      client: "Enterprise SaaS",
      result: "50,000+ records cleaned",
      rating: "5.0",
      review: "Great communicator, followed directions perfectly.",
    },
    {
      title: "Email Research Campaign",
      client: "Growth-Stage Startup",
      result: "1,000+ verified emails",
      rating: "5.0",
      review: "Accurate, well-targeted, delivered in clean format.",
    },
    {
      title: "Commercial Cleaning Leads",
      client: "Facility Services Company",
      result: "750+ qualified prospects",
      rating: "5.0",
      review: "Excellent work. Database organized and error-free.",
    },
  ];

  return (
    <section className="section--tight">
      <div className="container-page">
        <h2
          style={{
            color: "var(--color-ink)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Completed Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "var(--space-md)",
          }}
          className="portfolio-grid"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="card--gradient"
              style={{
                position: "relative",
                isolation: "isolate",
                backgroundColor: "var(--color-paper-2)",
                border: "1px solid var(--color-rule)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-lg)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-sm)",
                transition:
                  "transform 180ms var(--ease-out), border-color 180ms var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--color-rule)";
              }}
            >
              {/* Card content above gradient */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                  flex: 1,
                }}
              >
                {/* Rating badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                  <span
                    style={{
                      backgroundColor:
                        "color-mix(in oklch, var(--color-accent) 20%, transparent)",
                      color: "var(--color-accent)",
                      padding: "2px 10px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--font-outlier)",
                      fontWeight: 500,
                    }}
                  >
                    ★ {project.rating}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "var(--text-lg)",
                    color: "var(--color-ink)",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

                {/* Result */}
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-outlier)",
                  }}
                >
                  {project.result}
                </p>

                {/* Review quote */}
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                    lineHeight: 1.5,
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  "{project.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 60rem) {
          .portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 40rem) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
