import React from 'react';
import Header from '../../components/Header';

import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClipboardUser, faVectorSquare, 
    faPen, faPlus, faMinus, faFire, faStar, faCircleUser
    } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrand } from '@fortawesome/free-brands-svg-icons';

const AdminPage = () => {
    return (
        <div>

            <Header />

            <div className="sidebar">
                <Nav className="flex-column">
                    <NavDropdown title={
                        <span>
                            <FontAwesomeIcon icon={faClipboardUser} /> Profile <FontAwesomeIcon icon={faBars} className="float-right" />
                        </span>
                    } id="submenu1">
                        <NavDropdown.Item>
                            <img
                                className="rounded-circle"
                                style={{ width: '20px', height: '20px' }}
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg"
                                alt="Profile Avatar"
                            /> Full name
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Edit_profile.html">
                            <FontAwesomeIcon icon={faCircleUser} /> Edit profile <sup>(working)</sup>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title={
                        <span>
                            <FontAwesomeIcon icon={faVectorSquare} /> Movies <FontAwesomeIcon icon={faBars} className="float-right" />
                        </span>
                    } id="submenu2">
                        <NavDropdown.Item href="/Edit_hotkey.html" target="iframe_a">
                            <FontAwesomeIcon icon={faPen} /> Edit hotkey <sup>(working)</sup>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/admin/movieAdd" target="iframe_a">
                            <FontAwesomeIcon icon={faPlus} /> Add new Movie <sup>(working)</sup>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" target="iframe_a">
                            <FontAwesomeIcon icon={faMinus} /> Remove Movie
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" target="iframe_a">
                            <FontAwesomeIcon icon={faFire} /> Popular Movies
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#" target="iframe_a">
                            <FontAwesomeIcon icon={faStar} /> Favourite Movies
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#google">
                        <FontAwesomeIcon icon={faGoogleBrand} /> Google Analytics
                    </Nav.Link>

                    <footer style={{ position: 'fixed', bottom: 0, height: '60px', width: 'inherit', display: 'block' }} className="align-items-center">
                        <h5 className="link-light">
                            <img className="ms-4" style={{ width: '50px', height: '50px' }} src='.\client\public\logo192.png' alt="Apollo prj." />
                            Apollo prj.
                        </h5>
                    </footer>
                </Nav>
            </div>

            <div className="main-absolute">
                <iframe
                    title="Admin Content"
                    name="iframe_a"
                    scrolling="no"
                    className="rounded-3"
                    style={{ height: '100%', width: '100%' }}
                    src="./pages/Edit_profile.html"
                />
            </div>
        </div>
    );
};

export default AdminPage;
