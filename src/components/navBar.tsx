import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-brand'>
        <Link
          to='/'
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          AS
        </Link>
      </div>

      <div className='navbar-links'>
        <Link to='/' className='header-link'>
          Home
        </Link>
        <Link to='/about' className='header-link'>
          About
        </Link>
        <Link to='/skills' className='header-link'>
          Skills
        </Link>
        <Link to='/contact' className='header-link'>
          Contact
        </Link>
      </div>
    </div>
  );
}
