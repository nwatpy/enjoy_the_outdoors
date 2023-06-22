import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NationalParks from "./pages/NationalParks/NationalParks";
import Mountains from "./pages/Mountains/Mountains";
import SkiFree from "./pages/SkiFree/SkiFreeGame";
import Footer from "./Footer";
import Header from "./Header";
import mountainList from "./assets/data/mountains.json";
import parklist from "./assets/data/nationalparks.json";
import getParkImage from "./utils";
import { useEffect, useState } from "react";

function App() {
  const mountainsToDisplay = [];
  const [parksToDisplay, setParksToDisplay] = useState([]);
  const mountains = mountainList.mountains;

  while (mountainsToDisplay.length < 3) {
    const mountainNumber = Math.floor(Math.random() * mountains.length);
    mountainsToDisplay.push(mountains[mountainNumber]);
  }
  
  useEffect(() => {
    getParksToDisplay();
  }, [])

  const getParksToDisplay = async () => {
    const parksToDisplay = [];
    while (parksToDisplay.length < 3) {
      const parkNumber = Math.floor(Math.random() * parklist.parks.length);
      if (parklist.parks[parkNumber]?.Visit) {
        let parkWithImage = parklist.parks[parkNumber];
        const img = await getParkImage(parkWithImage.LocationID);
        if (img) {
          parkWithImage.img = img;
          parksToDisplay.push(parkWithImage);
        }
      }
    }
    setParksToDisplay(parksToDisplay);
  }
  
  return (
    <Router>
      <Header />
      <div className="Body">
        <Routes>
          <Route path="/" element={<Home mountainsToDisplay={mountainsToDisplay} parksToDisplay={parksToDisplay} />} />
          <Route path="/nationalparks" element={<NationalParks parksToDisplay={parksToDisplay} />} />
          <Route path="/mountains" element={<Mountains mountainsToDisplay={mountainsToDisplay} />} />
          <Route path="/skifree" element={<SkiFree />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
