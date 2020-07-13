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
import Search from './pages/Search/Search';
import AddMed from './pages/AddMed/AddMed';

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
          <Route exact path="/searchmed" component={Search} />
          <Route exact path="/addmed" component={AddMed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
