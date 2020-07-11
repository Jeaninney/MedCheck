import React from 'react';
import {Link} from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron';
import Footer from '../../components/Footer';
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import "./doctors.css";


function Doctors() {
  return (
    <div>
    <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron" id="m2"
  >
     <p>Doctors</p>
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
              {/* <TextArea
                // onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                // onClick={handleFormSubmit}
              >
                Submit Doctor Info
              </FormBtn>
      </form>
      </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Doctors;
