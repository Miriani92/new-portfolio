import React from "react";
import styles from "./SideSocial.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { socialLinks } from "../data/Links";

export const SideSocial = () => {
  return (
    <>
      <div className={styles.leftsidewrapper}>
        <div className={styles.sociallinkswrapper}>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer noopener"
          >
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
        <div className={styles.leftline}></div>
      </div>
      <div className={styles.rightsidewrapper}>
        <div className={styles.gmail}>mirian.tsintsadze1992@gmail.com</div>
        <div className={styles.rightline}></div>
      </div>
    </>
  );
};
