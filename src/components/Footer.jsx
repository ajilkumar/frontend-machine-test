import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <footer className="mt-auto py-5 bg-white">
      <Container>
        <Row className="gy-4">
          <Col md={4} lg={3}>
            <p className="text-muted mb-4 small" style={{ lineHeight: '1.8' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-muted small">@Lorem</p>
          </Col>
          <Col md={2} lg={2} className="offset-lg-1">
            <h6 className="fw-bold mb-3">About us</h6>
            <Nav className="flex-column small">
              <Nav.Link href="#" className="text-muted p-0 mb-2">Lorem</Nav.Link>
              <Nav.Link href="#" className="text-muted p-0 mb-2">Portfolio</Nav.Link>
              <Nav.Link href="#" className="text-muted p-0 mb-2">Careers</Nav.Link>
              <Nav.Link href="#" className="text-muted p-0 mb-2">Contact us</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} lg={3}>
            <h6 className="fw-bold mb-3">Contact us</h6>
            <p className="text-muted small mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-muted small">+908 89097 890</p>
          </Col>
          <Col md={3} lg={3} className="d-flex align-items-end justify-content-md-end">
            <div className="d-flex gap-3">
               <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                 <i className="fa-brands fa-facebook-f"></i>
               </div>
               <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                 <i className="fa-brands fa-instagram"></i>
               </div>
               <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                 <i className="fa-brands fa-twitter"></i>
               </div>
               <div className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                 <i className="fa-brands fa-linkedin-in"></i>
               </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-4 border-top">
          <Col className="text-center">
            <small className="text-muted">Copyright ® 2021 Lorem All rights Reserved</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
