import "./RandomMountains.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RandomMountainCard({ name, desc, elevation, img }) {

  // "name": "Mt. Washington",
  // "elevation": 6288,
  // "effort": "Strenuous",
  // "img": "Washington-StoryImage_2.jpg",
  // "desc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
  // "coords": {
  //     "lat": 44.270403,
  //     "lng": -71.303501
  // }

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
