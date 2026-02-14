import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import feature01 from '../assets/features/01.png';
import feature02 from '../assets/features/02.png';
import feature03 from '../assets/features/03.png';
import happyIcon from '../assets/features/happy 1.png';
import vectorLine from '../assets/features/Vector 4.png';

function Features() {
  const features = [
    {
      icon: happyIcon,
      color: "#08d3bb",
      image: feature01,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      icon: happyIcon,
      color: "#1090cb",
      image: feature02,
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      icon: happyIcon,
      color: "#9208d3",
      image: feature03, // ✅ feature 3 image added
      title: "Lorem Ipsum is simply dummy text of the printing.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  return (
    <Container className="my-5 py-5 position-relative">
      
      {/* Vector Line - Visible only on large screens */}
      <div className="position-absolute d-none d-lg-block" style={{ top: '10%', left: '-40%', right: '0', bottom: '10%', zIndex: -1 }}>
         <img src={vectorLine} alt="Process Line" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>

      {features.map((feature, index) => (
        <Row
          key={index}
          className={`align-items-center mb-5 pb-5 ${
            index % 2 !== 0 ? 'flex-row-reverse' : ''
          }`}
          // style={index === 2 ? { marginTop: '100px' } : {}}
        >
          {/* TEXT SIDE */}
          <Col md={6}>
            <div
              className="feature-icon-wrapper mb-3"
              style={{
                backgroundColor: feature.color,
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={feature.icon}
                alt="Icon"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain'
                }}
              />
            </div>

            <h2 className="fw-bold mb-3">
              <span className="text-primary">Lorem Ipsum</span> is simply dummy text of the printing.
            </h2>

            <p className="text-muted">{feature.text}</p>
          </Col>

          {/* IMAGE SIDE */}
          <Col md={6} className="text-center">
            {feature.image ? (
              <img
                src={feature.image}
                alt="Feature"
                className="img-fluid"
              />
            ) : (
              <div
                style={{
                  width: '80%',
                  height: '300px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '20px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="text-muted">Mockup Placeholder</span>
              </div>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Features;
