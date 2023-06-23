import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./ParkInfo.css";
import ParkImages from "./ParkImages";
import ParkCampgrounds from "./ParkCampgrounds";
import ParkArticles from "./ParkArticles";

function ParkInfo() {
  const { locationID, locationName } = useParams();

  return (
    <Container className="mb-5">
      <h1 className="mt-5">{locationName}</h1>
      <h2 className="mb-5">Park ID: {locationID}</h2>
      <h1 className="title-bar">Images</h1>
      <ParkImages locationID={locationID} />

      <ParkCampgrounds locationID={locationID} />

      <h1 className="title-bar">Articles</h1>
      <ParkArticles locationID={locationID} />
    </Container>
  );
}

export default ParkInfo;
