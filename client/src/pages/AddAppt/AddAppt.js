import React, { useState } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import API from '../../utils/API';
import RtnApptBtn from '../../components/RtnAptBtn';


function AddAppt() {

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>APPOINTMENTS</p>
      </div>
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
            <label>Purpose</label>
              <Input
                value=''
                name='Purpose'
                // onChange={}
                type='text'
                placeholder='Purpose for appointment'
              />  
            <label>Date</label>
              <Input
                name='Date'
                placeholder='MM-DD-YY'
                // value={}
                // onChange={}
                type='text'
              />
             <label>Start Time</label>
              <Input
                name='Start'
                placeholder='HH:MM'
                // value={}
                // onChange={}
                type='text'
              />
             <label>End Time</label>
              <Input
                name='End'
                placeholder='End Time'
                // value={}
                // onChange={}
                type='text'
              />
              <label>Doctor Name</label>
              <Input
                name='Name'
                placeholder='Doctor Name'
                // value={}
                // onChange={}
                type='text'
              />
              <label>Notes</label>
              <Input
                name='Notes'
                placeholder='Add Notes'
                // value={}
                // onChange={}
                type='text'
              />
              <FormBtn>
                Submit Appointment Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <RtnApptBtn />
      <HomeButton />
    </div>
  );
}

export default AddAppt;
