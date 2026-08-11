import React from "react";
import { Link } from "react-router-dom";
import SectionIntro from "./SectionIntro";

const projects = [
  {
    num: "01",
    title: "SaaS Lead Generation",
    client: "B2B SaaS Company",
    result: "10,000+ verified contacts",
    rating: "5.0",
    review:
      "Outstanding work on the B2B lead generation project. The prospects matched our target audience perfectly, and the final list was CRM-ready.",
    tags: ["Lead Gen", "SaaS", "CRM-Ready"],
  },
  {
    num: "02",
    title: "Real Estate Prospect List",
    client: "Commercial Real Estate Firm",
    result: "5,000+ targeted prospects",
    rating: "5.0",
    review:
      "Clean, accurate data delivered ahead of schedule. Muhammad understood exactly what we needed.",
    tags: ["Real Estate", "Prospects", "Verified"],
  },
  {
    num: "03",
    title: "Marketing Agency Research",
    client: "Digital Marketing Agency",
    result: "2,500+ decision-makers",
    rating: "5.0",
    review:
      "Working with Muhammad on contact list building was a great experience. Detail-oriented and reliable.",
    tags: ["Agency", "Decision-Makers", "ICP"],
  },
  {
    num: "04",
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
      id="work"
      style={{ borderTop: "1px solid var(--color-rule)" }}
    >
      <div className="container-page">
        {showHead && (
          <SectionIntro
            eyebrow="Featured work"
            title="Selected projects that scale pipeline."
            lede="Real deliverables for SaaS, real estate, agencies, and enterprise teams — verified data, on deadline."
          />
        )}

        <div className="work-grid">
          {projects.map((project) => (
            <article key={project.num} className="work-card premium-card">
              <div className="work-card__top">
                <span className="work-card__num">{project.num}</span>
                <span className="rating-badge">★ {project.rating}</span>
              </div>
              <p className="work-card__client">{project.client}</p>
              <h3 className="work-card__title">{project.title}</h3>
              <p className="work-card__result">{project.result}</p>
              <p className="work-card__review">&ldquo;{project.review}&rdquo;</p>
              <div className="work-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {showHead && (
          <div className="section-cta section-cta--center">
            <Link to="/portfolio" className="btn btn--outline btn--ink btn--md">
              View all work <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
