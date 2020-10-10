import React from 'react';
import { Container } from 'react-bootstrap';

const MainContainer = props => {
  return (
    <Container fluid='xl' className='h-100 d-flex align-items-center'>
      {props.children}
    </Container>
  );
};

export default MainContainer;
