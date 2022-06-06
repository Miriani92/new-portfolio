import React from "react";
import styles from "./Hero.module.css";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <h1>Hi, I'm Miriani</h1>
      <div className={styles.address}>
        <FiMapPin />
        <p>Tbilissi, Georgia</p>
      </div>
    </main>
  );
};

export default Hero;
