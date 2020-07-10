import React from 'react';
import {Link} from 'react-router-dom';


function Doctors() {
  return (
    <div>
      Doctors
      <Link to = '/'><button type="button" className="home"> Home </button></Link>
    </div>
  );
}

export default Doctors;
