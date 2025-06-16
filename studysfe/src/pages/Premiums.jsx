import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

function Premiums() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 text-center shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
        <Card.Body>
          <h2 className="fw-bold text-primary">Go Premium 🚀</h2>
          <p className="text-muted">
            Unlock exclusive features, unlimited access, and premium content!
          </p>
          <ul className="text-start">
            <li>✔️ Access to exclusive question papers</li>
            <li>✔️ Ad-free experience</li>
            <li>✔️ Early access to new features</li>
          </ul>
          
          {/* Pay Now Link */}
          <Link to="/payment" className="btn btn-success w-100">
            Pay Now
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Premiums;
