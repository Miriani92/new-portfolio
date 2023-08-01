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
  const skillWrapper = useRef();

  useEffect(() => {
    animateOnScroll(
      expertisewrapper.current,
      `${styles.expertisewrapper} ${styles.animateexpertise}`
    );
    animateOnScroll(skillWrapper.current, null, "var(--lightest-navy)");
  }, []);
  return (
    <>
      <section className={styles.expertisewrapper} ref={expertisewrapper}>
        <article className={styles.expertise} id="About">
          <div className={styles.s}>
            <div className={styles.skillswrapper} ref={skillWrapper}>
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
                <FaHtml5 />
              </div>
              <div className={styles.mongodb}>
                <SiMaterialui />
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
              <p className={styles.expertiseText}>
                Hi again, I'm a full-stack developer based in Georgia, currently
                working as a mobile developer at Train Effective. I'm
                Well-organised, problem solver with more than 3 years of
                experience making mobile and web applications, I build dynamic,
                creative products from start to finish. I believe my experience,
                passion and work ethic can give the additional values to the
                company I will work for in the future.
              </p>
              <p className={styles.stack}>
                I use <strong>React</strong>, <strong>React Native</strong>,
                <strong> Angular</strong> for client side and{" "}
                <strong> ExpressJS</strong>, <strong>MongoDB</strong>,
                <strong> Firebase</strong> for the beckend,{" "}
                <strong>Material UI</strong> and <strong>Figma</strong> for
                design.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Expertise;
