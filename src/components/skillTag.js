import React from 'react';

const SkillTag = props => {
  return (
    <div
      style={{
        margin: '5px',
        display: 'inline-block',
        padding: '15px',
        paddingTop: '10px',
        paddingBottom: '10px',
        border: '2px solid black',
        borderRadius: '50px',
      }}
    >
      {props.content}
    </div>
  );
};

export default SkillTag;
