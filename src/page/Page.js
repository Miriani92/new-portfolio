import React from "react";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
const Page = () => {
  return (
    <React.Fragment>
      <Hero />
      <Expertise />
      <Projects />
    </React.Fragment>
  );
};

export default Page;
