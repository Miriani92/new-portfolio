import React from "react";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
const Page = () => {
  return (
    <React.Fragment>
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
    </React.Fragment>
  );
};

export default Page;
