import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import { Col, Row } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import AddDocBtn from '../../components/AddDocBtn';

function AddressLine2(props) {
  if (!props.addressTwo) {
    return null;
  }

  return (
    <Row>
      <Col size="md-12">ADDRESS LINE 2: {props.addressTwo} </Col >
    </Row> 
  );
}

function Doctors() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    loadDocs()
  }, [])

  function deleteDoc(id) {
    API.deleteDocs(id)
      .then(res => loadDocs())
      .catch(err => console.log(err));
  }
  function loadDocs() {
    API.getDocs()
      .then(res =>
        setDocs(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m2" >
        <p>DOCTORS</p>
      </div>
      <div className="text">
        <div className="medList">
            {docs.length ? (
              docs.map(doc => (
                <div className="outer border border-info rounded" key={doc._id}>
                  <Row>
                    <Col size="md-12">
                      <button onClick={() => deleteDoc(doc._id)} className="btn delete btn-danger">Delete</button>
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-12">DOCTOR: {doc.name}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">PHONE: {doc.phone}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">ADDRESS LINE 1: {doc.address}</Col>
                  </Row>
                  <AddressLine2 addressTwo={doc.address2} />
                  <Row>
                    <Col size="md-12" >CITY: {doc.city}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12" >STATE: {doc.state}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12" >ZIP CODE: {doc.zipcode}</Col>
                  </Row>
                  <Row>
                    <Col size="md-12">SPECIALTY: {doc.specialty ? doc.specialty : 'N/A'}</Col>
                  </Row>
                </div>  
              ))) : (<h4>No Results to Display</h4>)
            }
        </div>
      <div>
        <Row>
        <Col size="md-12">
         <AddDocBtn />
          </Col>
        </Row>
      </div>   
      <div>
        <Row>
          <Col size="md-12"><HomeButton /></Col>
        </Row>
      </div>  
      </div>   
    </div>
  );
}

export default Doctors;
