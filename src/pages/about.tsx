import { about } from '../content';
import { Heading } from '../components/heading';
import { PageFooter } from '../components/pageFooter';
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <title>{about.title}</title>

      <p className={styles['page-label']}>{about.title}</p>
      <h1 className={styles['page-title']}>
        <Heading parts={about.heading} />
      </h1>
      <div className={styles['page-body']}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <PageFooter />
    </div>
  );
};

export default AboutPage;
