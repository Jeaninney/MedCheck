import React from 'react';
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Addbutton(props) {
  return (
<button> <a href="/Search" type="button" className="addBtn"> Add </a></button>
  );
}

export default Addbutton;
