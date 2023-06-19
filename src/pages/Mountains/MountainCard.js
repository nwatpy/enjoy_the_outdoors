import Card from 'react-bootstrap/Card';

function MountainCard({img, desc}) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
           {desc}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + "/images/mountains/" + img} />
      </Card>
    </>
  );
}

export default MountainCard;