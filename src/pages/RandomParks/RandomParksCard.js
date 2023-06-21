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
        <Card.Text>
          <h3>{park.LocationName}</h3>
          <p>
            Located in beautiful {park.City}, {park.State}.
          </p>
          <Button
            variant="primary"
            type="submit"
            onClick={handleMoreInformation}
          >
            More information
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RandomParkCard;
