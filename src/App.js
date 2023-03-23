import React from "react";
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';



function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <h1>Search book app</h1>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <InputGroup className="mb-3 mt-3 w-60 mx-auto">
              <Form.Control
                placeholder="Enter your search..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="secondary" id="button-addon2">
                Start
              </Button>
            </InputGroup>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>
            <h6>Category:</h6>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={3}>
            <h6>Filter:</h6>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
