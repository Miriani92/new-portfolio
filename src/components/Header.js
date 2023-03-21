import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";
import { navLinks } from "../data/Links";
import myImage from "../assets/myimage.jfif";
import { animateOnScroll } from "../utils/observerOnScroll";

const Header = () => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    animateOnScroll(wrapperRef.current, null, "var(--main-header)");
  }, []);
  return (
    <header className={styles.header} id="header" ref={wrapperRef}>
      <div className={styles.imageWrapper} id="imageWrapper">
        <div>
          <img src={myImage} alt="myimage" />
        </div>
        <p>mirian tsintsadze</p>
      </div>
      <div className={styles.linkswrapper}>
        {navLinks.map((link, ind) => {
          return (
            <Link
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
              to={link.path}
              key={ind}
              className={
                ind === 0
                  ? `${styles.navlink} ${styles.active}`
                  : styles.navlink
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
