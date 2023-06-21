import "./RandomParks.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RandomParkCard({ park }) {
  const handleMoreInformation = (e) => {
    window.open(park.Visit);
  };

  return (
    <Card key={park.LocationName} className="RandomParkCard">
      <Card.Body>
        <Card.Title>{park.LocationName}</Card.Title>
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
