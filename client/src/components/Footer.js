import React from 'react';
import { Container, Row, Col, Nav, Image, NavLink } from 'react-bootstrap';
import logo from '../logo.svg'; // Import logo

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-auto">
            <Container fluid>
                <Row className="py-4">
                    <Col className="d-flex align-items-center">
                        <Image
                            src={logo}
                            alt="Logo"
                            rounded
                            width={150}
                            height={150}
                        />
                    </Col>
                    <Col>
                        <h5>Links</h5>
                        <Nav className="flex-column">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About Us</NavLink>
                            <NavLink href="/checkout">Checkout</NavLink>
                            <NavLink href="/movies">Movies</NavLink>
                        </Nav>
                    </Col>
                    <Col sm lg={4} className="text-center">
                        <h5>About Us</h5>
                        <p>This is a movie application that helps you find and explore movies.</p>
                        <Col>
                            <p>© 2024 My Movie App. All rights reserved.</p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;