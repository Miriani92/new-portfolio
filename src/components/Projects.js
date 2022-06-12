import React from "react";
import styles from "./Projects.module.css";
import Projectcard from "../UI/Projectcard";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <div className={styles.projects}>
      {projects.map((item, ind) => {
        return <Projectcard key={ind} {...item}></Projectcard>;
      })}
    </div>
  );
};

export default Projects;
