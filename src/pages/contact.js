import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <MainContainer>
      <div className='row-md'>
        <div className='col'>
          <h1>Contact</h1>
          <p className='mb-4'>
            Want to get in touch? Feel free to send me an email or message me at
            LinkedIn!
          </p>
          <p className='mb-2'>
            <a
              href='mailto:contact@augustsjogren.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FaEnvelope
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />
              </span>
              <span>contact@augustsjogren.com</span>
            </a>
          </p>
          <p className='mb-2'>
            <a
              href='https://www.linkedin.com/in/august-sjogren'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FaLinkedin
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />
              </span>
              <span>linkedin.com/in/august-sjogren</span>
            </a>
          </p>
          <p>
            <a
              href='https://github.com/augustsjogren'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FaGithub
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />
              </span>
              <span>github.com/augustsjogren</span>
            </a>
          </p>
        </div>
        <div className='col'>
          <div className='flex__col center'>
            <FaMapMarkerAlt size='80' />
            <p
              style={{
                fontSize: '1.5rem',
                textAlign: 'center',
                marginTop: '2rem',
              }}
            >
              Linköping, SE
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  </Layout>
);

export default ContactPage;
