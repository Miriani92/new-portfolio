import React from "react";
import styles from "./ProjectGrid.module.css";
import { moreProjects } from "../data/projectData";
import GridCard from "./GridCard";

const ProjectGrid = () => {
  return (
    <section>
      <h2 style={{ textAlign: "center", marginBottom: 42 }}>Other projects</h2>
      <div className={styles.projectswrapper}>
        {moreProjects.map((project, index) => {
          return <GridCard key={index} {...project}></GridCard>;
        })}
      </div>
    </section>
  );
};

export default ProjectGrid;
