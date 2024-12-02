// import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';

// function CardExample() {
//   return (
//     <div className="d-flex justify-content-around">
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             card text
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>

//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Placeholder as={Card.Title} animation="glow">
//             <Placeholder xs={6} />
//           </Placeholder>
//           <Placeholder as={Card.Text} animation="glow">
//             <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
//             <Placeholder xs={6} /> <Placeholder xs={8} />
//           </Placeholder>
//           <Placeholder.Button variant="primary" xs={6} />
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default CardExample;
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
