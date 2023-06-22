import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import ParkImages from "./ParkImages";
import ParkCampgrounds from "./ParkCampgrounds";
import ParkArticles from "./ParkArticles";


function ParkInfo() {
  const { locationID, locationName } = useParams();

  return (
    <Container className="mb-5">
      <h1 className="mt-5">{locationName}</h1>
      <h2 className="mb-5">Park ID: {locationID}</h2>
      <Card><h1 className="mt-5">Images</h1></Card>
      
      <ParkImages locationID={locationID} />

      <Card><h1 className="mt-5">Campgrounds</h1></Card>
      <ParkCampgrounds locationID={locationID} />

      <Card><h1 className="mt-5">Articles</h1></Card>
      <ParkArticles locationID={locationID} />
    </Container>
  );
}

export default ParkInfo;
