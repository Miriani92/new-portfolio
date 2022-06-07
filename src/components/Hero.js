import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const moveDivs = (e) => {
      const allDivs = divRef.current.childNodes;
    };
    document.addEventListener("mousemove", moveDivs);
  }, []);
  return (
    <main className={styles.hero} ref={divRef}>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
      <div className={styles.three}></div>
      <div className={styles.four}></div>
      <div className={styles.five}></div>
      <div className={styles.six}></div>
      <div className={styles.seven}></div>
      <div className={styles.eight}></div>
      <h1>Hi, I'm Miriani</h1>
      <div className={styles.address}>
        <FiMapPin />
        <p>Tbilissi, Georgia</p>
      </div>
      <p>
        I'm self-tought web developer,I enjoy building web that is interactive,
        easy to use, beautiful, accessible to all
      </p>
    </main>
  );
};

export default Hero;
