import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const CardRows = ({ cardData }) => {
return (
  <Row>
    {cardData && cardData.length > 0 ? (
      cardData.map((data, index) => (
        <Col xs={12} sm={6} md={6} lg={4} xxl={3} key={index}>
          <Card style={{ width: '100%' }} className='mb-4'>
          <Button href={data.link} variant="link" style={{padding: 0}}>
            <Card.Img variant="top" src={data.image} />
          </Button>
            <Card.Body>
            <div>
              <Card.Title>
                <p>
                  <a href={data.link} className="link-body-emphasis link-underline-opacity-0-hover">
                    {data.title}
                  </a>
                </p>
              </Card.Title>
              <Card.Text>{data.description}</Card.Text>
            </div>
            <div className="d-grid gap-2">
            <ButtonGroup vertical>
              <Button variant="outline-info" size="sm" className="fs-6">          {/* try smth lk: https://react-bootstrap.netlify.app/docs/components/modal#vertically-centered */}
                <FontAwesomeIcon icon={faPlay} /> Trailer 
              </Button>
              <Button variant="outline-primary" size="sm" className="fs-6">
                Showtimes
              </Button>
            </ButtonGroup>
            </div>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <p>Loading...</p> // not corrupts anymore if waiting data
    )}
  </Row>
);
};

export default CardRows;