import React, { CSSProperties } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import MainContainer from '../components/layout/mainContainer';
import { IconListItem } from '../components/IconListItem';

const iconStyle: CSSProperties = {
  marginRight: '15px',
  height: '24px',
  width: '24px',
  color: 'black',
};

const ContactPage = () => {
  return (
    <MainContainer>
      <title>Contact</title>
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
              <IconListItem
                href='mailto:hello@augustsjogren.com'
                text='hello@augustsjogren.com'
                icon={<FaEnvelope style={iconStyle} />}
              />
              <IconListItem
                href='https://www.linkedin.com/in/august-sjogren'
                text='linkedin.com/in/august-sjogren'
                icon={<FaLinkedin style={iconStyle} />}
              />
              <IconListItem
                href='https://github.com/augustsjogren'
                text='github.com/augustsjogren'
                icon={<FaGithub style={iconStyle} />}
              />
              <IconListItem
                text='Malmö, Sweden'
                icon={<FaMapMarkerAlt style={iconStyle} />}
              />
            </ul>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ContactPage;
