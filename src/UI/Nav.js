import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { navLinks } from "../data/Links";

const Nav = () => {
  const [button, setButton] = useState(false);
  const [home, person, contact] = navLinks;

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
          <Link to={home.path}> {home.name} </Link>
        </div>
        <div>
          <span>
            <BsPerson />
          </span>
          <Link to={person.path}>{person.name}</Link>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <Link to={contact.path}>{contact.name}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
