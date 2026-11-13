import React from 'react';
import '../styles/pages.scss';

const NotFoundPage = () => (
  <div className='page'>
    <p className='page-label'>404</p>
    <h1 className='page-title'>Lost the trail.</h1>
    <p className='page-lede'>
      That route doesn&apos;t exist. Head back <a href='/'>home</a> and try
      again.
    </p>
  </div>
);

export default NotFoundPage;
