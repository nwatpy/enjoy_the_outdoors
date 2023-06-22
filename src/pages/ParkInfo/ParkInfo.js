import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ParkImages from "./ParkImages";
import ParkCampgrounds from "./ParkCampgrounds";
import ParkArticles from "./ParkArticles";


function ParkInfo() {
  const { locationID, locationName } = useParams();

  return (
    <Container>
      <h1>{locationName}</h1>
      <h2>{locationID}</h2>

      <h1>Images</h1>
      <ParkImages locationID={locationID} />
      <p></p>
      <h1>Campgrounds</h1>
      <ParkCampgrounds locationID={locationID} />
      <p></p>
      <h1>Articles</h1>
      <ParkArticles locationID={locationID} />
    </Container>
  );
}

export default ParkInfo;
