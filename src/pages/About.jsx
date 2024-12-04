import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../about.css';
import profile from '../assets/tinago.jpg'; // Imported image

function About() {
  return (
    <div className="about-container">
      {/* Hero Section using Alert */}
      <Alert variant="secondary" className="text-center" style={{ padding: '3rem 0' }}>
        <h1 style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>About Me</h1>
        <p style={{ fontSize: '20px', color: 'white' }}>
          Welcome to my about page. I'm passionate about web development and love to create amazing user experiences.
        </p>
      </Alert>

      {/* Main content container */}
      <Container>
        <Row>
          {/* Column for personal background */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>My Background</Card.Title>
                <Card.Text>
                  I have experiences in vlogging and video editing using Capcut and to create a novelty type of videos to entertain my audience.
                  Also to earn money on social media platforms.
                </Card.Text>
                <Link to="/contact">
                  <Button variant="dark">Contact Me</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Column for displaying skills */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Video Editing</ListGroup.Item>
                  <ListGroup.Item>Node.js</ListGroup.Item>
                  <ListGroup.Item>Photography</ListGroup.Item>
                  <ListGroup.Item>Coding</ListGroup.Item>
                  <ListGroup.Item>SQL</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Profile Picture Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <img
              src={profile} // Use the imported profile image here
              alt="Profile"
              className="rounded-circle"
              style={{ width: '150px', height: '150px' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
