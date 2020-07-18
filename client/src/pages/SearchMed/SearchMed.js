import React, { useState } from 'react';
import { Col, Row } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import HomeButton from '../../components/HomeButton';
import axios from 'axios';
//import API from '../../utils/API';

function SearchMed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [rxnormId, setRxNormId] = useState('');
  const [drugs, setDrugs] = useState([]);

  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'searchTerm') { 
      setSearchTerm(value);
    }
  }  

  const onSubmitHandler = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    getDrugData(searchTerm);
    
  }  

  function getDrugData(searchTerm) 
  {
    axios.get('https://rxnav.nlm.nih.gov/REST/rxcui?name='+searchTerm)
        .then(res => {
          //console.log(res.data);
          setRxNormId(res.data.idGroup.rxnormId);
          //console.log(rxnormId);
          axios.get('https://rxnav.nlm.nih.gov/REST/rxcui?name='+searchTerm)
          .then(res => {
          //console.log(res.data);
          setRxNormId(res.data.idGroup.rxnormId);
          //console.log(rxnormId);
          })
          .catch((err) => {
            console.log(err);
          })
        })
        .catch((err) => {
          console.log(err);
        });
  }    

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
      <label>Medication Name</label>
        <Input
          name='searchTerm'
          type='text'
          placeholder='insert name of medication'
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <div className='text'>
          <Row>
            <Col size='md-12'>
              <FormBtn type='submit' className='searchBtn'>Search</FormBtn>
           </Col>
          </Row>
        </div>  
      </form>
      <div>Information Displayed Here</div>
      <div><HomeButton /></div>
    </div>
    );
  }  

export default SearchMed;
