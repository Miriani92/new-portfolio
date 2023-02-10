import React from "react";
import styles from "./ProjectGrid.module.css";
import { moreProjects } from "../data/projectData";
import GridCard from "./GridCard";

const ProjectGrid = () => {
  return (
    <section>
      <h1 className={styles.title}>Other projects</h1>
      <div className={styles.projectswrapper}>
        {moreProjects.map((project, index) => {
          return <GridCard key={index} {...project} index={index}></GridCard>;
        })}
      </div>
    </section>
  );
};

export default ProjectGrid;
