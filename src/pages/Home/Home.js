import "../../App.css";
import Container from "react-bootstrap/Container";
import RandomMountains from "../RandomMountains/RandomMountains";
import RandomParks from "../RandomParks/RandomParks";
import HomeText from "./HomeText";
import Loading from "../../Loading";

function Home({ parksToDisplay, mountainsToDisplay }) {
  return (
    <div>
      {parksToDisplay.length > 0 ? (
        <RandomParks parksToDisplay={parksToDisplay} />
      ) : (
        <Loading />
      )}

      <Container className="pt-2 container-width">
        <HomeText />
      </Container>
      <RandomMountains mountainsToDisplay={mountainsToDisplay} />
    </div>
  );
}

export default Home;
