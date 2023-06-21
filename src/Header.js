import "./App.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>Enjoy the Outdoors</Navbar.Brand>
          <Navbar.Collapse classNam="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/nationalparks">National Parks</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/mountains">Mountains</Link>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        <br></br>
      </Navbar>
    </>
  );
}

export default Header;
