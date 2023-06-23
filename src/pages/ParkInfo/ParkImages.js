import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getParkImages } from "../../utils";
import { CardGroup } from "react-bootstrap";

function ParkImages(locationID) {
  const [images, setImages] = useState([]);
  const params = useParams();

  const getParkInfo = async () => {
    const images = await getParkImages(locationID, 3);
    setImages(images);
  };

  useEffect(() => {
    if (locationID) {
      getParkInfo();
    }
  }, [locationID, getParkInfo]);

  return (
    <CardGroup>
      {images.length > 0 &&
        images.map((image) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
          </Card>
        ))}
    </CardGroup>
  );
}

export default ParkImages;