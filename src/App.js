import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import NationalParks from "./NationalParks";
import Mountains from "./Mountains";
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/nationalparks"> National Parks </Link>
        <Link to="/mountains"> Mountains </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nationalparks" element={<NationalParks />} />
        <Route path="/mountains" element={<Mountains />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
