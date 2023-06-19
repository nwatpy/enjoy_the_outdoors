import "./App.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    const year = new Date().getFullYear();
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">&copy;Enjoy the Outdoors - {year} </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Footer;
