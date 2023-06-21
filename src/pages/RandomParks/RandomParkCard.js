import "./RandomParks.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Loading from "../../Loading";

function RandomParkCard({ park }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleMoreInformation = (e) => {
    window.open(park.Visit);
  };

  return (
    <Card key={park.LocationName} className="RandomParkCard">
      <Card.Body>
        {isLoading && <Loading />}
        <Card.Img src={park.img} onLoad={handleLoad} />
        <Card.Title className="pt-2">{park.LocationName}</Card.Title>
        <Card.Text>
          Located in beautiful {park.City}, {park.State}.
        </Card.Text>
        <Button variant="primary" type="submit" onClick={handleMoreInformation}>
          More information
        </Button>
      </Card.Body>
    </Card>
  );
}

export default RandomParkCard;
