import React from "react";
import "./RandomMountains.css";
import Card from "react-bootstrap/Card";
import { getSunsetForMountain } from "../Mountains/sunsetUtils.js";

function RandomMountainCard({ name, desc, img, coords }) {
  const [sunsetData, setSunsetData] = React.useState(null);

  React.useEffect(() => {
    getSunsetForMountain(coords)
      .then(data => {
        setSunsetData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [coords]);

  return (
    <Card key={name} className="RandomMountainCard">
      <Card.Body>
        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + "/images/mountains/" + img} />
        <br />
        <Card.Title className="pt-2"><strong>{name}</strong></Card.Title>
        <Card.Text>
          {desc}<br />
          <br />
          {sunsetData && (
              <>
                <strong>Sunrise: {sunsetData.sunrise} <br/>
                Sunset: {sunsetData.sunset}</strong> <br/>
              </>
            )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RandomMountainCard;
