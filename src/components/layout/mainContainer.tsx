import React, { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren) => {
  return <div className='main-container align-center'>{children}</div>;
};

export default MainContainer;
