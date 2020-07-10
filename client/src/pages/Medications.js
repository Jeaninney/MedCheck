import React from 'react';
import {Link} from 'react-router-dom';


function Medications() {
  return (
    <div>
      Medications
      <Link to = '/'><button type="button" className="home"> Home </button></Link>
    </div>
  );
}

export default Medications;
