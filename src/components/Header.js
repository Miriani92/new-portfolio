import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import myImage from "../assets/myimage.jfif";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const Header = () => {
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector("#header");
      const imgCon = document.querySelector("#imageWrapper");
      const scrollValue = window.scrollY;
      if (scrollValue > 70) {
        header.classList.add(styles.scroll);
      } else {
        header.classList.remove(styles.scroll);
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className={styles.header} id="header">
      <div className={styles.imageWrapper} id="imageWrapper">
        <img src={myImage} />
        <p>mirian tsintsadze</p>
      </div>
      <div>
        {navLinks.map((link, ind) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "rgb(164, 176, 187)" : "",
                  color: isActive ? "white" : "",
                  borderRadius: "0.5rem",
                };
              }}
              to={link.path}
              key={ind}
              className={styles.navlink}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
