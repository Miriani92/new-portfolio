import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import myImage from "../assets/myimage.jfif";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <img src={myImage} />
        <p>mirian tsintsadze</p>
      </div>
      <div>
        {navLinks.map((link, ind) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "bisque" : "",
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
