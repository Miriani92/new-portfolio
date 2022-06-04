import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  );
}

export default App;
