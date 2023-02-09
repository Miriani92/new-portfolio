import React, { useRef, useEffect } from "react";
import styles from "./Projectcard.module.css";
import { animateOnScroll } from "../utils/observerOnScroll";

const Projectcard = ({ name, image1, description, reverse = false }) => {
  const descriptionRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    animateOnScroll(
      descriptionRef.current,
      ` ${styles.discriptionWrapper} ${styles.animatediscription}`
    );
    animateOnScroll(
      imageRef.current,
      ` ${styles.images} ${styles.animateimage}`
    );
  }, []);
  return (
    <div className={styles.cardwrapper}>
      <div className={`${styles.card} ${reverse && styles.reverse}`}>
        <div
          className={`${styles.images} ${reverse && styles.imagereverse}`}
          ref={imageRef}
        >
          <div>
            <img src={image1} />
          </div>
        </div>
        <div className={styles.discriptionWrapper} ref={descriptionRef}>
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
