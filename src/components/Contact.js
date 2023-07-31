import React, { useRef, useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { animateOnScroll as changeBackgroundOnScroll } from "../utils/observerOnScroll";

const Contact = () => {
  const footerRef = useRef();
  const [form, setForm] = useState({});
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    changeBackgroundOnScroll(footerRef.current, null, "var(--main-header)");
  }, []);
  return (
    <form
      className={styles.form}
      id="Contact"
      action="https://formsubmit.co/mirian.tsintsadze1992@gmail.com"
      method="POST"
    >
      <div className={styles.formwrapper}>
        <h2 className={styles.formHeader}>Get in touch</h2>
        <div tabIndex="0" className={styles.inputField}>
          <label>Name</label>
          <input
            placeholder="What should I call you"
            name="name"
            vlaue={form.name}
            onChange={onInputChange}
            required
          />
        </div>
        <div tabIndex="0">
          <label>Subject</label>
          <input
            placeholder="Subject of Your interest"
            name="subject"
            vlaue={form.subject}
            onChange={onInputChange}
            required
          />
        </div>
        <div tabIndex="0">
          <label>Email Address</label>
          <input
            placeholder="Where should I respond?"
            name="email"
            type="email"
            // minLength={10}
            vlaue={form.email}
            onChange={onInputChange}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
        </div>
        <div tabIndex="0" ref={footerRef}>
          <label>Message</label>
          <textarea
            placeholder="Haw can I help you"
            name="message"
            onChange={onInputChange}
            vlaue={form.message}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Contact;
