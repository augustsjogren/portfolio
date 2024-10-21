import React from 'react';
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';
import { HeaderLink } from './HeaderLink';

export const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-brand'>
        <Link to='/' className='header-link'>
          AS
        </Link>
      </div>

      <div className='navbar-links'>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='about'>About</HeaderLink>
        <HeaderLink to='skills'>Skills</HeaderLink>
        <HeaderLink to='contact'>Contact</HeaderLink>
      </div>
    </div>
  );
};
