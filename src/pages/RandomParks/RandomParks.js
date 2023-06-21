import "./RandomParks.css";
import RandomParkCard from "./RandomParkCard";
import parklist from "../../assets/data/nationalparks.json";

function RandomParks() {
  const parksToDisplay = [];

  while (parksToDisplay.length < 3) {
    const parkNumber = Math.floor(Math.random() * parklist.parks.length);
    if (parklist.parks[parkNumber]?.Visit) {
      parksToDisplay.push(parklist.parks[parkNumber]);
    }
  }

  return (
    <div className="RandomParks">
      {parksToDisplay.map((park) => (
        <RandomParkCard park={park} />
      ))}
    </div>
  );
}

export default RandomParks;
