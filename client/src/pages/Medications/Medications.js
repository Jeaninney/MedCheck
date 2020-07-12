import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Col, Row } from "../../components/Grid";
import { Link } from 'react-router-dom';
import './medications.css';
//import Addbutton from '../../components/Addbutton';
import Footer from '../../components/Footer';

function Medications() {
  const [meds, setMeds] = useState([])

  useEffect(() => {
    loadMeds()
  }, [])

  function deleteMed(id) {
    API.deleteMeds(id)
      .then(res => loadMeds())
      .catch(err => console.log(err));
  }
  function loadMeds() {
    API.getMeds()
      .then(res =>
        setMeds(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 10, paddingBottom: 10, textAlign: 'center',
        }}
        className="jumbotron"
        id="m1"
      ><p>Medications</p>
      </div>
      <div className="text">
        <div className="medList">
            {meds.length ? (
              meds.map(med => (
                <div className="outer" key={med._id}>
                  <Row >
                    <Col size="md-12">RXCUI: {med.rxcui}</Col>
                  </Row >
                  <Row>
                    <Col size="md-12">
                      <button onClick={() => deleteMed(med._id)} className="btn delete">Delete</button>
                      <button className="btn view">View</button>
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-12">MEDNAME: {med.medname}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">DOSAGE: {med.dosage}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">AM/PM: {med.timetotake}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">PURPOSE: {med.purpose}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">DOCTOR: {med.prescribingdocid}</Col>
                  </Row>
                </div>  
              ))) : (<h4>No Results to Display</h4>)
            }
        </div>
        <div>
        <Row>
        <Col size="md-12">
            <Link to="/search">
              <button type="button" className="addBtn"> Add </button>
            </Link>
          </Col>
        </Row>
      </div>  
      <div>
        <Row>
          <Col size="md-12"><Footer /></Col>
        </Row>
      </div>  
      </div>   
    </div>
  );
}

export default Medications;
