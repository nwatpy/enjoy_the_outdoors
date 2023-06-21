import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import locations from "../../assets/data/locations.json";
import parktypes from "../../assets/data/parktypes.json";
import "../../App.css";
import "./NationalParks.css";
import NationalParkList from "./NationalParkList";
import allParks from "../../assets/data/nationalparks.json";
import RandomParks from "../RandomParks/RandomParks";

function NationalParks({parksToDisplay}) {
  const [filterBy, setFilterBy] = useState("Location");
  const [location, setLocation] = useState(null);
  const [parkType, setParkType] = useState(null);
  const [parkList, setParkList] = useState(null);

  const handleFilterByChange = (e) => {
    setFilterBy(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleParkTypeChange = (e) => {
    setParkType(e.target.value);
  };

  useEffect(() => {
    if (location) {
      setParkList(allParks.parks.filter((park) => park.State === location));
    }
  }, [location]);

  useEffect(() => {
    if (parkType) {
      setParkList(
        allParks.parks.filter((park) => park.LocationName.includes(parkType))
      );
    }
  }, [parkType]);

  return (
    <div>
      <RandomParks parksToDisplay={parksToDisplay} />
      <Container className="container-width">
      <div className="">
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Filter by:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleFilterByChange}
          >
            <option key="Location" value="Location">
              Location
            </option>
            <option key="Park Type" value="Park Type">
              Park Type
            </option>
          </Form.Select>
          {filterBy === "Location" ? (
            <>
              <Form.Label>Select a location</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleLocationChange}
              >
                <option>Open this select menu</option>
                {locations.map((location) => {
                  return (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  );
                })}
              </Form.Select>
            </>
          ) : (
            <>
              <Form.Label>Select a park type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleParkTypeChange}
              >
                <option>Open this select menu</option>
                {parktypes.map((parktype) => {
                  return (
                    <option key={parktype} value={parktype}>
                      {parktype}
                    </option>
                  );
                })}
              </Form.Select>
            </>
          )}
        </Form.Group>
        </div>
        {parkList ? <NationalParkList parkList={parkList} /> : null}
       </Container>
    </div>
  );
}

export default NationalParks;
