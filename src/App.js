import { useEffect } from "react";
import { useScroll } from "./helpers/useScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import Nav from "./UI/Nav";

function App() {
  const { scroll } = useScroll();

  return (
    <div className="App">
      {scroll ? <Nav /> : <Header />}
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
