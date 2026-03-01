import React from 'react';
import '../styles/skillTag.scss';

const SkillTag = (props: { content: string }) => {
  return <div className='skill-tag'>{props.content}</div>;
};

export default SkillTag;
