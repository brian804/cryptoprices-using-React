import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav";
import Symbol from "./components/Symbol";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/stocks" element={<Stocks data={data} />} />
        <Route path="/stocks/:symbol" element={<Symbol data={data} />} />
      </Routes>
    </div>
  );
}

export default App;