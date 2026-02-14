import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function InfoSection() {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Lorem Ipsum is simply dummy text of the printing.</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
            Lorem Ipsum has been the industry's
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoSection;
