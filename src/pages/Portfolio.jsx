import React from "react";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const projects = [
  {
    title: "SaaS Lead Generation",
    client: "B2B SaaS Company",
    result: "10,000+ verified contacts delivered",
    rating: "5.0",
    review:
      "Outstanding work on the B2B lead generation project. The prospects matched our target audience perfectly, and the final list was CRM-ready. Delivered ahead of schedule with clear communication throughout.",
    tags: ["Lead Gen", "SaaS", "CRM-Ready"],
  },
  {
    title: "Real Estate Prospect List",
    client: "Commercial Real Estate Firm",
    result: "5,000+ targeted prospects",
    rating: "5.0",
    review:
      "Clean, accurate data delivered ahead of schedule. Muhammad understood exactly what we needed — decision-makers at commercial property firms with verified contact details. Highly professional.",
    tags: ["Real Estate", "Prospects", "Verified"],
  },
  {
    title: "Marketing Agency Research",
    client: "Digital Marketing Agency",
    result: "2,500+ decision-makers identified",
    rating: "5.0",
    review:
      "Working with Muhammad on contact list building was a great experience. He's detail-oriented, reliable, and actually cares about quality. The contact information was accurate and well-targeted to our ICP.",
    tags: ["Agency", "Decision Makers", "ICP"],
  },
  {
    title: "HubSpot Data Cleanup",
    client: "Enterprise SaaS",
    result: "50,000+ records cleaned and enriched",
    rating: "5.0",
    review:
      "Muhammad was a great communicator and followed directions well, completing all the work in a timely fashion. The database was organized, error-free, and ready for immediate use. Would recommend to any team.",
    tags: ["CRM", "HubSpot", "Data Cleanup"],
  },
  {
    title: "Email Research Campaign",
    client: "Growth-Stage Startup",
    result: "1,000+ verified email addresses",
    rating: "5.0",
    review:
      "Excellent work on email research and lead generation tasks. The contact information was accurate, well-targeted, and delivered in a clean format. Exactly what our outbound sales team needed to start booking meetings.",
    tags: ["Email", "Outbound", "Startup"],
  },
  {
    title: "Commercial Cleaning Leads",
    client: "Facility Services Company",
    result: "750+ qualified prospects with direct dials",
    rating: "5.0",
    review:
      "Endorsed by client for being solution-oriented, a clear communicator, and detail-oriented. Muhammad delivered qualified B2B leads that our sales team could action immediately. Excellent ongoing support.",
    tags: ["B2B", "Cleaning", "Direct Dials"],
  },
];

const tilts = [2, -1.5, 2.5, -2, 1.5, -2.5];

const Portfolio = () => {
  return (
    <>
      <section
        className="section--hero section--gradient"
        style={{
          paddingBlockEnd: "var(--space-2xl)",
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        <div
          className="gradient-orb gradient-orb--top-right"
          aria-hidden="true"
        />
        <div
          className="container-page"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1 style={{ color: "var(--color-ink)" }}>Portfolio</h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-muted)",
              maxWidth: "55ch",
              marginTop: "var(--space-sm)",
            }}
          >
            Selected projects completed for clients across SaaS, real estate,
            marketing, and enterprise industries.
          </p>
        </div>
      </section>

      {/* Stacking Project Cards */}
      <section style={{ position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="sticky top-0"
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: i + 1,
              }}
            >
              <div
                className="card--gradient"
                style={{
                  transform: `rotate(${tilts[i]}deg)`,
                  width: "min(90vw, 38rem)",
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: "var(--color-paper-2)",
                  border: "1px solid var(--color-rule)",
                  padding: "clamp(2rem, 5vw, 3.5rem)",
                  boxShadow: "0 20px 60px var(--color-shadow)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-lg)",
                  position: "relative",
                  isolation: "isolate",
                  transition:
                    "border-color 220ms var(--ease-out), transform 220ms var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-rule)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-md)",
                    flex: 1,
                  }}
                >
                  {/* Top row: Client + Rating */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
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
                    </div>
                    <span
                      style={{
                        backgroundColor:
                          "color-mix(in oklch, var(--color-accent) 20%, transparent)",
                        color: "var(--color-accent)",
                        padding: "4px 14px",
                        borderRadius: "var(--radius-full)",
                        fontSize: "var(--text-sm)",
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
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      color: "var(--color-ink)",
                      fontFamily: "var(--font-display)",
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Result — bigger */}
                  <p
                    style={{
                      fontSize: "var(--text-lg)",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-outlier)",
                      fontWeight: 500,
                    }}
                  >
                    {project.result}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "var(--color-rule)",
                      opacity: 0.5,
                    }}
                  />

                  {/* Review — longer, bigger */}
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--color-muted)",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    "{project.review}"
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-xs)",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-muted)",
                          border: "1px solid var(--color-rule)",
                          borderRadius: "var(--radius-full)",
                          padding: "2px 10px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ height: "20vh" }} />
      </section>

      <Testimonials />
      <Contact />
    </>
  );
};

export default Portfolio;
