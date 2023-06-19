import "../../App.css";
import MountainImg from "../../assets/images/mountains/Adams-StoryImage_2.jpg"
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';

function NationalParks() {
    return (
        <Container className="pt-2">
            <Image src={MountainImg} fluid /><br></br>
            This is where we are going to put something. GO to the moutains, dont waste your time importing images.
        </Container>
    )
}

export default NationalParks;
