import React, { useState } from "react";
import styles from "./Nav.module.css";
import { BsPerson } from "react-icons/bs";

const Nav = () => {
  const [button, setButton] = useState(false);
  return (
    <div
      className={!button ? styles.button : `${styles.button} ${styles.clicked}`}
      role="button"
      onClick={() => setButton(!button)}
    >
      <div className={styles.hamburger}></div>
      <div></div>
    </div>
  );
};

export default Nav;
