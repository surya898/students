import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Premium() {
  return (
    <Container className="py-5" style={{ background: "#f8f9fa", borderRadius: "10px" }}>
      <h1 className="text-center fw-bold text-primary mb-4">Premium Membership</h1>
      <p className="text-center text-muted">Choose a plan that fits your needs and unlock exclusive benefits!</p>

      <Row className="justify-content-center">
        {/* Free Plan */}
        <Col md={4} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold">Free Plan</Card.Title>
              <h2 className="text-success">$0</h2>
              <p className="text-muted">Basic access to features</p>
              <ul className="list-unstyled">
                <li>✔ Access to public content</li>
                <li>✔ Limited downloads</li>
                <li>❌ No premium support</li>
              </ul>
              <Link to="/premium" className="btn btn-outline-success w-100">Get Started</Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Standard Plan */}
        <Col md={4} className="mb-4">
          <Card className="text-center shadow-lg border-primary">
            <Card.Body>
              <Card.Title className="fw-bold text-primary">Standard Plan</Card.Title>
              <h2 className="text-primary">$9.99</h2>
              <p className="text-muted">More features for regular users</p>
              <ul className="list-unstyled">
                <li>✔ Access to all content</li>
                <li>✔ 10 downloads per month</li>
                <li>✔ Email support</li>
              </ul>
              <Link to="/premiums" className="btn btn-primary w-100">Upgrade Now</Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Premium Plan */}
        <Col md={4} className="mb-4">
          <Card className="text-center shadow-lg border-warning">
            <Card.Body>
              <Card.Title className="fw-bold text-warning">Premium Plan</Card.Title>
              <h2 className="text-warning">$19.99</h2>
              <p className="text-muted">Full access with premium benefits</p>
              <ul className="list-unstyled">
                <li>✔ Unlimited access & downloads</li>
                <li>✔ Priority support</li>
                <li>✔ Exclusive resources</li>
              </ul>
              <Link to="/premiums" className="btn btn-warning w-100">Go Premium</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Premium;
