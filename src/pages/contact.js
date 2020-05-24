import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { GiMailbox } from 'react-icons/gi';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <Container
      fluid='xl'
      style={{ height: '100%', display: 'flex', alignItems: 'center' }}
    >
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
          <p>
            Want to get in touch? Feel free to send me an email or contact me
            using any of the other ways listed!
          </p>
          <div>
            <Row className='mt-2'>
              <Col md className='my-md-0 my-2'>
                <a
                  href='mailto:contact@augustsjogren.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='d-flex flex-row align-items-center'>
                    <FaEnvelope
                      color='black'
                      size='32px'
                      style={{ marginRight: '15px' }}
                    />
                    <span>Email</span>
                  </div>
                </a>
              </Col>
              <Col md className='my-md-0 my-2'>
                <a
                  href='https://www.linkedin.com/in/august-sjogren/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='d-flex flex-row align-items-center'>
                    <FaLinkedin
                      color='black'
                      size='32px'
                      style={{ marginRight: '15px' }}
                    />
                    <span>LinkedIn</span>
                  </div>
                </a>
              </Col>
              <Col md className='my-md-0 my-2'>
                <a
                  href='https://github.com/augustsjogren'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='d-flex flex-row align-items-center'>
                    <FaGithub
                      color='black'
                      size='32px'
                      style={{ marginRight: '15px' }}
                    />
                    <span>GitHub</span>
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          md={true}
          className=' d-flex justify-content-center align-items-center mx-4 mt-4 mt-md-0'
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <GiMailbox size={128} />
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ContactPage;
