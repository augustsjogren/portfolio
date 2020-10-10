import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
      <Row style={{ flex: '1 auto' }}>
        <Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          md={true}
          className='mx-4'
        >
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
        </Col>
        <Col
          md
          className='d-flex d-md-flex flex-column justify-content-center align-items-center mx-4 mt-4 mt-md-0'
        >
          <Row>
            <Col>
              <FaMapMarkerAlt className='d-none d-md-block' size='120' />
              <FaMapMarkerAlt className='d-block d-md-none' size='80' />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='mt-4' style={{ fontSize: '1.5rem' }}>
                Linköping, SE
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </MainContainer>
  </Layout>
);

export default ContactPage;
