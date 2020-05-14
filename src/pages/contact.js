import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => (
  <Layout>
    <SEO title='Contact' />
    <Container
      style={{ height: '100%', display: 'flex', alignItems: 'center' }}
    >
      <Row style={{ flex: '1 auto' }}>
        <Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
          }}
          md={true}
        >
          <h1>Contact</h1>
          <p>Feel free to contact me using any of the ways listed below.</p>

        </Col>
        <Col md={true}>
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <ul style={{ listStyleType: 'none', width: 'fit-content' }}>
              <li>
                <a href='https://www.linkedin.com/in/august-sjogren/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='d-flex flex-row align-items-center' >
                    <FaLinkedin color='black' size='32px' style={{ marginRight: '15px' }} />
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
                  <div className='d-flex flex-row align-items-center' >
                    <FaGithub color='black' size='32px' style={{ marginRight: '15px' }} />
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
                  <div className='d-flex flex-row align-items-center' >
                    <FaEnvelope color='black' size='32px' style={{ marginRight: '15px' }} />
                    <span>Email</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout >
);

export default ContactPage;
