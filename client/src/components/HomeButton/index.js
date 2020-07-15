import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function HomeButton() {
// function Addbutton(props) {
  return (
    <Link to="/"><button type="button" className="homeBtn"> HOME </button></Link>
  );
}

export default HomeButton;
