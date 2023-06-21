import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import NationalParks from "./pages/NationalParks/NationalParks";
import Mountains from "./pages/Mountains/Mountains";
import Footer from "./Footer";
import Header from "./Header";
import RandomParks from "./pages/RandomParks/RandomParks";

function App() {
  return (
    <Router>
      <Header />
      <div className="Body">
        <RandomParks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nationalparks" element={<NationalParks />} />
          <Route path="/mountains" element={<Mountains />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
