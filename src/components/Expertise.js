import React, { useEffect, useRef } from "react";
import styles from "./Expertise.module.css";
import { animateOnScroll } from "../utils/observerOnScroll";
import { IoLogoJavascript } from "react-icons/io";
import { RiCss3Fill } from "react-icons/ri";
import { FaHtml5, FaNodeJs, FaReact, FaAngular } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiMaterialui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Expertise = () => {
  const expertisewrapper = useRef();

  useEffect(() => {
    animateOnScroll(
      expertisewrapper.current,
      `${styles.expertisewrapper} ${styles.animateexpertise}`,
      "var(--lightest-navy)"
    );
  }, []);
  return (
    <>
      <section className={styles.expertisewrapper} ref={expertisewrapper}>
        <article className={styles.expertise} id="About">
          <div className={styles.skillswrapper}>
            <div className={styles.react}>
              <FaReact />
            </div>
            <div className={styles.css}>
              <RiCss3Fill />
            </div>
            <div className={styles.angular}>
              <FaAngular />
            </div>
            <div className={styles.node}>
              <FaNodeJs />
            </div>
            <div className={styles.html}>
              <DiMongodb />
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
          <div className={styles.about}>
            <div className={styles.panel}>
              <div className={styles.dotwrapper}>
                <div className={styles.first}></div>
                <div className={styles.second}></div>
                <div className={styles.third}></div>
              </div>
            </div>
            <p>
              I'm a full-stack developer based in Georgia, I enjoy building
              dynamic, creative products from start to finish. I help companies
              and startups to grow, always focused on developing intuitive
              experiences that constantly change and improve based on user
              metrics
            </p>
            <p>
              I use React, <strong>React Native</strong>,
              <strong> Angular</strong> for client side and{" "}
              <strong> ExpressJS</strong> and <strong>MongoDB</strong> for the
              beckend, <strong>Material UI</strong> and <strong>Figma</strong>{" "}
              for design.
            </p>
          </div>
        </article>
        {/* <div className={styles.aboutskills}></div> */}
      </section>
    </>
  );
};

export default Expertise;
