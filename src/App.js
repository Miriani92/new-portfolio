import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import Nav from "./UI/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes></Routes>
      <Footer />
    </div>
  );
}

export default App;
