import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BioImage from '../components/image';
import Layout from '../components/layout';
import MainContainer from '../components/layout/mainContainer';
import SEO from '../components/seo';


const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <MainContainer>
      <Row style={{ flex: '1 auto' }}>
        <Col
          md={true}
          className='mx-4 d-flex flex-column justify-content-center'
        >
          <h1>Hi!</h1>
          <p>
            I'm August, a software developer based in Linköping, Sweden. I enjoy
            writing code for applications that gives the user a great
            experience. Simple as that.
          </p>
        </Col>
        <Col md={true} className='mx-4'>
          <BioImage />
        </Col>
      </Row>
    </MainContainer>
  </Layout>
);

export default IndexPage;
