import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/header.scss';

const headerActiveStyle = {
  textDecoration: 'underline',
  textUnderlinePosition: 'under',
};

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <Navbar bg='transparent'>
      <Navbar.Brand>
        <Link
          to='/'
          style={{
            color: 'black',
            textDecoration: 'none',
            // fontSize: '1rem'
          }}
        >
          AS
        </Link>
      </Navbar.Brand>

      <Nav className='ml-auto'>
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
      </Nav>
    </Navbar>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
