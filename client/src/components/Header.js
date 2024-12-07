import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import './Header.css';

function Header() {
return (
  <Navbar bg="dark" variant="dark" expand="sm" >
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="33" height="33"
        className="d-inline-block align-top ms-3"
        alt="logo"
      />
      {' Apollo prj'}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/checkout">Checkout</Nav.Link>
        <Nav.Link href="/movies">Movies</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className="me-2">
          <FontAwesomeIcon icon={faRightToBracket} size="xl"/>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}

export default Header;