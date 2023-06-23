import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getParkImages } from "../../utils";
import { CardGroup } from "react-bootstrap";

function ParkImages(locationID) {
  const [images, setImages] = useState([]);
  const { id } = useParams();

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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
          </Card>
        ))}
    </CardGroup>
  );
}

export default ParkImages;