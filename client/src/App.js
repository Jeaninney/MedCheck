import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import SignupLoginModal from './components/SignupLoginModal';
import Home from './pages/Home/Home';
import Appointments from './pages/Appointments/Appointments';
import Doctors from './pages/Doctors/Doctors';
import Medications from './pages/Medications/Medications';
import './App.css';
import Search from './pages/Search/Search';
import AddMed from './pages/AddMed/AddMed';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const logIn = false;
  return (
		<>
		<Router>
		<SignupLoginModal props={} />
    
      <div className="App">
        {/* <Header /> */}
      {/* <RegistrationForm /> */}
        {/* <Login /> */}
        <Switch>
          <Route  />
					{logIn && <Route exact path="/" component={Home} />}
          {logIn && <Route exact path="/appointments" component={Appointments} />}
          {logIn && <Route exact path="/doctors" component={Doctors} />}
          {logIn && <Route exact path="/medications" component={Medications} />}
					{/* {!logIn && <Route exact path="/" component={Login} />}
          {!logIn && <Route exact path="/appointments" component={Login} />}
          {!logIn && <Route exact path="/doctors" component={Login} />}
          {!logIn && <Route exact path="/medications" component={Login} />} */}
          <Route exact path="/searchmed" component={Search} />
          <Route exact path="/addmed" component={AddMed} />
        </Switch>
      </div>
    </Router>
		</>
  );
}

export default App;
