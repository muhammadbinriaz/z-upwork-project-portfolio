import React from "react";

const SectionIntro = ({
  eyebrow,
  title,
  lede,
  centered = false,
  action,
}) => {
  return (
    <div className={`section-intro${centered ? " section-intro--center" : ""}`}>
      <p className="section-intro__eyebrow">
        <span className="hero-clonix__slash">//</span> {eyebrow}
      </p>
      <h2 className="section-intro__title">{title}</h2>
      {lede && <p className="section-intro__lede">{lede}</p>}
      {action}
    </div>
  );
};

export default SectionIntro;
