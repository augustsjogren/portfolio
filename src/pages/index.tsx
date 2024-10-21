import React from 'react';
import BioImage from '../components/image';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import { usePageTitle } from '../hooks/usePageTitle';

const IndexPage = () => {
  usePageTitle('Home');

  return (
    <Layout>
      <MainContainer>
        <div className='row-md'>
          <div className='col justify-center'>
            <div className='flex__col justify-center'>
              <h1>Hi!</h1>
              <p>
                I&apos;m August, a software developer based in Malmö, Sweden. I
                enjoy writing code, especially for applications that give the
                user a great experience. Simple as that.
              </p>
            </div>
          </div>
          <div className='col'>
            <BioImage />
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
