import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

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
            Want to get in touch? Feel free to shoot me an email or contact me
            using any of the other ways listed!
          </p>
        </Col>
        <Col md={true} className='mx-4 mt-4 mt-md-0'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ul style={{ listStyleType: 'none', width: 'fit-content' }}>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
                <a
                  href='https://www.google.se/maps/place/Link%C3%B6ping/@58.4191103,15.419861,9.81z/data=!4m5!3m4!1s0x46596e719a049f95:0x400fef341e48e70!8m2!3d58.410807!4d15.6213727'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='d-flex flex-row align-items-center'>
                    <FaMapMarkerAlt
                      color='black'
                      size='32px'
                      style={{ marginRight: '15px' }}
                    />
                    <span>Linköping, SE</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ContactPage;
