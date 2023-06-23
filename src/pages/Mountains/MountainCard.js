import Card from 'react-bootstrap/Card';
import React from "react";
import { getSunriseAndSunsetForMountain } from "./sunsetUtils.js";

function MountainCard({img, desc, elevation, effort, coords}) {
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
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Text>
            {desc} <p/>
            <strong>Elevation:</strong> {elevation} feet <br/>
            <strong>Effort Required:</strong> {effort} <br/>
            <strong>Latitude:</strong> {coords.lat}, <strong>Longitude:</strong> {coords.lng} <br/>
            {sunriseSunsetData && (
              <>
                <strong>Sunrise:</strong> {sunriseSunsetData.sunrise} <br/>
                <strong>Sunset:</strong> {sunriseSunsetData.sunset} <br/>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + "/images/mountains/" + img} />
      </Card>
    </>
  );
}

export default MountainCard;