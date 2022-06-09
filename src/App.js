import { useEffect, useState } from "react";
import { useScroll } from "./helpers/useScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import Nav from "./UI/Nav";

function App() {
  const [show, setShow] = useState(false);
  const { scroll } = useScroll();
  useEffect(() => {
    setShow(scroll);
  }, [scroll]);

  return (
    <div className="App">
      {show ? <Nav /> : <Header />}
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
