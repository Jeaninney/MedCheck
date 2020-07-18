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
			<div className="mt-5">
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
							<div className="form-group form-inline">
            <label className="mr-2" >Email Address</label>
              <Input
                // value={doctorname}
                name='email'
                // onChange={onInputChange}
								type='email'
								placeholder='Email (required)'
              />  
							</div>
							<div className="form-group form-inline">
            <label className="mr-2">Password</label>
              <Input
                name='password'
                placeholder='password'
                // value={specialty}
                // onChange={onInputChange}
								type='text'
              />
							</div>
              <button type="submit" className="btn btn-success">
                Log In
								</button>
								
            </form>
          </Col>
        </Row>
        <Row>
          <Col size='md-12'>
             Don't Have An Account? 
            <p><a href= "/signup" className="clicktosignup">Click here to sign-up.</a></p> 
          </Col>
        </Row>
      </Container>
			</div>
    </div>
  );
}

export default Login;