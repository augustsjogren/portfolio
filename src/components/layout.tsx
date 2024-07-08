import PropTypes from 'prop-types';
import React, { PropsWithChildren } from 'react';
import Header from './header';
import './layout.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
