import "./RandomParks.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RandomParks() {
  return (
    <div className="RandomParks">
    <RandomParkCard img='Bond-StoryImage_3.jpg'/>
    <RandomParkCard img='Bond-StoryImage_3.jpg'/>
    <RandomParkCard img='Bond-StoryImage_3.jpg'/>
    </div>
  );
}

function RandomParkCard({img}) {
  return (
    <Card className="RandomParkCard">
    <Card.Body>
    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/mountains/" + img} />
      <Card.Text>
        <h3>Yosemite</h3>
        <p>
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <Button variant="primary" type="submit">
        More information
        </Button>
      </Card.Text>
    </Card.Body>
  </Card>

  )
}

export default RandomParks;