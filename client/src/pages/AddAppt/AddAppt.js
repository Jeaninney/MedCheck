import React, { useState } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import RtnApptBtn from '../../components/RtnApptBtn';
import API from '../../utils/API';

function AddAppt() {
  const [purpose, setPurpose] = useState('');
  const [apptdate, setApptDate] = useState('');
  const [apptstart, setApptStart] = useState('');
  const [apptend, setApptEnd] = useState('');
  const [doctor, setDoctor] = useState('');
  const [notes, setNotes] = useState('');

  let passed = true;

  function validateDate(date)  
  {
    var datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
      if (datePattern.test(date)) { 
          console.log(date)
          let monthfield=date.split("/")[0];
          let dayfield=date.split("/")[1];
          let yearfield=date.split("/")[2];

          switch (parseInt(monthfield)) {
            case 1:
            case 3:
            case 5: 
            case 7: 
            case 8:
            case 10:
            case 12:
              if (parseInt(dayfield) > 0 && (parseInt(dayfield) < 32)) {
                return true;
              } else {
                return false;
              }
              
            case 4:
            case 6:
            case 9: 
            case 11: 
              if (parseInt(dayfield) > 0 && (parseInt(dayfield) < 31)) {
                return true;
              } else {
                return false;
              }

            case 2:
              if (parseInt(yearfield) % 4 === 0) {
                if (parseInt(dayfield) > 0 && (parseInt(dayfield) < 30)) {
                  return true;
                } else {
                  return false;
                }
              } else {
                if (parseInt(dayfield) > 0 && (parseInt(dayfield) < 29)) {
                  return true;
                } else {
                  return false;
                }  
              }

              default:
                return false;  

          }
      }
  }
  
  
  function validateTime(time)  {
    var timePattern = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
      return timePattern.test(time);
  }
          
  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    console.log(e.target);
    // Call fetch books async function
    saveAppts();
  }

  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'purpose') {
      setPurpose(value);
    } else if (name === 'apptdate') {
      setApptDate(value);
    } else if (name === 'apptstart') {
      setApptStart(value);
    } else if (name === 'apptend') {
      setApptEnd(value);
    } else if (name === 'doctor') {
      setDoctor(value);
    } else if (name === 'notes') {
      setNotes(value);
    }
  }

  function saveAppts() {

    passed = true;
    
    if (!purpose) {
      passed = false;
      alert('Purpose Required');
    } else if (!apptdate) {
      passed = false;
      alert(`Appointment Date Required`);
    } else if (!apptstart) {
      passed = false;
      alert('Start Time Required');
    }
    
    if (!validateDate(apptdate)) {
      console.log(passed);
      alert('Date is invalid.  Please correct!!!');
      passed = false;
    }

    if (!validateTime(apptstart)) {
      passed = false;
      alert('Starting time is invalid.  Please correct!!!');
    }

    if (apptend) {
      if (!validateTime(apptend)) {
        passed = false;
        alert('End time is invalid.  Please correct!!!');
      }
    }

    if (passed) {
      API.saveAppts({
        purpose: purpose,
        apptdate: apptdate,
        apptstart: apptstart,
        apptend: apptend,
        doctor: doctor,
        notes: notes
      })
        .then(results => {
          //console.log(results);
          setPurpose('');
          setApptDate('');
          setApptStart('');
          setApptEnd('');
          setDoctor('');
          setNotes('');
          passed = true;
        })
        // .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <div
        style={{
          height: '20%', clear: 'both', paddingTop: 20, paddingBottom: 20, textAlign: 'center',
        }}
        id="m3" >
        <p>APPOINTMENTS</p>
      </div>
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
              <label>Purpose</label>
              <Input
                value={purpose}
                name='purpose'
                onChange={onInputChange}
                type='text'
                placeholder='Purpose for appointment'
              />
              <label>Date</label>
              <Input
                name='apptdate'
                placeholder='MM/DD/YYYY'
                value={apptdate}
                onChange={onInputChange}
                type='text'
              />
              <label>Start Time</label>
              <Input
                name='apptstart'
                placeholder='HH:MM'
                value={apptstart}
                onChange={onInputChange}
                type='text'
              />
              <label>End Time</label>
              <Input
                name='apptend'
                placeholder='End Time'
                value={apptend}
                onChange={onInputChange}
                type='text'
              />
              <label>Doctor Name</label>
              <Input
                name='doctor'
                placeholder='Doctor Name'
                value={doctor}
                onChange={onInputChange}
                type='text'
              />
              <label>Notes</label>
              <Input
                name='notes'
                placeholder='Add Notes'
                value={notes}
                onChange={onInputChange}
                type='text'
              />
              <FormBtn className='btn-appt' onClick={onSubmitHandler}>
                Submit Appointment Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col size="md-12">
          <RtnApptBtn />
          <HomeButton />
        </Col>
      </Row>
    </div>
    );
}  

export default AddAppt;
