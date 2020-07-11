import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Addbutton() {
// function Addbutton(props) {
  return (
    <Link to="/Search"><button type="button" className="addBtn"> Add </button></Link>
  );
}

export default Addbutton;
