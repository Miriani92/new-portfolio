import React from "react";
import styles from "./Expertise.module.css";
import { IoLogoJavascript } from "react-icons/io";
import { RiCss3Fill } from "react-icons/ri";
import { FaHtml5, FaNodeJs, FaFigma, FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMaterialui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Expertise = () => {
  return (
    <article className={styles.expertise}>
      <h2>My Expertise</h2>
      <div className={styles.skillswrapper}>
        <div className={styles.react}>
          <FaReact />
        </div>
        <div className={styles.css}>
          <RiCss3Fill />
        </div>
        <div className={styles.html}>
          <DiMongodb />
        </div>
        <div className={styles.node}>
          <FaNodeJs />
        </div>
        <div className={styles.figma}>
          <FaFigma />
        </div>
        <div className={styles.graph}>
          <GrGraphQl />
        </div>
        <div className={styles.javascript}>
          <IoLogoJavascript />
        </div>

        <div className={styles.material}>
          <SiMaterialui />
        </div>
        <div className={styles.mongodb}>
          <FaHtml5 />
        </div>
      </div>
    </article>
  );
};

export default Expertise;
