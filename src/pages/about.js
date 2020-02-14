import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => (
  <Layout>
    <SEO title='Home' />
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
          <h1>About</h1>
          <p>
            While mainly focused on the web, I also enjoy developing mobile
            applications in React Native. In my spare time I like to spend my
            time on other creative hobbies, such as producing music and playing
            the guitar.
          </p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        </Col>
        <Col md={true}>
          <Image />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutPage;
