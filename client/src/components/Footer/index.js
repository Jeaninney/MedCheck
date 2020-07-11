import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/"><button type="button" className="home"> HOME </button></Link>
    </footer>
  );
}

export default Footer;
