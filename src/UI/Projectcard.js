import React from "react";
import styles from "./Projectcard.module.css";

const Projectcard = ({ name, image1, image2 }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>discription</p>
      </div>
      <div>
        <img src={image1} />
        <img src={image2} />
      </div>
    </div>
  );
};

export default Projectcard;

