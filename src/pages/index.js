import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
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
          <h1>Hi people</h1>
          <p>
            I'm August, a (mainly) front developer with emphasis on the web.
            Feel free to explore this site to see some stuff I have done.
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

export default IndexPage;