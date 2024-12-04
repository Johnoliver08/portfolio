import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tinago from '../assets/Tinago.jpg';

function Education() {
  return (
    <Container className="my-5">
      {/* Title and Subtitle Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f8f9fa' }}>My Education Journey</h1>
          <p style={{ fontSize: '1.25rem', color: '#f8f9fa', maxWidth: '800px', margin: '0 auto' }}>
            Here's a look at my educational background and the institutions that have helped shape my skills and passion for technology.
          </p>
        </Col>
      </Row>

      {/* Education Cards Section */}
      <Row className="my-4" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
        {/* Bula Central School */}
        <Col md={4} className="mb-4">
          <Card className="shadow-lg rounded-3">
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipMXJxhbXf0j1aVJBEjSa_ep8P2dHfxViKcTmRqT=s680-w680-h510" style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <Card.Body>
              <Card.Title className="font-weight-bold" style={{ fontSize: '1.5rem' }}>Sta. Cruz Elementary School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1rem' }}>2009 - 2015</Card.Subtitle>
              <Card.Text style={{ fontSize: '1rem', color: '#495057' }}>
                I graduated at Sta. Cruz Elementary School, where I completed my primary education.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Tinago National High School */}
        <Col md={4} className="mb-4">
          <Card className="shadow-lg rounded-3">
            <Card.Img variant="top" src={Tinago} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <Card.Body>
              <Card.Title className="font-weight-bold" style={{ fontSize: '1.5rem' }}>Tinago National High School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1rem' }}>Junior High: 2015 - 2019 | Senior High: 2019 - 2021</Card.Subtitle>
              <Card.Text style={{ fontSize: '1rem', color: '#495057' }}>
                I graduated from Tinago National High School, where I completed my secondary education.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Naga College Foundation Inc. */}
        <Col md={4} className="mb-4">
          <Card className="shadow-lg rounded-3">
            <Card.Img variant="top" src="https://www.pacu.org.ph/wordpress/wp-content/uploads/2017/05/Naga-College-Foundation.jpg" style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <Card.Body>
              <Card.Title className="font-weight-bold" style={{ fontSize: '1.5rem' }}>Naga College Foundation Inc.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1rem' }}>Pursuing Bachelor of Information Systems (BSIS)</Card.Subtitle>
              <Card.Text style={{ fontSize: '1rem', color: '#495057' }}>
                I am currently pursuing Bachelor of Information Systems (BSIS) at Naga College Foundation Inc.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
