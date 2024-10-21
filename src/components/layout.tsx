import React from 'react';
import Header from './header';
import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
