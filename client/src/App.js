import React from 'react';

import Header from './components/Header';

import RegistrationForm from './components/RegistrationForm';

import Login from './components/Login';

import Home from './pages/Home/Home';
import Appointments from './pages/Appointments/Appointments';
import Doctors from './pages/Doctors/Doctors';
import Medications from './pages/Medications/Medications';


import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search/Search';



function App() {
  let logIn = true
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
      <Route exact path = '/Search' component = {Search}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
