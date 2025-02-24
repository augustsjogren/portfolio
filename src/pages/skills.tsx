import React from 'react';
import MainContainer from '../components/layout/mainContainer';
import SkillTag from '../components/skillTag';
import '../styles/skills.scss';
import { usePageTitle } from '../hooks/usePageTitle';
import { useSkills } from '../hooks/useSkills';

const SkillsPage = () => {
  usePageTitle('Skills');
  const { skills } = useSkills();

  return (
    <MainContainer>
      <div className='row-md'>
        <div className='col'>
          <h1>Skills</h1>
          <p>
            Here&apos;s a mix of my go-to tech skills in no particular order,
            just a collection of things I love working with! I&apos;m always
            eager to try out new tools and technologies because, to me, half the
            fun of coding is learning something new.
          </p>
        </div>
        <div className='col'>
          <div className='flex center skill-list'>
            <div>
              {skills.map((skill, index) => (
                <SkillTag key={index} content={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default SkillsPage;
