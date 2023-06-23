import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { getParkImages } from "../../utils";
import { CardGroup } from "react-bootstrap";

function ParkImages(locationID) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (locationID) {
      const getParkInfo = async () => {
        const images = await getParkImages(locationID, 3);
        setImages(images);
      };

      getParkInfo();
    }
  }, [locationID]);

  return (
    <CardGroup>
      {images.length > 0 &&
        images.map((image) => (
          <Card key={image} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
          </Card>
        ))}
    </CardGroup>
  );
}

export default ParkImages;
