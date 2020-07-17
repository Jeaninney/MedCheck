import React, { useState } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Col, Row, Container } from '../../components/Grid';
import HomeButton from '../../components/HomeButton';
import RtnDocBtn from '../../components/RtnDocBtn';
import API from '../../utils/API';
import './adddoc.css';

function AddDoc() {
  const [doctorname, setDoctor] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [addressone, setAddressOne] = useState('');
  const [addresstwo, setAddressTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipCode] = useState('');

  let passed = true;

  const onSubmitHandler = (e) => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    console.log(e.target);
    // Call fetch books async function
    saveDocs();
  }

  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'doctorname') { 
      setDoctor(value);
    } else if (name === 'specialty') {
      setSpecialty(value);
    } else if (name === 'phonenumber') {
      setPhone(value);
    } else if (name === 'addressone') {
      setAddressOne(value);
    } else if (name === 'addresstwo') {
      setAddressTwo(value);  
    } else if (name === 'city') {
      setCity(value);  
    } else if (name === 'state') {
      setState(value);    
    }else if (name === 'zipcode') {
      setZipCode(value);
    }
  }

  function saveDocs() {
    if (!doctorname) {
      passed = false;
      alert(`Doctor's Name Required`);
    } else if (!phonenumber) {
        passed = false;
        alert('Phone Number Required');  
    } else if (!addressone) {
      passed = false;
      alert('Address Line One Required');
    } else if (!city) {
      passed = false;
      alert('City Required');
    } else if (!state) {
      passed = false;
      alert('State Required');
    } else if (!zipcode) {
      passed = false;
      alert('Zip Code Required');
    }

    if (passed) {
      API.saveDocs({
        name: doctorname,
        phone: phonenumber,
        address: addressone,
        address2: addresstwo,
        city: city,
        state: state,
        zipcode: zipcode,
        specialty: specialty
      })
      .then(results => {
        //console.log(results);
        setDoctor('');
        setSpecialty('');
        setPhone('');
        setAddressOne('');
        setAddressTwo('');
        setCity('');
        setState('');
        setZipCode('');
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
        <p>DOCTORS</p>
      </div>
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <form>
            <label>Doctor Name</label>
              <Input
                value={doctorname}
                name='doctorname'
                onChange={onInputChange}
                type='text'
                placeholder='Doctor Name (required)'
              />  
            <label>Specialty</label>
              <Input
                name='specialty'
                placeholder='Specialty'
                value={specialty}
                onChange={onInputChange}
                type='text'
              />
             <label>Phone Number</label>
              <Input
                name='phonenumber'
                placeholder='Phone w/Area Code'
                value={phonenumber}
                onChange={onInputChange}
                type='text'
              />
              <label>Address Line One</label>
              <Input
                name='addressone'
                placeholder='Address Line One'
                value={addressone}
                onChange={onInputChange}
                type='text'
              />
              <label>Address Line Two</label>
              <Input
                name='addresstwo'
                placeholder='Address Line Two'
                value={addresstwo}
                onChange={onInputChange}
                type='text'
              />
              <label>City</label>
              <Input
                name='city'
                placeholder='City (Required)'
                value={city}
                onChange={onInputChange}
                type='text'
              />
              <label>State</label>
              <Input
                name='state'
                placeholder='State (Required)'
                value={state}
                onChange={onInputChange}
                type='text' 
              />
              <label>Zip Code</label>
              <Input
                name='zipcode'
                placeholder='Zip Code (Required)'
                value={zipcode}
                onChange={onInputChange}
                type='text' 
              />
              <FormBtn onClick={onSubmitHandler}>
                Submit Doctor Info
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <RtnDocBtn />
      <HomeButton />
    </div>
  );
}

export default AddDoc;
