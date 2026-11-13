import React from 'react';
import SkillTag from '../components/skillTag';
import '../styles/pages.scss';
import '../styles/skills.scss';
import { useSkills } from '../hooks/useSkills';

const SkillsPage = () => {
  const { skills } = useSkills();

  return (
    <div className='page'>
      <title>Skills</title>

      <p className='page-label'>Skills</p>
      <h1 className='page-title'>Tools I reach for.</h1>
      <p className='page-lede'>
        A mix of my go-to tech, in no particular order. I&apos;m always eager to
        try new tools — half the fun of coding is learning something new.
      </p>

      <div className='flex justify-center skill-list'>
        <div>
          {skills.map((skill, index) => (
            <SkillTag key={index} content={skill} />
          ))}
        </div>
      </div>

      <div className='page-footer'>
        <span>© August Sjögren</span>
        <span>Malmö, SE</span>
      </div>
    </div>
  );
};

export default SkillsPage;
