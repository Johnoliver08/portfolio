import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure bootstrap styles are included
import Tinago from '../assets/tinago.jpg';

function Education() {
  return (
    <Container className="my-5">
      {/* Title and Subtitle Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>My Education Journey</h1>
          <p style={{ fontSize: '1.25rem', color: 'white' }}>
            Here's a look at my educational background and the institutions that have helped shape my skills and passion for technology.
          </p>
        </Col>
      </Row>

      {/* Education Cards Section */}
      <Row className="my-4" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
        {/* Bula Central School */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipMXJxhbXf0j1aVJBEjSa_ep8P2dHfxViKcTmRqT=s680-w680-h510" style={{ height: '200px', objectFit: 'cover'  }} />
            <Card.Body>
              <Card.Title>Sta. Cruz Elementary School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2009 - 2015</Card.Subtitle>
              <Card.Text>
                I graduated at Sta. Cruz Elementary School, where I completed my primary education.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Bula National High School */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={Tinago} style={{ height: '200px', objectFit: 'cover'  }} />
            <Card.Body>
              <Card.Title>Tinago National High School</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Junior High: 2015 - 2019 | Senior High: 2019 - 2021</Card.Subtitle>
              <Card.Text>
                I graduated from Tinago National High School, where I completed my secondary education.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Naga College Foundation Inc. */}
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://www.pacu.org.ph/wordpress/wp-content/uploads/2017/05/Naga-College-Foundation.jpg" style={{ height: '200px', objectFit: 'cover'  }} />
            <Card.Body>
              <Card.Title>Naga College Foundation Inc.</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Pursuing Bachelor of Information Systems (BSIS)</Card.Subtitle>
              <Card.Text>
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
