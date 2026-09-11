import React from "react";
import { Link } from "react-router-dom";

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
      "Clean, accurate data delivered ahead of schedule. The team understood exactly what we needed.",
    tags: ["Real Estate", "Prospects", "Verified"],
  },
  {
    title: "Marketing Agency Research",
    client: "Digital Marketing Agency",
    result: "2,500+ decision-makers",
    rating: "5.0",
    review:
      "Working with GoLeadFinder on contact list building was a great experience. Detail-oriented and reliable.",
    tags: ["Agency", "Decision-Makers", "ICP"],
  },
  {
    title: "HubSpot Data Cleanup",
    client: "Enterprise SaaS",
    result: "50,000+ records cleaned",
    rating: "5.0",
    review:
      "GoLeadFinder was a great communicator throughout. Database was organized, error-free, and ready for immediate use.",
    tags: ["CRM", "HubSpot", "Data Cleanup"],
  },
];

const Portfolio = ({ showHead = true, limit }) => {
  const shown = typeof limit === "number" ? projects.slice(0, limit) : projects;

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
            <h2 className="section__title">Selected Projects</h2>
            <p className="section__lede">
              Projects completed for clients across SaaS, real estate, marketing,
              and enterprise industries.
            </p>
          </div>
        )}

        <div className="case-list">
          {shown.map((project) => (
            <article key={project.title} className="case-row">
              <header className="case-row__head">
                <div>
                  <p className="case-row__client">{project.client}</p>
                  <h3 className="case-row__title">{project.title}</h3>
                </div>
                <p className="case-row__result">{project.result}</p>
              </header>
              <blockquote className="case-row__quote">
                <p>“{project.review}”</p>
                <footer>
                  <span className="rating-badge">★ {project.rating}</span>
                  <ul className="case-row__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        {typeof limit === "number" && limit < projects.length && (
          <div className="case-list__more">
            <Link to="/portfolio" className="btn btn--outline btn--mint">
              See all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
