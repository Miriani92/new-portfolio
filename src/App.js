import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
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
    <div className="App">
      <Header />
      {show && <Nav />}
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
