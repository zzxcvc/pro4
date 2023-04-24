import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../assets/logo/p1.jpg"

function Header() {
  return (
    <header>
      <Navbar className="header-container bg-white" bg="light" expand="lg" collapseOnSelect>
        <Container className="space-between;">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="300"
              height="300"
              className="logo-header d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="toggle-button responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-center ">
            <Nav className="nav-menu" >
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/carta">Carta</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/ubicacion">Ubicación</Nav.Link>
              <Nav.Link href="/reservar-hora">Reservar Mesa</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;


