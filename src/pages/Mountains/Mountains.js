import { useState } from 'react';
import "../../App.css";
import "./Mountains.css";
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import mountains from "../../assets/data/mountains.json";

function Mountains() {
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleMountainChange = (e) => {
    const mountain = mountains.mountains.find(mtn => mtn.name === e.target.value);
    setSelectedMountain(mountain);
  }

  return (
    <div className="Mountain">
      {selectedMountain && 
        <Image src={process.env.PUBLIC_URL + "/images/mountains/Adams-StoryImage_2.jpg"} className="mountain-hero-image" fluid />
      }
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select a mountain</Form.Label>
        <Form.Select aria-label="Default select example" onChange={handleMountainChange}>
          <option>Open this select menu</option>
          {mountains.mountains.map((mountain) => {
            return (
              <option key={mountain.name} value={mountain.name}>{mountain.name}</option>
            )
          })}
        </Form.Select>
      </Form.Group>
      {selectedMountain && 
        <div>
          <h2>{selectedMountain.name}</h2>
          <p>{selectedMountain.description}</p>
        </div>
      }
    </div>
  );
}

export default Mountains;
