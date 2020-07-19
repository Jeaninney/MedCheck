import React, { useState } from 'react';
import { Input } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import API from '../../utils/API';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let passed = true;
	
	const submitHandler = (e) => {
		// Prevent browser refreshing after form submission
		e.preventDefault();
		// console.log(e.target);
		// Call fetch books async function
		submitLogin();
	}

	const onInputChange = (event) => {
    const value = event.target.value;
		const name = event.target.name;
		
    if (name === 'email') { 
			console.log(value);
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
		} 
		
  }
	
	function submitLogin() {
		if (!email) {
			passed = false;
			alert("Please enter your email address");
		} else if (!password) {
			passed = false;
			alert("Please enter your password");
		}
		if (passed) {
			console.log(email);
			API.getLogin({
				email: email,
				password: password
			})
			.then(results =>{
				console.log(results);
				if (results.config.password === password){
					alert("matches!!");
				}
				alert("Logged in " + results.config.password);

			})
			.catch(err => console.log(err));
		}
	
	}

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
                value={email}
                name='email'
                onChange={onInputChange}
								type='email'
								placeholder='Email (required)'
              />  
							</div>
							<div className="form-group form-inline">
            <label className="mr-2">Password</label>
              <Input
                name='password'
                placeholder='password'
                value={password}
                onChange={onInputChange}
								type='text'
              />
							</div>
							<button 
								type="submit" 
								className="btn btn-success"
								onClick={submitHandler}>
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