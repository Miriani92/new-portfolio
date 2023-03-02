import React from "react";
import styles from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { socialLinks } from "../data/Links";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href={socialLinks.github} target="_blank" rel="noreferrer noopener">
          <BsGithub />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>
        <a
          href={socialLinks.facebook}
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
