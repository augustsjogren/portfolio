import React from 'react';
import '../../styles/layout.scss';

const MainContainer = props => {
  return <div className='main-container align-center'>{props.children}</div>;
};

export default MainContainer;
