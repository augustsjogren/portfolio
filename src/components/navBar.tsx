import React from 'react';
import '../styles/navbar.scss';
import { HeaderLink } from './HeaderLink';

export const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-links'>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='about'>About</HeaderLink>
        <HeaderLink to='how-i-work'>How I work</HeaderLink>
        <HeaderLink to='contact'>Contact</HeaderLink>
      </div>
    </div>
  );
};
