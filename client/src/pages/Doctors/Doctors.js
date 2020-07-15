import React from 'react';
// import { Link } from 'react-router-dom';
// import Jumbotron from '../../components/Jumbotron';
// import Footer from '../../components/Footer';
// import { Input, TextArea, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import './doctors.css';
import HomeButton from '../../components/HomeButton';
import AddDocBtn from '../../components/AddDocBtn';

function Doctors() {
  return (
    <div>
      <div
        style={{
          height: 300, clear: 'both', paddingTop: 120, textAlign: 'center',
        }}
        className="jumbotron"
        id="m2"
      >
        <p>Doctors</p>
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
