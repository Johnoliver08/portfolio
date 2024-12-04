import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap'; // Import React Bootstrap components
import '../about.css'; // Assuming your custom styles are in this file

function Hobbies() {
  return (
    <Container className="my-5">
      {/* Title Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>My Hobbies</h1>
          <p style={{ fontSize: '1.25rem', color: 'white' }}>
            Here are some of my favorite activities that I enjoy during my free time:
          </p>
        </Col>
      </Row>

      {/* Hobbies Cards Section */}
      <Row className="my-4">
        {/* Singing Hobby Card */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src='https://images.unsplash.com/photo-1607653039028-1268c6bcb25d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmxvZ2dpbmd8ZW58MHx8MHx8fDA%3D' style={{ height: '200px', objectFit: 'cover'  }} />
            <Card.Body>
              <Card.Title>Vlogging</Card.Title>
              <Card.Text>
                I enjoy vlogging because to entertain and to give joy from my audience. It's a great way to share my thoughts and experiences with others. 
              </Card.Text>
              <Badge bg="info">Hobby</Badge>
            </Card.Body>
          </Card>
        </Col>

        {/* Playing Football Hobby Card */}
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src='https://plus.unsplash.com/premium_photo-1661868926397-0083f0503c07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9vdGJhbGx8ZW58MHx8MHx8fDA%3D' style={{ height: '247px', objectFit: 'cover'  }} />
            <Card.Body>
              <Card.Title>Playing Football</Card.Title>
              <Card.Text>
                I love playing football because it's a great way to exercise and have fun.
              </Card.Text>
              <Badge bg="success">Sport</Badge>
            </Card.Body>
          </Card>
        </Col>

        {/* Driving Hobby Card */}
        <Col md={4}>
          <Card>
          <Card.Img variant="top" src='https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' style={{ height: '222px', objectFit: 'cover'  }} />
            <Card.Body>
              <Card.Title>Playing Guitar</Card.Title>
              <Card.Text>
                I love playing guitar because it's a great way to express myself and relieve my stress at work.
              </Card.Text>
              <Badge bg="warning">Leisure</Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hobbies;
