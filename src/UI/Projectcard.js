import React from "react";
import styles from "./Projectcard.module.css";
import { FaArrowRight } from "react-icons/fa";

const Projectcard = ({ name, image1, image2, description }) => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.card}>
        <div className={styles.discription}>
          <h3>{name}</h3>
          <p>{description}</p>
          <button>
            See more
            <FaArrowRight />
          </button>
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
