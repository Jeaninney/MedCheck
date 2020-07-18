import React from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';

function Login() {

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>LOGIN</p>
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
                placeholder='password'
                // value={specialty}
                // onChange={onInputChange}
                type='text'
              />
              <FormBtn>
                LOGIN
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size='md-12'>
             Don't Have An Account? 
            <p><a href= "/signup">Click here to sign-up.</a></p> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
