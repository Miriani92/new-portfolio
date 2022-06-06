import React from "react";
import styles from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <Link to="https://github.com/Miriani92">
          <BsGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/mirian-tsintsadze-277676227/">
          <BsLinkedin />
        </Link>
        <Link to="https://www.facebook.com/mirian.cincadze.9">
          <BsFacebook />
        </Link>
      </div>
      <h3>Copyright © 2022 Mirian Tsintsadze. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
