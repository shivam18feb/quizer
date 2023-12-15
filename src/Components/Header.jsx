import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Obj from "./Objective";
import "./header.css";

function Navbars() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark fixed-top px-5" id="navs">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Quizers Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/objective">Objective Type</Nav.Link>
              <Nav.Link href="#pricing">Descriptive Type</Nav.Link>
              <NavDropdown title="Others" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Report Cards</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">School Wise</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Registration Process</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Dashboard</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Registration</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-5">
        <Routes>
          <Route path="/objective" element={<Obj />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Navbars;
