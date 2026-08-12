import React from "react";
import { Link } from "react-router-dom";
import TeamCarousel from "../components/TeamCarousel";
import TeamValues from "../components/TeamValues";

const teamStats = [
  { value: "128+", label: "Projects delivered", accent: "mint" },
  { value: "6", label: "Core specialists", accent: "cyan" },
  { value: "5.0", label: "Upwork rating", accent: "pear" },
  { value: "<2%", label: "Avg. bounce rate", accent: "coral" },
];

const About = () => {
  return (
    <>
      <section
        className="section section--page-hero about-hero"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--mint"></span>
              About
            </span>
            <h1 className="section__title">
              The team behind{" "}
              <span className="hl hl--mint">GoLeadFinder</span>.
            </h1>
            <p className="section__lede">
              A small, senior crew focused on B2B research, verified contacts,
              and CRM-ready delivery — with dedicated specialists for every lane.
            </p>
          </div>

          <div className="page-hero__bignum">
            <div className="bignum">
              <span className="bignum__pre">128</span>+
            </div>
            <p className="bignum__k">
              Projects completed on Upwork with a 5.0 client rating
            </p>
          </div>
        </div>
      </section>

      <section className="section about-mission">
        <div className="container-page">
          <div className="about-mission__grid">
            <div className="about-mission__copy">
              <span className="eyebrow">
                <span className="eyebrow__dot eyebrow__dot--pear"></span>
                Our mission
              </span>
              <h2 className="about-mission__title">
                Prospect lists that sales teams actually trust.
              </h2>
              <p className="about-mission__text">
                GoLeadFinder started with one obsession: stop sending reps
                into outreach with stale spreadsheets. Today we&apos;re a
                coordinated team — strategists, verifiers, and CRM operators —
                shipping ICP-mapped lists your pipeline can use immediately.
              </p>
              <p className="about-mission__text">
                We combine Sales Navigator, Apollo, Clay, and verification
                tools into a repeatable workflow so you get decision-maker
                contacts, not just names.
              </p>
              <div className="about-mission__actions">
                <Link to="/contact" className="btn btn--mint btn--md">
                  Work with us
                </Link>
                <Link to="/services" className="btn btn--outline btn--pear btn--md">
                  See services
                </Link>
              </div>
            </div>

            <div className="about-mission__stats">
              {teamStats.map((stat) => (
                <article
                  key={stat.label}
                  className={`about-mission__stat premium-card about-mission__stat--${stat.accent}`}
                >
                  <p className="about-mission__stat-value">{stat.value}</p>
                  <p className="about-mission__stat-label">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamCarousel />
      <TeamValues />

      <section className="section section--mint about-cta">
        <div className="container-page about-cta__inner">
          <h2 className="about-cta__title">
            Ready to meet the team on your next list build?
          </h2>
          <p className="about-cta__lede">
            Tell us your ICP, stack, and timeline — we&apos;ll scope a project
            and assign the right specialists from day one.
          </p>
          <Link to="/contact" className="btn btn--mint btn--lg">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
