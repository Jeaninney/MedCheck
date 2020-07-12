import React, {useEffect} from 'react';
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

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBrwhQAjOpVPCmbfXuL40zK80sKsHhNxfs",
  authDomain: "finalproject-6b9be.firebaseapp.com",
  databaseURL: "https://finalproject-6b9be.firebaseio.com",
  projectId: "finalproject-6b9be",
  storageBucket: "finalproject-6b9be.appspot.com",
  messagingSenderId: "228567799293",
  appId: "1:228567799293:web:a96f0cb5eea3fcc19ef594",
  measurementId: "G-ZCZGEBQH0E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth,
});

function App(props) {

  // const logIn = true;
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;
  console.log(user)

  // useEffect(() => signInWithGoogle(),[signInWithGoogle])  
  return (
    <Router>
      
      <div className="App">
        {/* <Header />
      <RegistrationForm /> */}
        {/* <Login /> */}
        <Switch>
          <p onClick = {signInWithGoogle}>Sign In</p>
          {/* <Route exact path="/" component={Home} /> */}
          {user && <Route exact path="/appointments" component={Appointments} />}
          {user && <Route exact path="/doctors" component={Doctors} />}
          {user && <Route exact path="/medications" component={Medications} />}
          {/* {!user && <Route exact path="/appointments" component={Login} />}
          {!user && <Route exact path="/doctors" component={Login} />}
          {!user && <Route exact path="/medications" component={Login} />} */}
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default createComponentWithAuth(App);
