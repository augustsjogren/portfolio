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
          <h1>Hi!</h1>
          <p>
            I'm August, a software developer based in Linköping, Sweden. I enjoy
            writing code for applications that gives the user a great experience. Simple as
            that.
          </p>
        </Col>
        <Col md={true} className='mx-4'>
          <Image />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
