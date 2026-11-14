import { howIWork } from '../content';
import { Heading } from '../components/heading';
import { PageFooter } from '../components/pageFooter';
import styles from './page.module.css';

const HowIWorkPage = () => {
  return (
    <div className={styles.page}>
      <title>{howIWork.title}</title>

      <p className={styles['page-label']}>{howIWork.title}</p>
      <h1 className={styles['page-title']}>
        <Heading parts={howIWork.heading} />
      </h1>
      <p className={styles['page-lede']}>{howIWork.lede}</p>

      <ul className={styles.principles}>
        {howIWork.principles.map((principle) => (
          <li key={principle.title} className={styles.principle}>
            <h2>{principle.title}</h2>
            <p>{principle.body}</p>
          </li>
        ))}
      </ul>

      <p className={styles['tools-label']}>{howIWork.toolsLabel}</p>
      <div className={styles['tools-row']}>
        {howIWork.tools.map((tool) => (
          <span key={tool} className={styles['tools-tag']}>
            {tool}
          </span>
        ))}
      </div>

      <PageFooter />
    </div>
  );
};

export default HowIWorkPage;
