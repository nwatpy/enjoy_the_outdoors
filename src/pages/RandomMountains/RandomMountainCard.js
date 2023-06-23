import React from "react";
import "./RandomMountains.css";
import Card from "react-bootstrap/Card";
import { getSunriseAndSunsetForMountain } from "../Mountains/sunsetUtils.js";

function RandomMountainCard({ name, desc, img, coords }) {
  const [sunriseSunsetData, setSunriseSunsetData] = React.useState(null);

  React.useEffect(() => {
    getSunriseAndSunsetForMountain(coords)
      .then(data => {
        setSunriseSunsetData(data.results);
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
          {sunriseSunsetData && (
              <>
                <strong>Sunrise: {sunriseSunsetData.sunrise} <br/>
                Sunset: {sunriseSunsetData.sunset}</strong> <br/>
              </>
            )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RandomMountainCard;