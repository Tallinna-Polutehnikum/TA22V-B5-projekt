import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const CardRows = ({ cardData }) => {
return (
  <Row>
    {cardData && cardData.length > 0 ? (
      cardData.map((data, index) => (
        <Col xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ width: '100%' }} className='mb-4'>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>
                <p>
                  <a href="#" className="link-body-emphasis link-underline-opacity-0-hover">
                    {data.title}
                  </a>
                </p>
              </Card.Title>
              <Card.Text>{data.description}</Card.Text>
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