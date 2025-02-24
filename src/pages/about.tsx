import React from 'react';
import { BsCodeSlash, BsMusicNoteBeamed } from 'react-icons/bs';
import { RiRunLine } from 'react-icons/ri';
import MainContainer from '../components/layout/mainContainer';
import '../styles/about.scss';
import { usePageTitle } from '../hooks/usePageTitle';

const AboutPage = () => {
  usePageTitle('About');

  return (
    <MainContainer>
      <div className='row-md'>
        <div className='col'>
          <h1>About</h1>
          <p>
            I&apos;m a web-focused developer with a passion for solving the full
            problem, whether that means working on the front end, back end, or
            anything in between. I don&apos;t get too caught up in specific
            tools as I enjoy adapting to whatever best fits the task at hand.
          </p>
          <p>
            Beyond coding, I&apos;m always exploring creative outlets, whether
            it&apos;s producing music, experimenting with tech, or diving into a
            new sport. Staying active is a big part of my daily routine, and I
            love the challenge of trying out different activities.
          </p>
        </div>
        <div className='col'>
          <div className='flex__col justify-center'>
            <div className='row justify-center icon-row'>
              <BsCodeSlash size='32' color='black' />
              <BsMusicNoteBeamed size='32' color='black' />
              <RiRunLine size='32' color='black' />
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AboutPage;
