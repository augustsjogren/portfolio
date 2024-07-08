import React from 'react';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SkillTag from '../components/skillTag';
import '../styles/skills.scss';
import { usePageTitle } from '../hooks/usePageTitle';

const skills = [
  'React.js',
  '.NET',
  'Blazor',
  'React Native',
  'JavaScript',
  'HTML',
  'CSS',
  'SQL Server',
];

const skillsList = skills.map((skill, index) => (
  <SkillTag key={index} content={skill} />
));

const SkillsPage = () => {
  usePageTitle('Skills');

  return (
    <Layout>
      <MainContainer>
        <div className='row-md'>
          <div className='col'>
            <h1>Skills</h1>
            <p>
              These are some of my most prominent skills, ranging from high to
              low. However, my skillset is constantly developing as I enjoy
              trying out new technologies and tools.
            </p>
          </div>
          <div className='col'>
            <div className='flex center skill-list'>
              <div>{skillsList}</div>
            </div>
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default SkillsPage;
