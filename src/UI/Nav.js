import React, { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [button, setButton] = useState(false);
  return (
    <div
      className={!button ? styles.button : `${styles.button} ${styles.clicked}`}
      role="button"
      onClick={() => setButton(!button)}
    >
      <div></div>
    </div>
  );
};

export default Nav;
