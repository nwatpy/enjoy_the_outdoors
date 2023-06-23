import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import { getParkCampgrounds } from "../../utils";

function ParkCampgrounds(locationID) {
  // Add curly braces around locationID to make it a destructured prop
  const [campgrounds, setCampgrounds] = useState([]);

  useEffect(() => {
    const getCampgrounds = async () => {
      // Move getCampgrounds function inside useEffect
      const campgrounds = await getParkCampgrounds(locationID);
      setCampgrounds(campgrounds);
    };
    if (locationID) {
      getCampgrounds();
    }
  }, [locationID]);

  return (
    <>
      {campgrounds && (
        <>
          <h1 className="title-bar">Campgrounds</h1>
          <CardGroup>
            {campgrounds.map((campground) => (
              <Card key={campground.key} style={{ width: "18rem" }}>
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
        </>
      )}
    </>
  );
}

export default ParkCampgrounds;
