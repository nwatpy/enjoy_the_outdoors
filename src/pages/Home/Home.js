import "../../App.css";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';

function Home() {
  return <Container className="pt-2">
    
    <Image src={process.env.PUBLIC_URL + "/images/mountain-banner.jpeg"} className="mountain-hero-image"/><br></br>
    This is where we are going to put something. GO to the moutains, dont waste your time importing images.

  </Container>;
}

export default Home;
