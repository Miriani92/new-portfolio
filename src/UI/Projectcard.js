import React from "react";
import styles from "./Projectcard.module.css";

const Projectcard = ({ name, image1, description, reverse = false }) => {
  return (
    <div className={styles.cardwrapper}>
      <div className={`${styles.card} ${reverse && styles.reverse}`}>
        <div className={`${styles.images} ${reverse && styles.imagereverse}`}>
          <div>
            <img src={image1} />
          </div>
        </div>
        <div className={styles.discriptionWrapper}>
          <p className={`${styles.featured} ${reverse && styles.reversedtext}`}>
            Featured project
          </p>
          <h2
            className={`${styles.featured} ${reverse && styles.reversedtext}`}
          >
            {name}
          </h2>
          <div
            className={`${styles.discription} ${
              reverse && styles.discriptionreversed
            }`}
          >
            <p>{description}</p>
            {/* <button>
            See more
            <FaArrowRight />
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
