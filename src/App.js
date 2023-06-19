import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import NationalParks from "./pages/NationalParks/NationalParks";
import Mountains from "./pages/Mountains/Mountains";
import Footer from "./Footer";
import Header from "./Header";


function App() {
  return (
    <Router>
      <Header/>
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
