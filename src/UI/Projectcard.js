import React from "react";
import styles from "./Projectcard.module.css";

const Projectcard = ({ name, image1, image2, description }) => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.card}>
        <div className={styles.discription}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.images}>
          <div>
            <img src={image1} />
          </div>
          <div>
            <img src={image2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
