import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../about.css';

function About() {
  const [imgError, setImgError] = useState(false);
  
  // Fallback image URL (you can use your local one or a different external image)
  const fallbackImage = '/assets/default-profile.jpg';  // Example fallback image in public folder

  return (
    <div className="about-container">
      {/* Hero Section using Alert */}
      <Alert variant="secondary" className="text-center" style={{ padding: '3rem 0' }}>
        <h1 style={{ fontSize: '50px', color: 'white', fontWeight: 'bold' }}>About Me</h1>
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
              src={imgError ? fallbackImage : "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/329791058_683348890248315_8407160963727830391_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF37Ge1zxZ7l9vsHSYS7pmG0-OoLT4PZ_jT46gtPg9n-BQ95Dmr0I-6fosmCSZVMnK3zxady-nmrMfCjPSYirvi&_nc_ohc=3wURVdctYHEQ7kNvgGRo735&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=AhJubL4nz031vPYqrpkGTu4&oh=00_AYBr6g_XnddkBwRgrxQBJ9gdr37gWluy6ad27l40NU3SJg&oe=6755C306"}
              alt="Profile"
              className="rounded-circle"
              style={{ width: '150px', height: '150px' }}
              onError={() => setImgError(true)} // Sets error state if the image fails to load
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
