import "./RandomMountains.css";
import RandomMountainCard from "./RandomMountainCard";

function RandomMountains({mountainsToDisplay}) {

  return (
    <div className="RandomMountains">
      {mountainsToDisplay.map((mountain) => (
        <RandomMountainCard {...mountain} />
      ))}
    </div>
  );
}

export default RandomMountains;
