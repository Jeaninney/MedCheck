import React from 'react';
import {Link} from 'react-router-dom';


function Appointments() {
  return (
    <div>
      Appointments
      <Link to = '/'><button type="button" className="home"> Home </button></Link>
    </div>
  );
}

export default Appointments;
