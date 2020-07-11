import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';

import RegistrationForm from './components/RegistrationForm';

import Login from './components/Login';

import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Doctors from './pages/Doctors';
import Medications from './pages/Medications';


import './App.css';





function App() {
  let logIn = false
  return (
    <Router>
    <div className="App">
      {/* <Header />
      <RegistrationForm /> */}
      {/* <Login /> */}
      <Switch>
      <Route exact path = '/' component = {Home}></Route>
      {logIn &&<Route exact path = '/Appointments' component = {Appointments}></Route>}
      {logIn &&<Route exact path = '/Doctors' component = {Doctors}></Route>}
      {logIn &&<Route exact path = '/Medications' component = {Medications}></Route>}
      {!logIn &&<Route exact path = '/Appointments' component = {Login}></Route>}
      {!logIn &&<Route exact path = '/Doctors' component = {Login}></Route>}
      {!logIn &&<Route exact path = '/Medications' component = {Login}></Route>}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
