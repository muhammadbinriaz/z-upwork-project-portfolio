import React from "react";

const PageHero = ({ eyebrow, title, lede, children }) => {
  return (
    <section
      className="section section--page-hero page-hero-clonix"
      style={{ borderBottom: "1px solid var(--color-rule)" }}
    >
      <div className="container-page">
        <p className="page-hero-clonix__eyebrow">
          <span className="hero-clonix__slash">//</span> {eyebrow}
        </p>
        <h1 className="page-hero-clonix__title">{title}</h1>
        {lede && <p className="page-hero-clonix__lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
