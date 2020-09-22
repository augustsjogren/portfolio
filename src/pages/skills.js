import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SkillTag from '../components/SkillTag';

const skills = [
  'React.js',
  'React Native',
  'Blazor',
  'JavaScript',
  'HTML',
  'CSS',
  '.NET',
  'SQL Server',
];

const skillsList = skills.map((skill, index) => <SkillTag content={skill} />);

const SkillsPage = () => (
  <Layout>
    <SEO title='Skills' />
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
          <h1>Skills</h1>
          <p>
            These are some of my most prominent skills, ranging from high to
            low. However, my skillset is constantly developing as I enjoy trying
            out new technologies and tools.
          </p>
        </Col>
        <Col
          md={true}
          className='d-flex mx-4 mt-4 mt-md-0 text-center align-items-center'
        >
          <div>{skillsList}</div>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default SkillsPage;
