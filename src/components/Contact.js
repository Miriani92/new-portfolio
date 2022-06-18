import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <form className={styles.form} id="Contact">
      <div className={styles.formwrapper}>
        <h2>Get in touch</h2>
        <div tabIndex="0">
          <label>Name</label>
          <input placeholder="What should I call you" required></input>
        </div>
        <div>
          <label>Subject</label>
          <input placeholder="Subject of Your interest" required></input>
        </div>
        <div>
          <label>Email Address</label>
          <input placeholder="Where should I respond?" required></input>
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Haw can I help you"></textarea>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
