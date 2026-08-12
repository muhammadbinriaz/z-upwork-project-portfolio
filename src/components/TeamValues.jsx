import React from "react";
import { teamValues } from "../data/team";

const TeamValues = () => (
  <section className="section section--band team-process">
    <div className="container-page">
      <div className="section__head section__head--center">
        <span className="eyebrow">
          <span className="eyebrow__dot eyebrow__dot--cyan"></span>
          How we work
        </span>
        <h2 className="section__title">
          Four steps from brief to CRM-ready list.
        </h2>
        <p className="section__lede">
          A repeatable workflow — not one person guessing at your ICP over a
          spreadsheet. Every project moves through the same research, verify,
          and deliver pipeline.
        </p>
      </div>

      <ol className="team-process__grid">
        {teamValues.map((value) => (
          <li key={value.id}>
            <article
              className={`team-process__card premium-card process-step-card team-process__card--${value.accent}`}
            >
              <span className="process-step__bg" aria-hidden="true">
                {value.step}
              </span>
              <div className="process-step__body">
                <h3 className="team-process__label">{value.label}</h3>
                <p className="team-process__title">{value.title}</p>
                <p className="team-process__text">{value.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TeamValues;
