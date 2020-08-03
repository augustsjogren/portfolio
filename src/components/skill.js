import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

function Skill(props) {
  function getRowColor() {
    console.log(props.index);

    if (props.index === 0 || props.index % 2 === 0) {
      return 'none';
    }
    return '#f3f3f3';
  }

  const SkillBar = styled.div`
    background-color: #ff8900;
    height: 10px;
    border-radius: 40px;
  `;

  return (
    <Row
      className='skill-container'
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: getRowColor(),
      }}
    >
      <Col xs={4} lg={3} style={{ borderRight: '1px solid #c2c2c2' }}>
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
      <Col>
        <div
          className='skill-bar-container'
          style={{ height: '100%', width: props.skill.value + '%' }}
        >
          <SkillBar value={props.skill.value} />
        </div>
      </Col>
    </Row>
  );
}

export default Skill;
