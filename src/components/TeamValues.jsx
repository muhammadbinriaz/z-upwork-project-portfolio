import React from "react";
import { teamValues } from "../data/team";

const TeamValues = () => (
  <section className="section section--band team-process">
    <div className="container-page">
      <div className="section__head">
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

      <ol className="step-rail">
        {teamValues.map((value) => (
          <li key={value.id} className="step-rail__item">
            <span className="step-rail__num" aria-hidden="true">
              {value.step}
            </span>
            <div className="step-rail__body">
              <p className="step-rail__label">{value.label}</p>
              <h3 className="step-rail__title">{value.title}</h3>
              <p className="step-rail__text">{value.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TeamValues;
