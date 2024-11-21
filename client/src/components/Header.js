import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import './Header.css';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="40" height="40"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                {' Apollo prj'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/checkout">Checkout</Nav.Link>
                    <Nav.Link href="/movie/:id">Movies</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;