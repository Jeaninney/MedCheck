import React, { useState } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import './addmed.css';
import HomeButton from '../../components/HomeButton';
import API from '../../utils/API';

function AddMedForm() {
  const [medName, setMedName] = useState('');
  const [dosage, setDosage] = useState('');
  const [timeToTake, setTime] = useState('');
  const [purpose, setPurpose] = useState('');
  const [prescribingDoc, setDoctor] = useState('');

  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    console.log(e.target);
    // Call fetch books async function
    saveMeds();
  }

  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'medname') { 
      setMedName(value)
    } else if (name === 'dosage') {
      setDosage(value);
    } else if (name === 'timetotake') {
      setTime(value);
    } else if (name === 'purpose') {
      setPurpose(value);
    } else if (name === 'prescribingdoc') {
      setDoctor(value);
    }
  }

  function saveMeds() {
    // event.preventDefault();
    // console.log();
    API.saveMeds({
      rxcui: '99',
      medname: medName,
      dosage: dosage,
      timetotake: timeToTake,
      purpose: purpose, 
      prescribingdoc: prescribingDoc
    })
    .then(results => {
      //console.log(results);
      setMedName('');
      setDosage('');
      setTime('');
      setPurpose('');
      setDoctor('');
    })
      // .then(res => loadBooks())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          height: 300, clear: 'both', paddingTop: 120, textAlign: 'center',
        }}
        className="jumbotron"
        id="m2"
      >
        <p>Add Medication</p>
      </div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
            <label>Medication Name</label>
              <Input
                value={medName}
                name='medname'
                onChange={onInputChange}
                type='text'
                placeholder='Medication Name (required)'
              />
               <label>Enter Dosage</label>
              <Input
                value={dosage}
                name='dosage'
                onChange={onInputChange}
                type='text'
                placeholder='Add Dosage (required)'        
              />
              <label>Time To Take (AM/PM)</label>
              <Input
                value={timeToTake}
                name='timetotake'
                onChange={onInputChange}
                type='text'
                placeholder='AM/PM (required)'
              />
              <label>Reason For Taking Medication</label>
              <Input
                value={purpose}
                name='purpose'
                onChange={onInputChange}
                type='text'
                placeholder='Medication Purpose (required)'
              />
               <label>Prescribing Doctor</label>
              <Input
                value={prescribingDoc}
                name='prescribingdoc'
                onChange={onInputChange}
                type='text'
                placeholder='Prescribing Doctor'
              />
              <FormBtn onClick={onSubmitHandler}>Submit Medication Info</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <HomeButton />
    </div>
  );
}


export default AddMedForm;