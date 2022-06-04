import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import myImage from "../assets/myimage.jfif";

const navLinks = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { contact: "contact", path: "/contact" },
];
const Header = () => {
  return (
    <header>
      <div className={styles.imageWrapper}>
        <img src={myImage} />
        <p>mirian tsintsadze</p>
      </div>
      {navLinks.map((link, ind) => {
        <li key={ind}>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
          >
            {link.name}
          </NavLink>
        </li>;
      })}
    </header>
  );
};

export default Header;
