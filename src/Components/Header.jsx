import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Obj from "./Objective";
import "./header.css";

function Navbars() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Example: Fetch user authentication status
    const fetchAuthenticationStatus = async () => {
      try {
        // Replace the following line with your actual authentication logic or API call
        const response = await fetch("/api/authentication");
        const data = await response.json();

        // Set the authentication status based on the response
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error("Error fetching authentication status:", error);
      }
    };

    fetchAuthenticationStatus();
  }, []); // Empty dependency array means this effect runs once when the component mounts


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
            element={isAuthenticated ? <Obj /> : <Navigate to="/Obj" />}
          />
          {/* Add more Route components for other pages as needed */}
        </Routes>
      </Container>
    </Router>
  );
}

export default Navbars;
