import React from 'react';
import { BsCodeSlash, BsMusicNoteBeamed } from 'react-icons/bs';
import { RiRunLine } from 'react-icons/ri';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import '../styles/about.scss';

const AboutPage = () => (
  <Layout>
    <MainContainer>
      <div className='row-md'>
        <div className='col'>
          <h1>About</h1>
          <p>
            As a developer I&apos;m mainly focused on the web, where I gravitate
            towards front end. I also enjoy creating mobile applications in
            React Native, where I can utilize my web development skills. Outside
            of work I like to spend my time on other creative hobbies, such as
            producing music or fiddling with some new cool tech. Exercise is
            also an important part of my everyday life, and I like to try out
            new activities and sports.
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
  </Layout>
);

export default AboutPage;
