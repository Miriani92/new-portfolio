import React from "react";
import styles from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://github.com/Miriani92"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mirian-tsintsadze-277676227/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/mirian.cincadze.9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsFacebook />
        </a>
      </div>
      <h3>Copyright © 2022 Mirian Tsintsadze. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
