import Card from 'react-bootstrap/Card';

const CardExample = ({ cardData }) => {
return (
  <div className="d-flex justify-content-around">
    {cardData && cardData.length > 0 ? (
      cardData.map((data, index) => (
        <Card key={index} style={{ width: '18rem' }} class='mx-0 mx-sm-2'>
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
      ))
    ) : (
      <p>Loading...</p> // not corupts anymore if waiting data
    )}
  </div>
);
}

export default CardExample;