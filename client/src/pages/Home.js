import React from 'react';
import {Link} from 'react-router-dom';



import { Col, Row, Container } from '../components/Grid';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Link to = '/Medications'><button type="button" className="medications"> Medications </button></Link>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <Link to = '/Doctors'><button type="button" className="doctors"> Doctors </button></Link>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <Link to = '/Appointments'><button type="button" className="appointments"> Appointments </button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
