import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          &copy;Enjoy the Outdoors - {new Date().getFullYear()}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
