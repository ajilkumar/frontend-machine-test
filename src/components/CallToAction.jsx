import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import bellIcon from '../assets/action/Bell Angle 1.png';

function CallToAction() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <div className="bg-light p-5 rounded-4 h-100 text-center d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden">
             
             <h3 className="fw-bold mb-4" style={{ maxWidth: '300px' }}>Lorem Ipsum is simply dummy text.</h3>
             <p className="text-muted mb-4" style={{ maxWidth: '400px' }}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.
             </p>
             <Button variant="primary" className="px-4 py-2 rounded-1">View More</Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-5 rounded-4 h-100 text-center d-flex flex-column justify-content-center align-items-center text-white position-relative overflow-hidden" style={{backgroundColor: '#0d7db3'}}>
             <div className="position-absolute end-0 top-0 p-3">
                <img src={bellIcon} alt="Bell" style={{ width: '100px' }} />
             </div>

             <h3 className="fw-bold mb-4" style={{ maxWidth: '300px' }}>Lorem Ipsum is simply dummy text.</h3>
             <p className="text-white-50 mb-4" style={{ maxWidth: '400px' }}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.
             </p>
             <Button variant="light" className="px-4 py-2 rounded-1 text-primary fw-bold">View More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CallToAction;
