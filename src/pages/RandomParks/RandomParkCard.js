import "./RandomParks.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Loading from "../../Loading";
import { Link } from "react-router-dom";

function RandomParkCard({ park }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
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
        <Link to={`/parkinfo/${park.LocationID}/${park.LocationName}`}>
          <Button variant="primary" >
            More information
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default RandomParkCard;
