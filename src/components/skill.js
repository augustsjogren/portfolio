import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Skill(props) {
  return (
    <Row
      className='skill-container'
      style={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}
    >
      <Col md={4} style={{ textAlign: 'right' }}>
        <span> {props.skill.name}: </span>
      </Col>
      <Col className='skill-bar-container' style={{ height: '100%' }}>
        <div
          className='skill-bar'
          style={{
            width: props.skill.value + '%',
            backgroundColor: '#FF8900',
            height: '10px',
            borderRadius: '40px',
          }}
        >
          {' '}
        </div>
      </Col>
    </Row>
  );
}

export default Skill;
