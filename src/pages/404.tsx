import { notFound } from '../content';
import { Heading } from '../components/heading';
import styles from './page.module.css';

const NotFoundPage = () => (
  <div className={styles.page}>
    <title>{notFound.label}</title>

    <p className={styles['page-label']}>{notFound.label}</p>
    <h1 className={styles['page-title']}>
      <Heading parts={notFound.heading} />
    </h1>
    <p className={styles['page-lede']}>
      {notFound.message}
      <a href="/">{notFound.linkLabel}</a>
      {notFound.messageEnd}
    </p>
  </div>
);

export default NotFoundPage;
