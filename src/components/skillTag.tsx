import React from 'react';

const SkillTag = (props: { content: string }) => {
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
        color: '#000000',
      }}
    >
      {props.content}
    </div>
  );
};

export default SkillTag;
