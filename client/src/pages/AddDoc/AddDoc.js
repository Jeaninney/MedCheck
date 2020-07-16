import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../../components/Footer';
// import { Input, TextArea, FormBtn } from '../../components/Form';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import RtnDocBtn from '../../components/RtnDocBtn';

function AddDoc() {
  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" className = 'headers'
      >
        <p>DOCTORS</p>
      </div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
              <Input
                // onChange={handleInputChange}
                name="title"
                placeholder="Doctor Name (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Specialty (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Phone Number (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Address (required)"
              />
              <Input
                // onChange={handleInputChange}
                name="author"
                placeholder="Address2 (required)"
              />
              {/* <TextArea
                // onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn>
                Submit Doctor Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <RtnDocBtn />
      <HomeButton />
    </div>
  );
}

export default AddDoc;
