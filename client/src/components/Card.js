import Card from 'react-bootstrap/Card';

const CardExample = ({ images }) => {
  return (
    <div className="d-flex justify-content-around">
      {images.map((image, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              <p><a href="#" class="link-body-emphasis link-underline-opacity-0-hover">Card Title {index + 1}</a></p>
            </Card.Title>
            <Card.Text>
              card text for image {index + 1}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardExample;