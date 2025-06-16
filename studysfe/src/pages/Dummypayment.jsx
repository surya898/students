import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function Dummypayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.plan || "Standard"; // Get selected plan from navigation

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      alert(`Payment Successful for ${selectedPlan} Plan! 🎉`);
      navigate("/"); // Redirect to homepage or dashboard after success
    }, 2000);
  };

  return (
    <Container className="py-5" style={{ maxWidth: "500px" }}>
      <Card className="shadow-lg">
        <Card.Body>
          <h2 className="text-center text-success">Payment for {selectedPlan} Plan</h2>
          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="password"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100" disabled={processing}>
              {processing ? "Processing..." : "Pay Now"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dummypayment;
