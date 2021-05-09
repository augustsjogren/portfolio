import React from 'react';
import { Link } from 'gatsby';
import '../styles/navbar.scss';

export default function NavBar() {
  const headerActiveStyle = {
    textDecoration: 'underline',
    textUnderlinePosition: 'under',
  };

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
        <Link to='/' className='header-link' activeStyle={headerActiveStyle}>
          Home
        </Link>
        <Link
          to='/about'
          className='header-link'
          activeStyle={headerActiveStyle}
        >
          About
        </Link>
        <Link
          to='/skills'
          activeStyle={headerActiveStyle}
          className='header-link'
        >
          Skills
        </Link>
        <Link
          to='/contact'
          activeStyle={headerActiveStyle}
          className='header-link'
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
