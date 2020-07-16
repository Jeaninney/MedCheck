import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../../components/Footer';
// import { Input, TextArea, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import AddDocBtn from '../../components/AddDocBtn';

function Doctors() {
  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2"
      >
        <p>DOCTORS</p>
      </div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            View Doctors
          </Col>
        </Row>
      </Container>
      <AddDocBtn />
      <HomeButton />
    </div>
  );
}

export default Doctors;
