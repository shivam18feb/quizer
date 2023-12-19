import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import * as XLSX from "xlsx";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    birthday: "",
    gender: "",
    email: "",
    phoneNumber: "",
    selectedSchool: "",
    selectedClass: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Basic validation example - add your specific validation rules
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    // Add similar checks for other fields

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Add the current form data to the array of submissions
      setFormSubmissions([...formSubmissions, formData]);

      // Optionally, you can clear the form fields after submission
      setFormData({
        firstName: "",
        lastName: "",
        fatherName: "",
        motherName: "",
        birthday: "",
        gender: "",
        email: "",
        phoneNumber: "",
        selectedSchool: "",
        selectedClass: "",
      });

      console.log("Form submitted:", formData);
    }
  };

  const exportToExcel = () => {
    if (formSubmissions.length === 0) {
      alert("No data to export.");
      return;
    }
  
    const wb = XLSX.utils.book_new();
  
    // Transform formSubmissions into an array of arrays suitable for XLSX
    const dataForExcel = formSubmissions.map((submission) =>
      Object.values(submission)
    );
  
    // Add a sheet for the current submissions
    const ws = XLSX.utils.aoa_to_sheet([Object.keys(formData), ...dataForExcel]);
    XLSX.utils.book_append_sheet(wb, ws, "Form Submissions");
  
    XLSX.writeFile(wb, "form_submissions.xlsx");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
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
                    <Form.Control
                      size="lg"
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Father Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      id="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      isInvalid={!!errors.fatherName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fatherName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-4">
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      id="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      isInvalid={!!errors.motherName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.motherName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group className="mb-4">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      size="lg"
                      type="date"
                      id="birthday"
                      value={formData.birthday}
                      onChange={handleChange}
                      isInvalid={!!errors.birthday}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.birthday}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md="6" className="mb-4">
                  <h6 className="fw-bold">Gender:</h6>
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    id="gender-male"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    id="gender-female"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  {/* Add more options if needed */}
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      size="lg"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>+91</InputGroup.Text>
                      <Form.Control
                        size="lg"
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        isInvalid={!!errors.phoneNumber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phoneNumber}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Select
                    aria-label="Select School"
                    size="lg"
                    id="selectedSchool"
                    value={formData.selectedSchool}
                    onChange={handleChange}
                    isInvalid={!!errors.selectedSchool}
                  >
                    <option>Select School</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.selectedSchool}
                  </Form.Control.Feedback>
                </Col>
                <Col md="6">
                  <Form.Select
                    aria-label="Select Class"
                    size="lg"
                    id="selectedClass"
                    value={formData.selectedClass}
                    onChange={handleChange}
                    isInvalid={!!errors.selectedClass}
                  >
                    <option>Select Class</option>
                    <option value="1"> Class 1</option>
                    <option value="2"> Class 2</option>
                    <option value="3"> Class 3</option>
                    <option value="4"> Class 4</option>
                    <option value="5"> Class 5</option>
                    <option value="6"> Class 6</option>
                    <option value="7"> Class 7</option>
                    <option value="8"> Class 8</option>
                    <option value="9"> Class 9</option>
                    <option value="10"> Class 10</option>
                    <option value="11"> Class 11</option>
                    <option value="12"> Class 12</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.selectedClass}
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <div className="row justify-content-center mt-5">
                <Button variant="primary" type="submit" size="lg">
                  Submit
                </Button>
              </div>
              <div className="row justify-content-center mt-5">
                <Button
                  variant="success"
                  className="ms-3"
                  size="lg"
                  onClick={exportToExcel}
                >
                  Export to Excel
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Form>

      {/* Display form submissions (for demonstration purposes) */}
      <div className="mt-5">
        <ul>
          {formSubmissions.map((submission, index) => (
            <li key={index}>{JSON.stringify(submission)}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Login;
