import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';

const ContactPage = () => (
  <Layout>
    <MainContainer>
      <div className='row-md'>
        <div className='col'>
          <h1>Contact</h1>
          <p className='mb-4'>
            Want to get in touch? Feel free to send me an email or message me at
            LinkedIn!
          </p>
          <ul>
            <li>
              <a
                href='mailto:hello@augustsjogren.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaEnvelope
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />
                <span>hello@augustsjogren.com</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/august-sjogren'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />

                <span>linkedin.com/in/august-sjogren</span>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/augustsjogren'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />
                <span>github.com/augustsjogren</span>
              </a>
            </li>
          </ul>
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
              Helsingborg, SE
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  </Layout>
);

export default ContactPage;
