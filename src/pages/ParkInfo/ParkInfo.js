
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getParkImages } from "../../utils";
import { CardGroup, Container } from "react-bootstrap";

function ParkInfo() {
  const { locationID, locationName } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (locationID) {
      getParkInfo();
    }
  }, [locationID])

  const getParkInfo = async () => {
    const images = await getParkImages(locationID, 3);
    setImages(images);
  }


  return (
    <Container>
      <h1>{locationName}</h1>
      <h2>{locationID}</h2>
      <CardGroup>
        {images.length > 0 &&
          images.map((image) => (

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
            </Card>
          ))
        }
      </CardGroup>
    </Container>
  );
}

export default ParkInfo;