import "../../App.css";
import Container from "react-bootstrap/Container";
import RandomMountains from "../RandomMountains/RandomMountains";
import RandomParks from "../RandomParks/RandomParks";
import HomeText from "./HomeText";

function Home({parksToDisplay, mountainsToDisplay}) {

  return (
    <div>
      <RandomParks parksToDisplay={parksToDisplay} />
      <Container className="pt-2">
        <HomeText />
      </Container>
      <RandomMountains mountainsToDisplay={mountainsToDisplay} />
    </div>
  );
}

export default Home;
