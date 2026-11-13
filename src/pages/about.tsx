import React from 'react';
import '../styles/pages.scss';

const AboutPage = () => {
  return (
    <div className='page'>
      <title>About</title>

      <p className='page-label'>About</p>
      <h1 className='page-title'>
        Code by day, <em className='landing-accent'>everything&nbsp;else</em> by
        night.
      </h1>
      <div className='page-body'>
        <p>
          I&apos;m a web-focused developer with a passion for solving the full
          problem, whether that means working on the front end, back end, or
          anything in between. I don&apos;t get too caught up in specific tools
          as I enjoy adapting to whatever best fits the task at hand.
        </p>
        <p>
          Beyond coding, I&apos;m always exploring creative outlets, whether
          it&apos;s producing music, experimenting with tech, or diving into a
          new sport. Staying active is a big part of my daily routine, and I
          love the challenge of trying out different activities.
        </p>
      </div>

      <div className='page-footer'>
        <span>© August Sjögren</span>
        <span>Malmö, SE</span>
      </div>
    </div>
  );
};

export default AboutPage;
