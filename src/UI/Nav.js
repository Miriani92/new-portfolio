import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

const Nav = ({ links }) => {
  const [button, setButton] = useState(false);
  // const [home, person, contact] = links;

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
          {/* <NavLink to={home.path}> {home.name} </NavLink> */}
          <p>miro</p>
        </div>
        <div>
          <span>
            <BsPerson />
          </span>
          {/* <NavLink to={person.path}>{person.name}</NavLink> */}
          <p>miro</p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          {/* <NavLink to={contact.path}>{contact.name}</NavLink> */}
          <p>miro</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
