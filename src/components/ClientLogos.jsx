import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import beneoshop from "../assets/companies/beneoshop.png";
import caspio from "../assets/companies/caspio.png";
import hypergrid from "../assets/companies/HyperGrid.png";
import leotrippi from "../assets/companies/leotrippi.png";

function ClientLogos() {
  const logos = [
    { name: "beneoshop", src: beneoshop },
    { name: "caspio", src: caspio },
    { name: "HyperGrid", src: hypergrid },
    { name: "leotrippi", src: leotrippi },
  ];

  return (
    <Container className="my-5 py-5">
      <div className="text-center mb-5">
        <h5 className="fw-bold fs-4">You will be in good Company</h5>
      </div>
      <Row className="align-items-center justify-content-center">
        {logos.map((logo, index) => (
          <Col xs={6} md={3} key={index} className="text-center mb-4 mb-md-0">
            <img src={logo.src} alt={logo.name} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ClientLogos;
