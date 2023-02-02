import React from "react";
import styles from "./Projects.module.css";
import Projectcard from "../UI/Projectcard";
import { projects } from "../data/projectData";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div className={styles.projects} id="Projects">
      <h2 className={styles.title}>Some of my Projects</h2>
      {projects.map((item, ind) => {
        return <Projectcard key={ind} {...item}></Projectcard>;
      })}
      <ProjectGrid></ProjectGrid>
    </div>
  );
};

export default Projects;
