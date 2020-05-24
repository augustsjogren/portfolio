import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Skill from '../components/skill';

const skills = [
  { name: 'HTML', value: 50 },
  { name: 'CSS', value: 75 },
  { name: 'JavaScript', value: 70 },
  { name: 'React', value: 70 },
  { name: 'React Native', value: 60 },
  { name: 'Blazor', value: 50 },
  { name: '.NET', value: 50 },
];

const listItems = skills.map((skill, index) => (
  <Skill key={index} index={index} skill={skill} />
));

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
            low. Some of them I work with professionally, while others are used
            in hobbies and side projects. My skillset is constantly developing,
            as I enjoy trying out new technologies and tools.
          </p>
        </Col>
        <Col md={true} className='mx-4 mt-4 mt-md-0'>
          {listItems}
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default SkillsPage;
