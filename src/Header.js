import "./App.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Enjoy the Outdoors</Navbar.Brand>
      <Nav className="me-auto">
      <Link to="/">Home</Link>
      <Link to="/nationalparks"> National Parks </Link>
      <Link to="/mountains"> Mountains </Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
