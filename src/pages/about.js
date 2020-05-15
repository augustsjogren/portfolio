import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => (
  <Layout>
    <SEO title='Home' />
    <Container fluid='xl'
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
          <h1>About</h1>
          <p>
            While mainly focused on the web, I also enjoy developing mobile
            applications in React Native. In my spare time I like to spend my
            time on other creative hobbies, such as producing music and playing
            the guitar.
          </p>
        </Col>
        <Col md={true} className='mx-4'>
          <Image />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutPage;
