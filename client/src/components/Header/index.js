import React from 'react';

function Header({ children }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">{children}</span>
      </div>
    </nav>
  );
}

export default Header;
