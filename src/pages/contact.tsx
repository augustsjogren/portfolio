import { contact } from '../content';
import { Heading } from '../components/heading';
import { LinkChips } from '../components/linkChips';
import { PageFooter } from '../components/pageFooter';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <title>{contact.title}</title>

      <p className={styles['page-label']}>{contact.title}</p>
      <h1 className={styles['page-title']}>
        <Heading parts={contact.heading} />
      </h1>
      <p className={styles['page-lede']}>{contact.lede}</p>

      <LinkChips links={contact.links} />

      <PageFooter />
    </div>
  );
};

export default ContactPage;
