import "../../App.css";
import Container from "react-bootstrap/Container";
import RandomMountains from "../RandomMountains/RandomMountains";
import RandomParks from "../RandomParks/RandomParks";
import HomeText from "./HomeText";

function Home() {
  return (
    <div>
      <RandomParks />
      <Container className="pt-2">
        <HomeText />
      </Container>
      <RandomMountains />
    </div>
  );
}

export default Home;
