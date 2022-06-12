import React from "react";
import styles from "./Projectcard.module.css";

const Projectcard = ({ name, image1, image2 }) => {
  return (
    <div>
      <img src={image2} />
    </div>
  );
};

export default Projectcard;
