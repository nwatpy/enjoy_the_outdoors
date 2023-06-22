import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import { getParkCampgrounds } from "../../utils";

function ParkCampgrounds(locationID) {
  const [campgrounds, setCampgrounds] = useState([]);

  useEffect(() => {
    if (locationID) {
      getCampgrounds();
    }
  }, [locationID]);

  const getCampgrounds = async () => {
    const campgrounds = await getParkCampgrounds(locationID, 3);
    setCampgrounds(campgrounds);
  };


  return (
    <CardGroup>
      {campgrounds.length > 0 &&
        campgrounds.map((campground) => (
          <Card style={{ width: "18rem" }}>
             <Card.Img variant="top" src={campground.images[0]?.url} />
            <Card.Body>
              <Card.Title>{campground.name}</Card.Title>
              <Card.Text>
                {campground.description}
                {campground.contacts.phoneNumbers.phoneNumber}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </CardGroup>
  );
}

export default ParkCampgrounds;
