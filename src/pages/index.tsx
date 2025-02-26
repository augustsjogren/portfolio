import React from 'react';
import '../styles/image.scss';
import profileImage from '../images/Aggebagge_web.webp';
import MainContainer from '../components/layout/mainContainer';

const IndexPage = () => {
  return (
    <MainContainer>
      <title>Home</title>
      <div className='row-md'>
        <div className='col justify-center'>
          <div className='flex__col justify-center'>
            <h1>Hi!</h1>
            <p>
              I&apos;m August, a software developer based in Malmö, Sweden. I
              enjoy writing code, especially for applications that give the user
              a great experience. Simple as that.
            </p>
          </div>
        </div>
        <div className='col'>
          <img alt='' src={profileImage} className='bio-img' />
        </div>
      </div>
    </MainContainer>
  );
};

export default IndexPage;
