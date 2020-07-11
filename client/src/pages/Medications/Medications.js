import React from 'react';
import {Link} from 'react-router-dom';
import "./medications.css"
import Addbutton from '../../components/Addbutton';
import Footer from '../../components/Footer';




function Medications() {
  return (
    <div>
    <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron" id="m1"
  >
    <p>Medications</p>
  </div>
  <div>
    <Addbutton />
  </div>
      <Footer />
    </div>
  );
}

export default Medications;
