import React from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';

function SignUp() {

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>SIGN-UP</p>
      </div>
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
            <label>Email Address</label>
              <Input
                // value={doctorname}
                name='email'
                // onChange={onInputChange}
                type='text'
                placeholder='Email (required)'
              />  
            <label>Password</label>
              <Input
                name='password'
                placeholder='password (required)'
                // value={specialty}
                // onChange={onInputChange}
                type='text'
              />
              <FormBtn>
                Create Account
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
