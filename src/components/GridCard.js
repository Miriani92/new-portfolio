import React from "react";
import styles from "./GridCard.module.css";

const GridCard = ({ name, description }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GridCard;
