import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Skill from '../components/skill';

const skills = [
  { name: 'Html', value: 80 },
  { name: 'Css', value: 90 },
  { name: 'Javascript', value: 70 },
  { name: 'C#', value: 70 },
  { name: '.NET', value: 70 },
];

const listItems = skills.map((skill, index) => (
  <Skill key={index} index={index} skill={skill} />
));

const SkillsPage = () => (
  <Layout>
    <SEO title='Skills' />
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
          <h1>Skills</h1>
          <p>
            These are some of the skills I have, ranging from high to low. Some
            of them I work with professionally, while others come from hobbies
            and other interests.
          </p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        </Col>
        <Col md={true}>{listItems}</Col>
      </Row>
    </Container>
  </Layout>
);

export default SkillsPage;
