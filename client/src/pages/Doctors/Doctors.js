import React from 'react';
import {Link} from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron';
import Footer from '../../components/Footer';
import "./doctors.css";


function Doctors() {
  return (
    <div>
    <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron" id="m2"
  >
    Doctors
  </div>
      <Footer />
    </div>
  );
}

export default Doctors;
