import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formwrapper}>
        <h2>Get in touch</h2>
        <div tabIndex="0">
          <label>Name</label>
          <input placeholder="What should I call you"></input>
        </div>
        <div>
          <label>Subject</label>
          <input placeholder="What should I call you"></input>
        </div>
        <div>
          <label>Email</label>
          <input placeholder="What should I call you"></input>
        </div>
        <div>
          <label>Message</label>
          <textarea></textarea>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Contact;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.my_refs = {};
//     this.focusByID.bind(this);
//   }

//   focusByID(id) {
//     let myRef = this.my_refs[id];
//     if (myRef) {
//       console.log("focusing on ", id, myRef);
//       myRef.focus();
//     }
//   }
//   render() {
//     return (
//       <div>
//         <div
//           id="bigRedDiv"
//           style={{ height: 200, width: 200, backgroundColor: "red" }}
//           ref={(input) => (this.my_refs["bigRedDiv"] = input)}
//           onFocus={() => console.log("FOCUS IS ON BIG RED DIV")}
//           onClick={() => this.focusByID("bigRedDiv")}
//         ></div>
//       </div>
//     );
//   }
// }

// <div
//   tabIndex="0" //use this attribute
//   id="bigRedDiv"
//   style={{ height: 200, width: 200, backgroundColor: "red" }}
//   ref={(input) => (this.my_refs["bigRedDiv"] = input)}
//   onFocus={() => console.log("FOCUS IS ON BIG RED DIV")}
//   onClick={() => this.focusByID("bigRedDiv")}
// ></div>;
