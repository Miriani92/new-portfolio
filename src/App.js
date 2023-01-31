import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./UI/Nav";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollValue = window.scrollY;
      if (scrollValue > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App" id="Home">
      <section className="first">
        <Header />
        {show && <Nav />}
        <Hero />
      </section>
      <section className="second">
        <Expertise />
      </section>
      <section className="third">
        <Projects />
      </section>
      <section className="fourth">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
