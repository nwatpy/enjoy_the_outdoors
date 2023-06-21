import "./RandomParks.css";
import RandomParkCard from "./RandomParkCard";

function RandomParks({parksToDisplay}) {

  return (
    <div className="RandomParks">
      {parksToDisplay.map((park) => (
        <RandomParkCard park={park} />
      ))}
    </div>
  );
}

export default RandomParks;
