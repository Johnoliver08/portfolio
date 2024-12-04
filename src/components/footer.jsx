import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-warning text-dark text-center p-3">
      <Container>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <div>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark p-3"          
          >
            Facebook
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
