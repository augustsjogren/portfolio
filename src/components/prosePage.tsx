import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageFooter } from './pageFooter';
import { PageMeta } from './pageMeta';
import styles from './prosePage.module.css';

type ProsePageProps = {
  title: string;
  documentTitle: string;
  description: string;
  canonical: string;
  updated?: string;
  children: ReactNode;
};

/** Plain, accessible long-form page: one h1, h2 sections, back link. */
export const ProsePage = ({
  title,
  documentTitle,
  description,
  canonical,
  updated,
  children,
}: ProsePageProps) => (
  <div className={styles.prose}>
    <title>{documentTitle}</title>
    <PageMeta description={description} canonical={canonical} />

    <p className={styles.back}>
      <Link to='/seloria'>&larr; Back to Seloria</Link>
    </p>
    <h1 className={styles.title}>{title}</h1>
    {updated && <p className={styles.updated}>Last updated: {updated}</p>}
    {children}
    <PageFooter />
  </div>
);
