import "./RandomParks.css";
import RandomParkCard from "./RandomParksCard";
import parklist from "../../assets/data/nationalparks.json";

function RandomParks() {
  const parksToDisplay = [];

  while (parksToDisplay.length < 3) {
    const parkNumber = Math.floor(Math.random() * parklist.parks.length);
    if (parklist.parks[parkNumber]?.Visit) {
      parksToDisplay.push(parklist.parks[parkNumber]);
    }
  }

  console.log(parksToDisplay);

  return (
    <div className="RandomParks">
      {parksToDisplay.map((park) => (
        <RandomParkCard park={park} />
      ))}
    </div>
  );
}

export default RandomParks;
