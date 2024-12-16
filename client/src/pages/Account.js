import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Account = () => {
  return (
    <Container>
      <Row className="mb-3">
        <ButtonGroup size="lg">
          <Button variant="outline-success" href="/adminPage"><b> Admin Panel </b></Button>
        </ButtonGroup>
      </Row>
      <Row className="mb-3">
        <ButtonGroup size="lg">
          <Button variant="outline-success" href="#"><b> Profile </b></Button>
        </ButtonGroup>
      </Row>
      <Row className="mb-3">
        <ButtonGroup size="lg">
          <Button variant="outline-success" href="#"><b> Sign In </b></Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default Account;
