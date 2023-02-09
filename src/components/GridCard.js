import React, { useRef, useEffect } from "react";
import styles from "./GridCard.module.css";
import { AiFillFolder } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { animateOnScroll } from "../utils/observerOnScroll";

const GridCard = ({ name, description, stack, index }) => {
  const projectCardRef = useRef();

  useEffect(() => {
    animateOnScroll(
      projectCardRef.current,
      `${styles.card} ${styles.animatecard}`,
      "var(--other-color)"
    );
  }, []);

  return (
    <div
      className={styles.card}
      ref={projectCardRef}
      style={{ "--delay": `${(index + 0.1) / 10}s` }}
    >
      <div className={styles.iconwrapper}>
        <AiFillFolder className={styles.folder} />
        <BsGithub className={styles.github} />
      </div>
      <div className={styles.descriptionwrapper}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.stack}>
        {stack.map((technology, index) => {
          return <p key={index}>{technology}</p>;
        })}
      </div>
    </div>
  );
};

export default GridCard;
