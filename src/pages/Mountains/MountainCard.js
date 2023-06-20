import Card from 'react-bootstrap/Card';

function MountainCard({img, desc, elevation, effort, coords}) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
           {desc} <br/>
           <strong>Elevation:</strong> {elevation} feet <br/>
           <strong>Effort Required:</strong> {effort} <br/>
           <strong>Latitude:</strong> {coords.lat}, <strong>Longitude:</strong> {coords.lng}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + "/images/mountains/" + img} />
      </Card>
    </>
  );
}

export default MountainCard;