import { useState } from 'react';
import "../../App.css";
import "./Mountains.css";
import Form from 'react-bootstrap/Form';
import mountains from "../../assets/data/mountains.json";
import MountainCard from './MountainCard';
import RandomMountains from '../RandomMountains/RandomMountains';

function Mountains() {
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleMountainChange = (e) => {
    const mountain = mountains.mountains.find(mtn => mtn.name === e.target.value);
    setSelectedMountain(mountain);
  }

  return (
    <div>
      <RandomMountains />
      <div className="Mountain">
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
        <MountainCard 
          {...selectedMountain}
        />
        }
      </div>
    </div>
  );
}

export default Mountains;
