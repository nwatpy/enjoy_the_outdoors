import { useState } from 'react';
import "../../App.css";
import "./Mountains.css";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import mountains from "../../assets/data/mountains.json";
import MountainCard from './MountainCard';
import RandomMountains from '../RandomMountains/RandomMountains';

function Mountains({mountainsToDisplay}) {
  const [selectedMountain, setSelectedMountain] = useState(null);

  const handleMountainChange = (e) => {
    const mountain = mountains.mountains.find(mtn => mtn.name === e.target.value);
    setSelectedMountain(mountain);
  }

  return (
    <div>
      <div className='MountainList'>
        <Container className="container-width">
          <br></br>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="h4 fw-bolder">Select a Mountain</Form.Label>
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
        </Container>
      </div>
        <RandomMountains mountainsToDisplay={mountainsToDisplay} />
    </div>
  );
}

export default Mountains;
