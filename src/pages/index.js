import React from 'react';
import BioImage from '../components/image';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <MainContainer>
      <div className='row-md'>
        <div className='col justify-center'>
          <div className='flex__col justify-center'>
            <h1>Hi!</h1>
            <p>
              I'm August, a software developer based in Linköping, Sweden. I
              enjoy writing code for applications that gives the user a great
              experience. Simple as that.
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

export default IndexPage;
