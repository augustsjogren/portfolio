import { site } from '../content';
import styles from '../pages/page.module.css';

export const PageFooter = () => (
  <div className={styles['page-footer']}>
    <span>© {site.name}</span>
    <span>{site.location}</span>
  </div>
);
