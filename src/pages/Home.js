import React from 'react';

import { Col, Row, Container } from '../components/Grid';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <button type="button" className="medications"> Medications </button>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <button type="button" className="doctors"> Doctors </button>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <button type="button" className="appointments"> Appointments </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
