// used in carousels
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Card1 = ({ cardData }) => {
return (
  <div className="d-flex justify-content-around">
    {cardData && cardData.length > 0 ? (
      cardData.map((data, index) => (
        <Card key={index} style={{ width: '18rem' }} className='mx-0 mx-sm-2'>
          <Card.Link href={data.link}>
            <Card.Img variant="top" src={data.image} />
          </Card.Link>
          <Card.Body>
            <Card.Title>
              <p>
                <a href={data.link} className="link-body-emphasis link-underline-opacity-0-hover">
                  {data.title}
                </a>
              </p>
            </Card.Title>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
      </Card>
      ))
    ) : (
      <p>Loading...</p> // not corupts anymore if waiting data
    )}
  </div>
);
}

export default Card1;