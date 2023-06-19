import "../../App.css";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';

function NationalParks() {
    return (
        <Container className="pt-2">
            <Image src={process.env.PUBLIC_URL + "/images/mountains/Adams-StoryImage_2.jpg"} className="mountain-hero-image" fluid /><br></br>
            This is where we are going to put something. GO to the moutains, dont waste your time importing images.
        </Container>
    )
}

export default NationalParks;
