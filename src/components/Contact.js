import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formwrapper}>
        <h2>Get in touch</h2>
        <label>Name</label>
        <input placeholder="What should I call you"></input>
        <label>Subject</label>
        <input placeholder="What should I call you"></input>
        <label>Email</label>
        <input placeholder="What should I call you"></input>
        <label>essage</label>
        <textarea> placeholder="What should I call you"</textarea>
      </div>
    </form>
  );
};

export default Contact;
