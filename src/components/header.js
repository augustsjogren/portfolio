import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
          }}
        >
          {siteTitle}
        </Link>
      </Navbar.Brand>

      <Nav className='ml-auto'>
        <Link
          to='/'
          style={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          Explore
        </Link>
        <Link
          to='/about'
          style={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          About
        </Link>
        <Link
          to='/skills'
          style={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          Skills
        </Link>
        <Link
          to='/'
          style={{
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
          }}
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
