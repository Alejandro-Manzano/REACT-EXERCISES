import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> 
      <Link to="/list">Listado</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
//sin enlace Home para que la pinte la primera