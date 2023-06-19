import "../../App.css";
import "./Mountains.css";
import Form from 'react-bootstrap/Form';
import MountainImg from "../../assets/images/mountains/Liberty-StoryImage_2.jpg";
import Image from 'react-bootstrap/Image';
import mountains from "../../assets/data/mountains.json";

function Mountains() {
  console.log(mountains)
  return (
    <div className="Mountain">
    <Image src={MountainImg} className="mountain-hero-image" fluid /><br></br>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select a mountain</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        { mountains.mountains.map((mountain) => {
          return (
            <option value={mountain.name}>{mountain.name}</option>
          )
        })}
         <option value="nh">gsdgsdgf</option>
      </Form.Select>
    </Form.Group>
    </div>
  );
}

export default Mountains;
