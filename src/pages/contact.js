import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

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
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <a
                  href='https://www.linkedin.com/in/august-sjogren/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/augustsjogren'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='mailto:contact@augustsjogren.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={true}>
          <Image />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default ContactPage;
