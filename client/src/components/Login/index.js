import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

function LoginForm(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [id]: value,
  //   }));
  // };

  // const handleSubmitClick = (e) => {
  //   e.preventDefault();
  //   if(state.password === state.confirmPassword) {
  //       sendDetailsToServer()
  //   } else {
  //       props.showError('Passwords do not match');
  //   }
  // }
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
			<Header>Log In</Header>
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            // onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          // onClick={handleSubmitClick}
        >
          Log In
        </button>
      </form><br /><br />
			Don't have an account? 
			<Link to="./registrationForm"><button type="button" className="btn btn-primary"> Click here to create an account </button></Link>
    </div>
  );
}

export default LoginForm;