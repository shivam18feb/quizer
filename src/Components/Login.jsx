import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center m-5">
        <Card className="mt-5">
          <Card.Body className="px-4">
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5 py-2 text-center">
              Student Registration Form
            </h3>
            <Row>
              <Col md="6">
                <Form.Group className="mb-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control size="lg" type="text" id="form1" />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control size="lg" type="text" id="form2" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>Father Name</Form.Label>
                  <Form.Control size="lg" type="text" id="form3" />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-4">
                  <Form.Label>Mother Name</Form.Label>
                  <Form.Control size="lg" type="text" id="form4" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="mb-4">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control size="lg" type="text" id="form5" />
                </Form.Group>
              </Col>
              <Col md="6" className="mb-4">
                <h6 className="fw-bold">Gender:</h6>
                <Form.Check
                  inline
                  label="Female"
                  type="radio"
                  name="inlineRadio"
                  id="inlineRadio1"
                  value="option1"
                />
                <Form.Check
                  inline
                  label="Male"
                  type="radio"
                  name="inlineRadio"
                  id="inlineRadio2"
                  value="option2"
                />
                <Form.Check
                  inline
                  label="Other"
                  type="radio"
                  name="inlineRadio"
                  id="inlineRadio3"
                  value="option3"
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control size="lg" type="email" id="form6" />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-4">
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <FormControl size="lg" type="tel" id="form7" />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form.Select aria-label="Select School" size="lg">
                  <option>Select School</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md="6">
                <Form.Select aria-label="Select Class" size="lg">
                  <option>Select Class</option>
                  <option value="1"> Class 1</option>
                  <option value="1"> Class 2</option>
                  <option value="1"> Class 3</option>
                  <option value="1"> Class 4</option>
                  <option value="1"> Class 5</option>
                  <option value="1"> Class 6</option>
                  <option value="1"> Class 7</option>
                  <option value="1"> Class 8</option>
                  <option value="1"> Class 9</option>
                  <option value="1"> Class 10</option>
                  <option value="1"> Class 11</option>
                  <option value="1"> Class 12</option>
                </Form.Select>
              </Col>
            </Row>
            <div className="row justify-content-center mt-5">
              {" "}
              <Button variant="primary" type="submit" size="lg">
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Login;
