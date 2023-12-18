import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Obj from "./Objective";
import "./header.css";

function Navbars() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark fixed-top px-5" id="navs">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">Quizers Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/objective">Objective Type</Nav.Link>
              <Nav.Link as={Link} to="/descriptive">Descriptive Type</Nav.Link>
              <NavDropdown title="Others" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/report-cards">Report Cards</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/school-wise">School Wise</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/registration-process">Registration Process</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-5">
        <Routes>
          <Route
            path="/objective"
            element={isAuthenticated ? <Obj /> : null}
          />
          {/* Add more Route components for other pages as needed */}
        </Routes>
      </Container>
    </Router>
  );
}

export default Navbars;
