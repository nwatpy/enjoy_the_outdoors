import "../../App.css";
import Container from "react-bootstrap/Container";
import RandomMountains from "../RandomMountains/RandomMountains";
import RandomParks from "../RandomParks/RandomParks";

function Home() {
  return (
    <div>
      <RandomMountains />
      <RandomParks />
      <Container className="pt-2">
        This is where we are going to put something. Go to the mountains, don't waste your time importing images.
      </Container>
    </div>
  );
};

export default Home;
