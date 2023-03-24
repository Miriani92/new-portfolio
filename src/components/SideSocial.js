import React, { useRef, useEffect, useState } from "react";
import styles from "./SideSocial.module.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { socialLinks } from "../data/Links";

export const SideSocial = () => {
  const [active, setActive] = useState(true);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  useEffect(() => {
    const footerHeight = 130;
    window.addEventListener("scroll", (event) => {
      const scrolled = window.scrollY;
      const pageScrollHeight = document.body.scrollHeight - window.innerHeight;
      if (pageScrollHeight - footerHeight <= scrolled) {
        setActive(false);
      } else {
        setActive(true);
      }
    });
  }, []);
  return (
    <>
      <div
        className={`${styles.leftsidewrapper} ${active && styles.active}`}
        ref={leftSideRef}
      >
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
      <div
        className={`${styles.rightsidewrapper} ${active && styles.active}`}
        ref={rightSideRef}
      >
        <div className={styles.gmail}>mirian.tsintsadze1992@gmail.com</div>
        <div className={styles.rightline}></div>
      </div>
    </>
  );
};
