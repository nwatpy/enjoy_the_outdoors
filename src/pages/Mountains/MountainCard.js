import Card from 'react-bootstrap/Card';
import React from "react";
import { getSunsetForMountain } from "./sunsetUtils.js";

function MountainCard({img, desc, elevation, effort, coords}) {
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
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Text>
            {desc} <br/>
            <strong>Elevation:</strong> {elevation} feet <br/>
            <strong>Effort Required:</strong> {effort} <br/>
            <strong>Latitude:</strong> {coords.lat}, <strong>Longitude:</strong> {coords.lng} <br/>
            {sunsetData && (
              <>
                <strong>Sunrise:</strong> {sunsetData.sunrise} <br/>
                <strong>Sunset:</strong> {sunsetData.sunset} <br/>
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