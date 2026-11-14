import { contact, site } from '../content';
import { Heading } from '../components/heading';
import { LinkChips } from '../components/linkChips';
import { PageMeta } from '../components/pageMeta';
import { PageFooter } from '../components/pageFooter';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <title>{contact.pageTitle}</title>
      <PageMeta description={contact.description} canonical={`${site.url}/contact`} />

      <p className={styles['page-label']}>{contact.title}</p>
      <h1 className={styles['page-title']}>
        <Heading parts={contact.heading} />
      </h1>
      <p className={styles['page-lede']}>{contact.lede}</p>
      <p className={styles['page-email']}>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <LinkChips links={contact.links} />

      <PageFooter />
    </div>
  );
};

export default ContactPage;
