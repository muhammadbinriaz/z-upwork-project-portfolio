import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="section section--hero"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--mint"></span>
              About me
            </span>
            <h1 className="section__title">
              Muhammad Zaryab
            </h1>
            <p className="section__lede">
              Top Rated Plus B2B lead generation &amp; contact research specialist
              with 7+ years of experience.
            </p>
          </div>

          {/* Bignum stat */}
          <div style={{ marginTop: "var(--space-4xl)" }}>
            <div className="bignum">
              <span className="bignum__pre">128</span>+
            </div>
            <p className="bignum__k">
              Projects completed on Upwork with a 5.0 client rating
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" style={{ borderTop: "1px solid var(--color-rule)" }}>
        <div className="container-page">
          <div className="grid grid--2" style={{ gap: "var(--space-3xl)", alignItems: "start" }}>
            <div>
              <p
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1.4,
                  marginBottom: "var(--space-lg)",
                }}
              >
                I'm{" "}
                <strong className="text-mint" style={{ fontWeight: 600 }}>
                  Muhammad Zaryab
                </strong>
                , a Top Rated Plus Lead Generation &amp; Contact Research Specialist.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                }}
              >
                I don't just collect names — I identify the right companies,
                research the right decision-makers, verify their contact details,
                and deliver clean, CRM-ready data that helps businesses connect
                with qualified prospects and save valuable research time.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "1 / 1",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--color-rule)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/z.jpeg"
                  alt="Muhammad Zaryab"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="grid grid--2" style={{ gap: "var(--space-3xl)" }}>
            {/* Education */}
            <div>
              <h2
                style={{
                  color: "var(--color-ink)",
                  fontSize: "var(--text-2xl)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Education
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                {[
                  {
                    degree: "BS, Data Analyst & Internet Research",
                    school: "Islamia University Bahawalpur",
                    year: "2018–2020",
                  },
                  {
                    degree: "Associate's, Email Marketing",
                    school: "Islamia University Bahawalpur",
                    year: "2020–2022",
                  },
                  {
                    degree: "Bachelor's, Digital Marketing & Lead Generation",
                    school: "Digital Marketing Institute",
                    year: "2014–2018",
                  },
                ].map((edu, i) => (
                  <div
                    key={i}
                    className="premium-card"
                    style={{ padding: "var(--space-md)", border: "1px solid var(--color-rule)" }}
                  >
                    <p
                      style={{
                        fontSize: "var(--text-base)",
                        color: "var(--color-ink)",
                        fontWeight: 500,
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-muted)",
                      }}
                    >
                      {edu.school}
                    </p>
                    <p
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--color-muted)",
                        marginTop: "var(--space-2xs)",
                      }}
                    >
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications + Employment */}
            <div>
              <h2
                style={{
                  color: "var(--color-ink)",
                  fontSize: "var(--text-2xl)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Certifications
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-md)",
                  marginBottom: "var(--space-2xl)",
                }}
              >
                {[
                  {
                    name: "HubSpot Email Marketing Certified",
                    provider: "HubSpot Academy",
                    year: "2022–2024",
                  },
                  {
                    name: "HubSpot Social Media Marketing",
                    provider: "HubSpot",
                    year: "2022–2024",
                  },
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="premium-card"
                    style={{ padding: "var(--space-md)" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        gap: "var(--space-md)",
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
                          {cert.name}
                        </p>
                        <p
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--color-muted)",
                          }}
                        >
                          {cert.provider}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-accent-2-deep)",
                          fontFamily: "var(--font-label)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h2
                style={{
                  color: "var(--color-ink)",
                  fontSize: "var(--text-2xl)",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Experience
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-md)",
                }}
              >
                {[
                  {
                    role: "Web & Data Scraping Expert",
                    company: "LeadXP",
                    period: "2017–Present",
                  },
                  {
                    role: "Data Analyst",
                    company: "Ticklancer",
                    period: "2017–Present",
                  },
                  {
                    role: "Customer Service Representative",
                    company: "Imtiaz Super Mart",
                    period: "2020–2021",
                  },
                ].map((exp, i) => (
                  <div
                    key={i}
                    className="premium-card"
                    style={{ padding: "var(--space-md)" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        gap: "var(--space-md)",
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
                          {exp.role}
                        </p>
                        <p
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--color-muted)",
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-accent-2-deep)",
                          fontFamily: "var(--font-label)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages + Availability */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="grid grid--3" style={{ gap: "var(--space-lg)" }}>
            {[
              {
                label: "Languages",
                items: ["English — Fluent", "Urdu — Native", "Chinese — Basic"],
              },
              {
                label: "Availability",
                items: ["30+ hrs/week", "Open to contract to hire"],
              },
              {
                label: "Response Time",
                items: ["0–4 hours", "Avg. response time"],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="premium-card"
                style={{
                  padding: "var(--space-xl)",
                  textAlign: "center",
                  border: "1px solid var(--color-rule)",
                }}
              >
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {col.label}
                </p>
                {col.items.map((item, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--color-ink)",
                      fontWeight: j === 0 ? 500 : 400,
                      marginTop: j > 0 ? "var(--space-xs)" : 0,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section--mint"
        style={{
          borderTop: "1px solid var(--color-rule)",
          textAlign: "center",
        }}
      >
        <div className="container-page">
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--color-ink)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Ready to build your next prospect list?
          </h2>
          <Link to="/contact" className="btn btn--mint">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;