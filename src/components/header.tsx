import React from 'react';
import '../styles/header.scss';
import { NavBar } from './navBar';

const Header = () => (
  <header
    style={{
      background: `white`,
    }}
  >
    <NavBar />
  </header>
);

export default Header;
