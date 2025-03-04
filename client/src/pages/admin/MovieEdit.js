import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminFrames.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan as faTrashCanRegular } from '@fortawesome/free-regular-svg-icons';

function MovieEdit() {
    return (
        <Container>
            <div style={{ textAlign: 'center' }} className="text">
                <h3 className="mb-5">Edit hotkey</h3>
                <Form className="form-inline">
                    <Button type="button" className="btn btn-success btn-sm">Add item</Button>
                    <Button type="button" className="btn btn-danger btn-sm me-3">Remove item</Button>
                    <select className="bg-dark text-white rounded" style={{ width: 'initial' }}>
                        <option>All properties</option>
                        <option>Popular</option>
                        <option>Some properties</option>
                    </select>
                    <input type="text" className="text-white bg-dark border-0 rounded" placeholder="  Search for an element here..." />
                    <Button type="button" className="btn bg-dark text-white btn-sm">Set filter</Button>
                    <Button type="button" className="btn bg-dark text-white btn-sm">Clear</Button>
                </Form>
            </div>

            <div style={{ margin: 'auto' }} className="text mt-4 col-11 container-fluid">
                <Row className="align-items-start text-uppercase mx-1 mb-3">
                    <Col xs={2}>
                        <label>
                            <input className="form-check-input me-4" type="checkbox" id="Checkbox1" value="option1" />
                            Name
                        </label>
                    </Col>
                    <Col xs={2}>Shortcut</Col>
                    <Col xs={2}>Last updated</Col>
                    <Col xs={3}>Status</Col>
                </Row>

                <ListGroup className="w-100">
                    <ListGroup.Item className="border border-secondary rounded bg-dark text-white mb-4">
                        <Row className="my-2 d-flex align-items-center">
                            <Col xs={2}>
                                <label>
                                    <input className="form-check-input me-4" type="checkbox" id="Checkbox1" value="option1" />
                                    Name
                                </label>
                            </Col>
                            <Col xs={2}>Shortcut</Col>
                            <Col xs={2}>Last_updated</Col>
                            <Col xs={3}>Status</Col>
                            <Col xs={2} className="btn-group" role="group" aria-label="Basic example">
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faPen} />
                                </a>
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faTrashCanRegular} />
                                </a>
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </a>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item className="border border-secondary rounded bg-dark text-white mb-4">
                        <Row className="my-2 d-flex align-items-center">
                            <Col xs={2}>
                                <label>
                                    <input className="form-check-input me-4" type="checkbox" id="Checkbox2" value="option1" />
                                    Free transform
                                </label>
                            </Col>
                            <Col xs={2}>Ctrl+T</Col>
                            <Col xs={2}>2022-12-14 20:32</Col>
                            <Col xs={3}>Active</Col>
                            <Col xs={2} className="btn-group" role="group" aria-label="Basic example">
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faPen} />
                                </a>
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faTrashCanRegular} />
                                </a>
                                <a className="nav-link">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </a>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    {/* Добавьте больше элементов списка здесь */}
                </ListGroup>
            </div>
        </Container>
    );
}

export default MovieEdit;
