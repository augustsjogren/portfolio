import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BsCodeSlash, BsMusicNoteBeamed } from 'react-icons/bs';
import { RiRunLine } from 'react-icons/ri';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => (
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
          <h1>About</h1>
          <p>
            While mainly focused on the web, I also enjoy developing mobile
            applications in React Native. Outside of work I like to spend my
            time on other creative hobbies, such as producing music and playing
            the guitar. Excercise is also an important part of my everyday life.
          </p>
        </Col>
        <Col md={true} className='mx-4'>
          <Row className='align-items-center h-100 mt-5 mt-md-0 row'>
            <Col className='text-center'>
              <BsCodeSlash size='32' color='black' />
            </Col>
            <Col className='text-center'>
              <BsMusicNoteBeamed size='32' color='black' />
            </Col>
            <Col className='text-center'>
              <RiRunLine size='32' color='black' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default AboutPage;
