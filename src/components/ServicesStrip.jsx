import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/services/01.png';
import img2 from '../assets/services/02.png';
import img3 from '../assets/services/03.png';
import img4 from '../assets/services/04.png';

function ServicesStrip() {
  const services = [
    { icon: img1, title: "Web Application", desc: "Lorem ipsum dummy", color: "#EFEAFF" }, 
    { icon: img2, title: "SEO", desc: "Lorem ipsum dummy", color: "#ECFFDA" },
    { icon: img3, title: "AR/VR Solutions", desc: "Lorem ipsum dummy", color: "#DAE6FF" }, 
    { icon: img4, title: "Mobile Applications", desc: "Lorem ipsum dummy", color: "#FFE5DA" },
  ];

  return (
    <Container className="py-5">
      <Row>
        {services.map((service, index) => (
          <Col md={3} sm={6} key={index} className="mb-4 mb-md-0">
            <div className="d-flex align-items-center gap-3 p-3 rounded">
              <div className="p-3" style={{ backgroundColor: service.color, width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                <img src={service.icon} alt={service.title} style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
              </div>
              <div>
                <h6 className="fw-bold mb-0">{service.title}</h6>
                <small className="text-muted">{service.desc}</small>
              </div>
            </div>
          </Col>
        ))}
      </Row>

    </Container>
  );
}

export default ServicesStrip;
