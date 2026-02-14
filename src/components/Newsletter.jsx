import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import starIcon from '../assets/newsletter/Star 1.png';
import paiChartIcon from '../assets/newsletter/Pai Chart 1.png';

function Newsletter() {
  return (
    <div className="bg-light-blue py-5 position-relative overflow-hidden" style={{ backgroundColor: '#EBF7FF' }}>
      
      {/* Decorative Assets */}
      <div className="position-absolute start-0 top-0 ms-5 mt-n3 d-none d-md-block">
        <img src={starIcon} alt="Star" style={{ width: '60px', transform: 'rotate(-15deg)' }} />
      </div>
      <div className="position-absolute end-0 top-0 me-5 mt-5 d-none d-md-block">
        <img src={paiChartIcon} alt="Chart" style={{ width: '50px' }} />
      </div>

      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <h3 className="fw-bold mb-4 display-6">Lorem Ipsum is simply dummy <br /> text of the printing.</h3>
            
            <Form className="mt-5">
              <InputGroup className="mb-3 shadow p-1 bg-white rounded" style={{ borderRadius: '10px' }}>
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  className="border-0 shadow-none ps-4 bg-transparent"
                />
                <Button variant="dark" className="px-4 py-2" style={{ borderRadius: '8px', backgroundColor: '#000', borderColor: '#000' }}>
                  SUBSCRIBE
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Newsletter;
