import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";
import { navLinks } from "../data/Links";
import myImage from "../assets/myimage.jfif";

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <header className={styles.header} id="header">
      <div className={styles.imageWrapper} id="imageWrapper">
        <div>
          <img src={myImage} />
        </div>
        <p>mirian tsintsadze</p>
      </div>
      <div>
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
                active === ind
                  ? `${styles.navlink} ${styles.active} `
                  : styles.navlink
              }
              onClick={() => setActive(ind)}
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
