import "./RandomMountains.css";
import RandomMountainCard from "./RandomMountainCard";
import mountainList from "../../assets/data/mountains.json";

function RandomMountains() {
  const mountainsToDisplay = [];
  const mountains = mountainList.mountains;
  console.log(mountainList)

  while (mountainsToDisplay.length < 3) {
    const mountainNumber = Math.floor(Math.random() * mountains.length);
    mountainsToDisplay.push(mountains[mountainNumber]);
  }

  console.log(mountainsToDisplay);

  return (
    <div className="RandomMountains">
      {mountainsToDisplay.map((mountain) => (
        <RandomMountainCard {...mountain} />
      ))}
    </div>
  );
}

export default RandomMountains;
