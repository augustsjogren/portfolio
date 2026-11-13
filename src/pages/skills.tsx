import React from 'react';
import '../styles/pages.scss';

const SkillsPage = () => {
  return (
    <div className='page'>
      <title>Skills</title>

      <p className='page-label'>Skills</p>
      <h1 className='page-title'>
        Tools change. <em className='landing-accent'>Fundamentals</em>{' '}
        don&apos;t.
      </h1>
      <p className='page-lede'>
        I&apos;ve stopped keeping a fixed list of technologies. In the age of
        agentic coding, deep tool lists age fast — I stay sharp on the
        fundamentals and pick up whatever the job needs.
      </p>

      <div className='page-footer'>
        <span>© August Sjögren</span>
        <span>Malmö, SE</span>
      </div>
    </div>
  );
};

export default SkillsPage;
