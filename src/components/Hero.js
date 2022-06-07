import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const moveDivs = (e) => {
      const allDivs = divRef.current.childNodes;
      let rotateValue = 13;
      const x = (e.pageX * 3) / 100;
      const y = (e.pageY * 3) / 100;
      allDivs.forEach((element) => {
        element.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotateValue}deg) `;
        rotateValue += 13;
      });
    };
    document.addEventListener("mousemove", moveDivs);
  }, []);
  return (
    <main className={styles.hero}>
      <article ref={divRef} className={styles.divWrapper}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
        <div className={styles.four}></div>
        <div className={styles.five}></div>
        <div className={styles.six}></div>
        <div className={styles.seven}></div>
        <div className={styles.eight}></div>
      </article>
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
