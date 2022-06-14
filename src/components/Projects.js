import React from "react";
import styles from "./Projects.module.css";
import Projectcard from "../UI/Projectcard";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>Some of my Projcts</h2>
      {projects.map((item, ind) => {
        return <Projectcard key={ind} {...item}></Projectcard>;
      })}
    </div>
  );
};

export default Projects;
