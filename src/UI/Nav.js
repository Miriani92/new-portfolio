import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Nav.module.css";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { navLinks } from "../data/Links";

const Nav = () => {
  const [button, setButton] = useState(false);
  const [home, about, projects, contact] = navLinks;

  return (
    <nav className={styles.nav}>
      <div
        className={
          !button ? styles.button : `${styles.button} ${styles.clicked}`
        }
        role="button"
        onClick={() => setButton(!button)}
      >
        <div className={styles.hamburger}></div>
      </div>
      <div
        className={
          !button ? styles.sidemenu : `${styles.sidemenu} ${styles.show}`
        }
      >
        <div>
          <span>
            <AiOutlineHome />
          </span>
          <Link
            to={home.path}
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            {home.name}{" "}
          </Link>
        </div>
        <div>
          <span>
            <BsPerson />
          </span>
          <Link
            activeClass={styles.active}
            to={about.path}
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            {about.name}
          </Link>
        </div>
        <div>
          <span>
            <MdOutlineWorkOutline />
          </span>
          <Link
            activeClass={styles.active}
            to={projects.path}
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            {projects.name}
          </Link>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <Link
            activeClass={styles.active}
            to={contact.path}
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            {contact.name}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
