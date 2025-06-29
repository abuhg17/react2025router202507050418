import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Countdown from "./Countdown";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |<Link to="/countdown">Countdown</Link> |
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="countdown" element={<Countdown />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
