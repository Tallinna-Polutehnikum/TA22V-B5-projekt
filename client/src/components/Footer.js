import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import logo from '../logo.svg'; // Import logo

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center text-lg-start mt-auto">
            <Container fluid>
                <Row className="py-4">
                    <Col className="d-flex align-items-center justify-content-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="img-fluid"
                            style={{ padding: '10px', maxWidth: '200px', width: '100%' }}
                        />
                    </Col>
                    <Col>
                        <h5>Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/checkout">Checkout</Nav.Link>
                            <Nav.Link href="/movie/:id">Movies</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h5>About Us</h5>
                        <p>This is a movie application that helps you find and explore movies.</p>
                    <Col className="text-center">
                        <p>© 2024 My Movie App. All rights reserved.</p>
                    </Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;