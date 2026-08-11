import React from "react";
import PageHero from "../components/PageHero";
import PortfolioComponent from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Portfolio = () => {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Featured projects."
        lede="Completed work across SaaS, real estate, marketing, and enterprise — verified data, delivered on deadline."
      />
      <PortfolioComponent showHead={false} />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Portfolio;
