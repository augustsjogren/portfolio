import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Skill(props) {
  function getRowColor() {
    console.log(props.index);

    if (props.index === 0 || props.index % 2 === 0) {
      return 'none';
    }
    return '#f3f3f3';
  }

  return (
    <Row
      className='skill-container'
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: getRowColor(),
      }}
    >
      <Col
        xs={3}
        style={{ borderRight: '1px solid #c2c2c2' }}>
        <div
          style={{
            textAlign: 'right',
            paddingTop: '5px',
            paddingBottom: '5px',
          }}
        >
          <span> {props.skill.name} </span>
        </div>
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
