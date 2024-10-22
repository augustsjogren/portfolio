import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import MainContainer from '../components/layout/mainContainer';
import { usePageTitle } from '../hooks/usePageTitle';

const ContactPage = () => {
  usePageTitle('Contact');

  return (
    <MainContainer>
      <div className='row-md'>
        <div className='col'>
          <h1>Contact</h1>
          <p className='mb-4'>
            Want to get in touch? Feel free to send me an email or message me at
            LinkedIn!
          </p>
        </div>
        <div className='col'>
          <div className='flex__col'>
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
              <li>
                <FaMapMarkerAlt
                  color='black'
                  size='24px'
                  style={{ marginRight: '15px' }}
                />
                <span>Malmö, Sweden</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ContactPage;
