import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-success" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-dark fw-bold fs-5">
          <i className="fa-solid fa-graduation-cap fa-lg" style={{ color: "#000000" }} />
          {' '} Learn Online
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-dark fw-bold fs-5">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/dash" className="text-dark fw-bold fs-5">Subjects</Nav.Link>
            <Nav.Link as={NavLink} to="/prev" className="text-dark fw-bold fs-5">Prev Qst</Nav.Link>
            <Nav.Link as={NavLink} to="/quiz" className="text-dark fw-bold fs-5">Quizz</Nav.Link>
            <Nav.Link as={NavLink} to="/exam" className="text-dark fw-bold fs-5">Online Test</Nav.Link>
            
            {/* Premium Membership (Styled Button) */}
            <Nav.Link 
              as={NavLink} 
              to="/premium" 
              className="btn btn-primary text-dark fw-bold fs-6 mx-2 px-3" 
              style={{ borderRadius: "20px" }}
            >
              👑 Go Premium
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
