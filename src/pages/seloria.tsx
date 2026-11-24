import { Link } from 'react-router-dom';
import { PageMeta } from '../components/pageMeta';
import { ScreenshotGallery } from '../components/screenshotGallery';
import { PageFooter } from '../components/pageFooter';
import { seloria, seloriaDownload } from '../seloriaContent';
import { seloriaScreenshots } from '../seloriaScreenshots';
import page from './page.module.css';
import styles from './seloria.module.css';

const heroShot = seloriaScreenshots.find((s) => s.caption === 'Player');

const SeloriaPage = () => (
  <div className={page.page}>
    <title>{seloria.pageTitle}</title>
    <PageMeta description={seloria.description} canonical={seloria.canonical} />

    <section className={styles.hero}>
      <div className={styles['hero-text']}>
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
      </div>
      {heroShot && (
        <div className={styles['hero-shot']}>
          <img
            className={styles['hero-img']}
            src={heroShot.src}
            alt={heroShot.alt}
            width={600}
            height={1304}
          />
        </div>
      )}
    </section>

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
        <ScreenshotGallery shots={seloriaScreenshots} />
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
