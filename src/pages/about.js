import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsCodeSlash, BsMusicNoteBeamed } from 'react-icons/bs';
import { RiRunLine } from 'react-icons/ri';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SEO from '../components/seo';


const AboutPage = () => (
  <Layout>
    <SEO title='Home' />
    <MainContainer>
      <Row style={{ flex: '1 auto' }}>
        <Col
          md={true}
          className='mx-4 d-flex flex-column justify-content-center'
        >
          <h1>About</h1>
          <p>
            As a developer I'm mainly focused on the web, where I gravitate
            towards front end. I also enjoy creating mobile applications in
            React Native, where I can utilize my web development skills. Outside
            of work I like to spend my time on other creative hobbies, such as
            producing music or fiddling with some new cool tech. Excercise is
            also an important part of my everyday life, and I like to try out
            new activities and sports.
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
    </MainContainer>
  </Layout>
);

export default AboutPage;
