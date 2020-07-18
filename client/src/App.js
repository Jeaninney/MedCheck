import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Home from './pages/Home/Home';
import Appointments from './pages/Appointments/Appointments';
import Doctors from './pages/Doctors/Doctors';
import Medications from './pages/Medications/Medications';
import './App.css';
//import SearchMed from './pages/SearchMed/SearchMed';
import AddMed from './pages/AddMed/AddMed';
import AddDoc from './pages/AddDoc/AddDoc';
import AddAppt from './pages/AddAppt/AddAppt';

function App() {
  const logIn = true;
  return (
    <Router>
      <div className="App">
        {/* <Header />
      <RegistrationForm /> */}
        {/* <Login /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {logIn && <Route exact path="/appointments" component={Appointments} />}
          {logIn && <Route exact path="/doctors" component={Doctors} />}
          {logIn && <Route exact path="/medications" component={Medications} />}
          {!logIn && <Route exact path="/appointments" component={Login} />}
          {!logIn && <Route exact path="/doctors" component={Login} />}
          {!logIn && <Route exact path="/medications" component={Login} />}
          {/* <Route exact path="/searchmed" component={SearchMed} /> */}
          <Route exact path="/addmed" component={AddMed} />
          <Route exact path="/adddoc" component={AddDoc} />
          <Route exact path="/addappt" component={AddAppt} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
