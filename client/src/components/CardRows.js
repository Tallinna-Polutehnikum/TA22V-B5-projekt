// used in /movies
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BtnTrailer from './BtnTrailer';


const CardRows = ({ cardData }) => {
  const videoId = 'dQw4w9WgXcQ';


return (
  <Row>
    {cardData && cardData.length > 0 ? (
      cardData.map((data, index) => (
        <Col xs={12} sm={6} md={6} lg={4} xxl={3} key={index}>
          {/* <CardGroup></CardGroup> Why_it_columns*/}
          <Card bg='light' text='dark' style={{ width: '100%' }} className='mb-4'>

            <Card.Link href={data.link}>
              <Card.Img variant="top" src={data.image} />
            </Card.Link>
            
            <Card.Body>

              <Card.Title>
                  <a href={data.link} className="link-body-emphasis link-underline-opacity-0-hover">
                    {data.title}
                  </a>
              </Card.Title>

              <Card.Text>{data.description}</Card.Text>
              
            <div className="d-grid gap-2">
              <ButtonGroup vertical>

                <BtnTrailer videoId={videoId} />

                
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