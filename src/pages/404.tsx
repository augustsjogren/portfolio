import styles from './page.module.css';

const NotFoundPage = () => (
  <div className={styles.page}>
    <p className={styles["page-label"]}>404</p>
    <h1 className={styles["page-title"]}>Lost the trail.</h1>
    <p className={styles["page-lede"]}>
      That route doesn&apos;t exist. Head back <a href='/'>home</a> and try
      again.
    </p>
  </div>
);

export default NotFoundPage;
