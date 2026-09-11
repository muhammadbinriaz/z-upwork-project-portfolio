import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio limit={2} />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
