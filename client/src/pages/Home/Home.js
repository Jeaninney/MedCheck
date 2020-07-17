import React from 'react';
import { Link } from 'react-router-dom';


import { Col, Row, Container } from '../../components/Grid';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Link to="/medications"><button type="button" className="medications"> MEDICATIONS </button></Link>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Link to="/doctors"><button type="button" className="doctors"> DOCTORS </button></Link>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Link to="/appointments"><button type="button" className="appointments"> APPOINTMENTS </button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
