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
          {logIn && <Route exact path="/Appointments" component={Appointments} />}
          {logIn && <Route exact path="/Doctors" component={Doctors} />}
          {logIn && <Route exact path="/Medications" component={Medications} />}
          {!logIn && <Route exact path="/Appointments" component={Login} />}
          {!logIn && <Route exact path="/Doctors" component={Login} />}
          {!logIn && <Route exact path="/Medications" component={Login} />}
          <Route exact path="/Search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
