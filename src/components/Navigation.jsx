import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-white py-2">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary fs-3">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="#home" className="text-primary active">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark">
              About us
            </Nav.Link>
            <Nav.Link href="#services" className="text-dark">
              Services
            </Nav.Link>
            <Nav.Link href="#blog" className="text-dark">
              Blog
            </Nav.Link>
            <Button variant="primary" className="px-4 rounded-1">
              Contact us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
