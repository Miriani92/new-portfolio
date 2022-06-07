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
      <p>
        I'm self-tought web developer,I enjoy building web that is interactive,
        easy to use, beautiful, accessible to all
      </p>
    </main>
  );
};

export default Hero;
