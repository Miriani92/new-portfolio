import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import { FiMapPin } from "react-icons/fi";
import { animateOnScroll } from "../utils/observerOnScroll";

const Hero = () => {
  const divRef = useRef(null);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const allDivs = divRef.current.childNodes;
    let rotateValue = 1;
    const moveDivs = (e) => {
      const x = (e.pageX * 3) / 100;
      const y = (e.pageY * 3) / 100;
      allDivs.forEach((element) => {
        element.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotateValue}deg) `;
        rotateValue += 0.4;
      });
    };
    animateOnScroll(
      wrapperRef.current,
      `${styles.herowrapper} ${styles.animateHero}`
    );
    document.addEventListener("mousemove", moveDivs);
    return () => {
      document.removeEventListener("mousemove", moveDivs);
    };
  }, []);
  return (
    <section className={styles.herowrapper} ref={wrapperRef}>
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
        <h1 className={styles.title}>Hi, I'm Miriani</h1>
        <div className={styles.address}>
          <FiMapPin />
          <p>Tbilissi, Georgia</p>
        </div>
        <p>
          I'm web developer, I enjoy building web that is interactive, easy to
          use, beautiful, accessible to all
        </p>
      </main>
    </section>
  );
};

export default Hero;
