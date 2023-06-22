import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

function Footer() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          &copy; Enjoy the Outdoors - {new Date().getFullYear()}
        </Navbar.Brand>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav.Link>
              <Link to="/SkiFree">
                <Image
                  src="abomsnowman.gif"
                  alt="Abominable Snowman icon"
                  width="60"
                  height="60"
                />
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
