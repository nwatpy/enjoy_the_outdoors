import "./RandomMountains.css";
import Card from "react-bootstrap/Card";

function RandomMountainCard({ name, desc, img }) {

  return (
    <Card key={name} className="RandomMountainCard">
      <Card.Body>
        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + "/images/mountains/" + img} />
        <Card.Title className="pt-2">{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RandomMountainCard;
