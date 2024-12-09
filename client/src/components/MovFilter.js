import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar, faFilm } from '@fortawesome/free-solid-svg-icons';

const MovFilter = () => {
  return (
    <Navbar bg="dark" variant="dark" className="my-4">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FontAwesomeIcon icon={faCalendar} style={{ color: "#fff" }} />
          <Nav className="me-auto">
            <Nav.Link>Now Playing</Nav.Link>
            <Nav.Link>Coming Soon</Nav.Link>
          </Nav>
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#fff" }} />
          <Nav className="me-auto">
            <NavDropdown title="Location" id="city-dropdown"  menuVariant="dark">
              <NavDropdown.Item href="#">Tallinn</NavDropdown.Item>
              <NavDropdown.Item href="#">Tartu</NavDropdown.Item>
              <NavDropdown.Item href="#">Narva</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <FontAwesomeIcon icon={faFilm} style={{ color: "#fff" }} />
          <Nav className="me-2">
            <NavDropdown title="Genre" id="genre-dropdown" menuVariant="dark">
              {['Action', 'Fiction', 'Documentary', 'Anime', 'Family', 'Comedy', 'Romance', 'Thriller', 'Horror', 'Mystery'].map((genre) => (
                <div key={genre} className="d-flex align-items-center">
                  <input type="checkbox" id={genre} className="me-2" />
                  <label htmlFor={genre}>{genre}</label>
                </div>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MovFilter;