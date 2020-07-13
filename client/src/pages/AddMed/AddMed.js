import React from 'react';
// import { Link } from 'react-router-dom';
// import Jumbotron from '../../components/Jumbotron';
// import Footer from '../../components/Footer';
// import { Input, TextArea, FormBtn } from '../../components/Form';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import './addmed.css';
import HomeButton from '../../components/HomeButton';

function AddMedForm() {
  return (
    <div>
      <div
        style={{
          height: 300, clear: 'both', paddingTop: 120, textAlign: 'center',
        }}
        className="jumbotron"
        id="m2"
      >
        <p>Add Medication</p>
      </div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
            <label>Medication Name</label>
              <Input
                // onChange={handleInputChange}
                name="title"
                placeholder="Medication Name (required)"
              />
               <label>Enter Dosage</label>
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Add Dosage (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="AM/PM (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Medication Purpose (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Prescribing Doctor"
              />
              <FormBtn>
                Submit Medication Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <HomeButton />
    </div>
  );
}

export default AddMedForm;
