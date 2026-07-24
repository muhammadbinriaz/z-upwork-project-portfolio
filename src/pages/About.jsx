import React from "react";
import Lanyard from "../components/Lanyard";
const stats = [
  {
    value: "128",
    label: "Projects Completed",
    detail: "Across SaaS, real estate, marketing, and enterprise industries",
    extra: "10 in progress",
  },
  {
    value: "5.0",
    label: "Client Rating",
    detail: "Consistent 5-star feedback across all completed projects",
    extra: "Top Rated Plus",
  },
  {
    value: "7+",
    label: "Years Experience",
    detail: "Helping businesses build qualified prospect lists since 2017",
    extra: "100+ happy clients",
  },
  {
    value: "14",
    label: "Tools & Platforms",
    detail: "Apollo, LinkedIn Sales Nav, Clay, HubSpot, Salesforce & more",
    extra: "Always expanding",
  },
];

const tilts = [2, -2, 1.5, -1.5];

const About = () => {
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
          <h1 style={{ color: "var(--color-ink)" }}>About</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className="section--tight"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "var(--space-3xl)",
              alignItems: "center",
            }}
            className="about-intro-grid"
          >
            {/* Left: Text */}
            <div>
              <p
                style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--color-ink)",
                  lineHeight: 1.4,
                  marginBottom: "var(--space-lg)",
                  fontFamily: "var(--font-display)",
                }}
              >
                I'm{" "}
                <strong
                  style={{ color: "var(--color-accent)", fontWeight: 400 }}
                >
                  Muhammad Zaryab
                </strong>
                , a Top Rated Plus Lead Generation & Contact Research Specialist
                with 7+ years of experience.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-lg)",
                }}
              >
                I don't just collect names — I identify the right companies,
                research the right decision-makers, verify their contact
                details, and deliver clean, CRM-ready data that helps businesses
                connect with qualified prospects and save valuable research
                time.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                }}
              >
                Whether you need 100 qualified prospects, 10,000 verified
                contacts, or ongoing lead generation support, I deliver
                organized, reliable data tailored to your ideal customer
                profile.
              </p>
            </div>

            {/* Right: Photo */}
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

      {/* Stats Stacking Cards */}
      <section style={{ position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {stats.map((stat, i) => (
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
                  width: "min(88vw, 34rem)",
                  borderRadius: "var(--radius-xl)",
                  backgroundColor: "var(--color-paper-2)",
                  border: "1px solid var(--color-rule)",
                  padding: "clamp(2rem, 5vw, 3.5rem)",
                  boxShadow: "0 20px 60px var(--color-shadow)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-lg)",
                  textAlign: "center",
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
                    alignItems: "center",
                    gap: "var(--space-md)",
                  }}
                >
                  <div
                    className="stat-figure"
                    style={{
                      fontSize: "clamp(3.5rem, 7vw, 7rem)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-xl)",
                      color: "var(--color-ink)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                    }}
                  >
                    {stat.label}
                  </p>
                  <div
                    style={{
                      width: "40px",
                      height: "3px",
                      borderRadius: "2px",
                      backgroundColor: "var(--color-accent)",
                      opacity: 0.6,
                    }}
                  />
                  <p
                    style={{
                      fontSize: "var(--text-base)",
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                      maxWidth: "30ch",
                    }}
                  >
                    {stat.detail}
                  </p>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-outlier)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      backgroundColor:
                        "color-mix(in oklch, var(--color-accent) 12%, transparent)",
                      padding: "4px 14px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {stat.extra}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: "20vh" }} />
      </section>

      {/* Education & Certifications */}
      <section
        className="section--tight section--gradient"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      >
        <div
          className="gradient-orb gradient-orb--bottom-left"
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
            {/* Education */}
            <div>
              <h2
                style={{
                  color: "var(--color-ink)",
                  fontSize: "var(--text-2xl)",
                  marginBottom: "var(--space-lg)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Education
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-lg)",
                }}
              >
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
                    className="card--gradient"
                    style={{
                      backgroundColor: "var(--color-paper-2)",
                      border: "1px solid var(--color-rule)",
                      borderRadius: "var(--radius-lg)",
                      padding: "var(--space-lg)",
                      position: "relative",
                      isolation: "isolate",
                      transition: "border-color 220ms var(--ease-out)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-rule)";
                    }}
                  >
                    <div style={{ position: "relative", zIndex: 1 }}>
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
                  fontFamily: "var(--font-display)",
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
                    className="card--gradient"
                    style={{
                      backgroundColor: "var(--color-paper-2)",
                      border: "1px solid var(--color-rule)",
                      borderRadius: "var(--radius-lg)",
                      padding: "var(--space-md)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "var(--space-md)",
                      position: "relative",
                      isolation: "isolate",
                      transition: "border-color 220ms var(--ease-out)",
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
                          color: "var(--color-accent)",
                          fontFamily: "var(--font-outlier)",
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
                  fontFamily: "var(--font-display)",
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
                    className="card--gradient"
                    style={{
                      backgroundColor: "var(--color-paper-2)",
                      border: "1px solid var(--color-rule)",
                      borderRadius: "var(--radius-lg)",
                      padding: "var(--space-md)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "var(--space-md)",
                      position: "relative",
                      isolation: "isolate",
                      transition: "border-color 220ms var(--ease-out)",
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
                          color: "var(--color-accent)",
                          fontFamily: "var(--font-outlier)",
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
        className="section--tight"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
              gap: "var(--space-lg)",
            }}
            className="about-bottom-grid"
          >
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
                className="card--gradient"
                style={{
                  backgroundColor: "var(--color-paper-2)",
                  border: "1px solid var(--color-rule)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-xl)",
                  textAlign: "center",
                  position: "relative",
                  isolation: "isolate",
                  transition: "border-color 220ms var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-rule)";
                }}
              >
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 60rem) {
          .about-intro-grid,
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;