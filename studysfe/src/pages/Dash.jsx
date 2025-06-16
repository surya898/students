import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Dash() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 500); 
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <div>
      <div style={{ width: '100%', overflow: 'hidden', padding: '50px' }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/733/773/non_2x/cartoon-school-kids-studying-in-the-classroom-vector.jpg"
          alt="Description"
          style={{ width: '100%', height: '800px', transform: 'translateY(-30px)' }}    
        />
      </div>

      <Container>
        <h2 className="my-4 text-center">Subjects</h2>
        <Row className="d-flex justify-content-center">
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="w-100">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/english-british-england-language-education-concept_53876-124292.jpg?ga=GA1.1.629053767.1730459832&semt=ais_hybrid"
              />
              <Card.Body>
                <Card.Title>English</Card.Title>
                <Link to={'/eng'} className='stretched-link'></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="w-100">
              <Card.Img
                variant="top"
                src="https://ih1.redbubble.net/image.2594308993.1058/st,small,507x507-pad,600x600,f8f8f8.jpg"
              />
              <Card.Body>
                <Card.Title>Malayalam</Card.Title>
                <Link to={'/mal'} className='stretched-link'></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="w-100">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/mathematics-rules-with-numbers-calculator_23-2148416070.jpg?ga=GA1.1.629053767.1730459832&semt=ais_hybrid"
              />
              <Card.Body>
                <Card.Title>Mathematics</Card.Title>
                <Link to={'/math'} className='stretched-link'></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={4} className="d-flex justify-content-center mb-4">
            <Card className="w-100">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/236x/59/35/fa/5935fa73c81ec16255ab107612e11567.jpg"
              />
              <Card.Body>
                <Card.Title>Computer Science</Card.Title>
                <Link to={'/cs'} className='stretched-link'></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showPopup} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center">Welcome to Learn Online!</h3>
          <p className="text-center">Explore our platform and enjoy learning!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Get Started
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dash;
