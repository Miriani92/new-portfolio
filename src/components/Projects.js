import React from "react";
import styles from "./Projects.module.css";
import Projectcard from "../UI/Projectcard";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2
        style={{
          marginBottom: "2rem",
          borderBottom: "2px solid rgba(19, 19, 19, 0.74)",
          padding: ".5rem",
          color: "rgba(19, 19, 19, 0.74)",
          fontWeight: 700,
        }}
      >
        Some of my Projcts
      </h2>

      {projects.map((item, ind) => {
        return <Projectcard key={ind} {...item}></Projectcard>;
      })}
    </div>
  );
};

export default Projects;
