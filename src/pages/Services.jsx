import React from "react";
import PageHero from "../components/PageHero";
import ServicesComponent from "../components/Services";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";

const Services = () => {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do best, and then some."
        lede="B2B lead generation, contact research, data enrichment, and CRM delivery for SaaS companies, agencies, and sales teams."
      />
      <ServicesComponent showHead={false} variant="full" />
      <Tools />
      <Pricing />
      <Contact />
    </>
  );
};

export default Services;
