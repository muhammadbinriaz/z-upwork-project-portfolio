import React from "react";

const About = () => {
  return (
    <>
      <section
        className="section--hero"
        style={{
          paddingBlockEnd: "var(--space-2xl)",
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        <div className="container-page">
          <h1 style={{ color: "var(--color-ink)" }}>About</h1>
        </div>
      </section>

      <section className="section--tight section--gradient">
        <div
          className="gradient-orb gradient-orb--top-right"
          aria-hidden="true"
        />
        <div
          className="container-page"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "var(--space-3xl)",
            }}
            className="about-grid"
          >
            {/* Left: Bio */}
            <div>
              <p
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-xl)",
                }}
              >
                I'm{" "}
                <strong style={{ color: "var(--color-ink)", fontWeight: 500 }}>
                  Muhammad Zaryab
                </strong>
                , a Top Rated Plus Lead Generation & Contact Research Specialist
                with 7+ years of experience helping SaaS companies, agencies,
                recruiters, consultants, and sales teams build high-quality
                prospect lists with verified contact information.
              </p>

              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-2xl)",
                }}
              >
                I don't just collect names — I identify the right companies,
                research the right decision-makers, verify their contact
                details, and deliver clean, CRM-ready data that helps businesses
                connect with qualified prospects and save valuable research
                time.
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "var(--space-md)",
                  paddingTop: "var(--space-lg)",
                  borderTop: "1px solid var(--color-rule)",
                }}
                className="about-stats"
              >
                <div>
                  <div
                    className="stat-figure"
                    style={{ fontSize: "var(--text-4xl)" }}
                  >
                    128
                  </div>
                  <p
                    className="stat-qualifier"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Projects
                  </p>
                </div>
                <div>
                  <div
                    className="stat-figure"
                    style={{ fontSize: "var(--text-4xl)" }}
                  >
                    5.0
                  </div>
                  <p
                    className="stat-qualifier"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Rating
                  </p>
                </div>
                <div>
                  <div
                    className="stat-figure"
                    style={{ fontSize: "var(--text-4xl)" }}
                  >
                    7+
                  </div>
                  <p
                    className="stat-qualifier"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Years
                  </p>
                </div>
                <div>
                  <div
                    className="stat-figure"
                    style={{ fontSize: "var(--text-4xl)" }}
                  >
                    14
                  </div>
                  <p
                    className="stat-qualifier"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Tools
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Profile card */}
            <div
              className="gradient-border"
              style={{
                padding: "var(--space-xl)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-md)",
                height: "fit-content",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-wordmark)",
                  fontSize: "var(--text-4xl)",
                  fontWeight: 400,
                  color: "var(--color-accent-ink)",
                }}
              >
                MZ
              </div>
              <h2
                style={{
                  fontSize: "var(--text-2xl)",
                  color: "var(--color-ink)",
                }}
              >
                Muhammad Zaryab
              </h2>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                }}
              >
                Top Rated Plus Specialist
              </p>

              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid var(--color-rule)",
                  paddingTop: "var(--space-md)",
                }}
              >
                <h3
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  Education
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-sm)",
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-ink)",
                        fontWeight: 500,
                      }}
                    >
                      BS, Data Analyst & Internet Research
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--color-muted)",
                      }}
                    >
                      Islamia University Bahawalpur · 2018–2020
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-ink)",
                        fontWeight: 500,
                      }}
                    >
                      Bachelor's, Digital Marketing
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--color-muted)",
                      }}
                    >
                      Digital Marketing Institute · 2014–2018
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid var(--color-rule)",
                  paddingTop: "var(--space-md)",
                }}
              >
                <h3
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  Certifications
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-xs)",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-ink)",
                    }}
                  >
                    HubSpot Email Marketing Certified
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-ink)",
                    }}
                  >
                    HubSpot Social Media Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 60rem) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;
