import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import myImage from "../assets/myimage.jfif";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/contact" },
];
const Header = () => {
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
