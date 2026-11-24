import { Link } from 'react-router-dom';
import { PageMeta } from '../components/pageMeta';
import { PageFooter } from '../components/pageFooter';
import {
  seloria,
  seloriaDownload,
  seloriaScreenshots,
} from '../seloriaContent';
import page from './page.module.css';
import styles from './seloria.module.css';

const SeloriaPage = () => (
  <div className={page.page}>
    <title>{seloria.pageTitle}</title>
    <PageMeta description={seloria.description} canonical={seloria.canonical} />

    <p className={page['page-label']}>{seloria.label}</p>
    <h1 className={page['page-title']}>{seloria.name}</h1>
    <p className={page['page-lede']}>
      <strong>{seloria.tagline}</strong> {seloria.pitch}
    </p>

    {seloriaDownload.url ? (
      <a
        className={styles.download}
        href={seloriaDownload.url}
        target='_blank'
        rel='noreferrer'
      >
        {seloriaDownload.label}
      </a>
    ) : (
      <p className={styles.badge} data-testid='seloria-coming-soon'>
        {seloriaDownload.note}
      </p>
    )}

    <section aria-labelledby='seloria-features'>
      <h2 id='seloria-features' className={page['tools-label']}>
        {seloria.featuresLabel}
      </h2>
      <ul className={styles.features}>
        {seloria.features.map((feature) => (
          <li key={feature.title} className={styles.feature}>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>

    <section aria-labelledby='seloria-screenshots'>
      <h2 id='seloria-screenshots' className={page['tools-label']}>
        {seloria.screenshotsLabel}
      </h2>
      {seloriaScreenshots.length > 0 ? (
        <div className={styles.shots}>
          {seloriaScreenshots.map((shot) => (
            <img
              key={shot.src}
              className={styles.shot}
              src={shot.src}
              alt={shot.alt}
            />
          ))}
        </div>
      ) : (
        <p className={styles.placeholder}>{seloria.screenshotsPlaceholder}</p>
      )}
    </section>

    <section aria-labelledby='seloria-more'>
      <h2 id='seloria-more' className={page['tools-label']}>
        {seloria.linksLabel}
      </h2>
      <div className={styles.links}>
        {seloria.links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>

    <PageFooter />
  </div>
);

export default SeloriaPage;
