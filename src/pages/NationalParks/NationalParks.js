import { useState } from "react";
import Form from 'react-bootstrap/Form';
import locations from "../../assets/data/locations.json";
import parktypes from "../../assets/data/parktypes.json";
import "../../App.css";
import "./NationalParks.css";

function NationalParks() {
    const [filterBy, setFilterBy] = useState("Location");
    const [location, setLocation] = useState(null);
    const [parkType, setParkType] = useState(null);
    const handleFilterByChange = (e) => {
        setFilterBy(e.target.value);
    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }
    const handleParkTypeChange = (e) => {
        setParkType(e.target.value);
    }

    console.log(filterBy)
    console.log(location)
    console.log(parkType)
    return (
        <div className="National-Parks">
            <br></br>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Filter by:</Form.Label>
                <Form.Select aria-label="Default select example" onChange={handleFilterByChange}>
                    <option key="Location" value="Location">Location</option>
                    <option key="Park Type" value="Park Type">Park Type</option>
                </Form.Select>
                {(filterBy === "Location") ? (
                    <>
                        <Form.Label>Select a location</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleLocationChange}>
                            <option>Open this select menu</option>
                            {locations.map((location) => {
                                return (
                                    <option key={location} value={location}>{location}</option>
                                )
                            })}
                        </Form.Select>
                    </>
                ) : (
                    <>
                        <Form.Label>Select a park type</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleParkTypeChange}>
                            <option>Open this select menu</option>
                            {parktypes.map((parktype) => {
                                return (
                                    <option key={parktype} value={parktype}>{parktype}</option>
                                )
                            })}
                        </Form.Select>
                    </>
                )}
            </Form.Group>
        </div>
    )
}

export default NationalParks;
