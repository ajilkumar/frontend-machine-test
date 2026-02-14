import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import heroImage from '../assets/1.png'

function Hero() {
  return (
    <div className="bg-light-blue pb-5" style={{ background: '#1090CB1A' }}>
      <Container className="pt-2 pb-3">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-6 fw-bold mb-4 lh-md">
              Experienced <span className="text-primary">mobile and web</span><br />
              applications and website<br />
              builders measuring.
            </h1>
            <p className="lead text-muted mb-4" style={{ fontSize: '0.9rem' }}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile apps, websites for several business sectors, including banking.
            </p>
            <div className="d-flex gap-3">
              <Button variant="primary" className="px-4 py-2 rounded-1">Contact us</Button>
              <Button variant="outline-primary" className="px-4 py-2 rounded-1">View more</Button>
            </div>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
             <img src={heroImage} alt="Hero" className="img-fluid" style={{ maxWidth: '75%' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
