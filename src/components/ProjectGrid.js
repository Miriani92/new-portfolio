import React, { useRef, useEffect } from "react";
import styles from "./ProjectGrid.module.css";
import { moreProjects } from "../data/projectData";
import GridCard from "./GridCard";
import { animateOnScroll } from "../utils/observerOnScroll";

const ProjectGrid = () => {
  const projectCardRef = useRef();

  useEffect(() => {
    animateOnScroll(projectCardRef.current, null, "var(--other-color)");
  }, []);
  return (
    <section>
      <h1 className={styles.title} ref={projectCardRef}>
        Other projects
      </h1>
      <div className={styles.projectswrapper}>
        {moreProjects.map((project, index) => {
          return <GridCard key={index} {...project} index={index}></GridCard>;
        })}
      </div>
    </section>
  );
};

export default ProjectGrid;
