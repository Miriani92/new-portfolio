import React from "react";
import styles from "./GridCard.module.css";
import { AiFillFolder } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const GridCard = ({ name, description, stack }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconwrapper}>
        <AiFillFolder className={styles.folder} />
        <BsGithub className={styles.github} />
      </div>
      <div className={styles.descriptionwrapper}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.stack}>
        {stack.map((technology) => {
          return <p>{technology}</p>;
        })}
      </div>
    </div>
  );
};

export default GridCard;
