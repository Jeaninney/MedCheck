import React, { useState } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import RtnApptBtn from '../../components/RtnApptBtn';
import API from '../../utils/API';
import { Toast } from 'react-bootstrap';

function AddAppt() {
  const [purpose, setPurpose] = useState('');
  const [apptdate, setApptDate] = useState('');
  const [apptstart, setApptStart] = useState('');
  const [apptend, setApptEnd] = useState('');
  const [doctor, setDoctor] = useState('');
  const [notes, setNotes] = useState('');

  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');
  const toggleShowToast = () => setShowToast(!showToast);


  let passed = true;

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
    if (!purpose) {
      passed = false;
      setToastText('Purpose Required');
      toggleShowToast();
    } else if (!apptdate) {
      passed = false;
      setToastText(`Appointment Date Required`);
      toggleShowToast();
    } else if (!apptstart) {
      passed = false;
      setToastText('Start Time Required');
      toggleShowToast();
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
        id="m2" >
        <p>APPOINTMENTS</p>
      </div>

      <Toast style={{ backgroundColor: 'red' }} show={showToast} onClose={toggleShowToast}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                  />
                  <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{toastText}</Toast.Body>
              </Toast>
              
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
                placeholder='MM-DD-YYYY'
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

              <FormBtn onClick={onSubmitHandler}>
                Submit Appointment Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <RtnApptBtn />
      <HomeButton />
    </div>
  );
}

export default AddAppt;
