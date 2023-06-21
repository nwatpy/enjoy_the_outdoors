import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NationalParks from "./pages/NationalParks/NationalParks";
import Mountains from "./pages/Mountains/Mountains";
import Footer from "./Footer";
import Header from "./Header";
import mountainList from "./assets/data/mountains.json";
import parklist from "./assets/data/nationalparks.json";

function App() {
  const mountainsToDisplay = [];
  const parksToDisplay = [];
  const mountains = mountainList.mountains;

  while (mountainsToDisplay.length < 3) {
    const mountainNumber = Math.floor(Math.random() * mountains.length);
    mountainsToDisplay.push(mountains[mountainNumber]);
  }

  while (parksToDisplay.length < 3) {
    const parkNumber = Math.floor(Math.random() * parklist.parks.length);
    if (parklist.parks[parkNumber]?.Visit) {
      parksToDisplay.push(parklist.parks[parkNumber]);
    }
  }


  return (
    <Router>
      <Header />
      <div className="Body">
        <Routes>
          <Route path="/" element={<Home mountainsToDisplay={mountainsToDisplay} parksToDisplay={parksToDisplay} />} />
          <Route path="/nationalparks" element={<NationalParks parksToDisplay={parksToDisplay} />} />
          <Route path="/mountains" element={<Mountains mountainsToDisplay={mountainsToDisplay} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
