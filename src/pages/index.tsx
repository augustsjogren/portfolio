import profileImage from '../images/Aggebagge_web.webp';
import { home, links, site } from '../content';
import { Heading } from '../components/heading';
import { LinkChips } from '../components/linkChips';
import styles from './landing.module.css';

const IndexPage = () => {
  return (
    <div className={styles.landing}>
      <title>{home.title}</title>

      <section className={styles['landing-hero']}>
        <div className={styles['landing-hero-text']}>
          <p className={styles['landing-hello']}>{home.hello}</p>
          <h1 className={styles['landing-title']}>
            <Heading parts={home.heading} />
          </h1>
          <p className={styles['landing-lede']}>{home.lede}</p>
          <p className={styles['landing-stack']}>{home.stack}</p>
        </div>
        <div className={styles['landing-portrait-wrap']}>
          <img
            className={styles['landing-portrait']}
            src={profileImage}
            alt="August Sjögren"
          />
          <span className={styles['landing-sticker']}>{site.location}</span>
        </div>
      </section>

      <section className={styles['landing-section']}>
        <p className={styles['landing-section-label']}>Currently</p>
        <ul className={styles['landing-now-list']}>
          {home.currently.map((item) => (
            <li key={item.label + item.text[0].text}>
              <span className={styles.dot} />
              <span>
                <b>{item.label}:</b>{' '}
                {item.text.map((part) =>
                  part.href ? (
                    <a
                      key={part.text}
                      href={part.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {part.text}
                    </a>
                  ) : (
                    <span key={part.text}>{part.text}</span>
                  ),
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles['landing-section']}>
        <p className={styles['landing-section-label']}>Find me</p>
        <LinkChips links={links} />
      </section>

      <footer className={styles['landing-footer']}>
        <span>© {site.name}</span>
        <span>{site.location}</span>
      </footer>
    </div>
  );
};

export default IndexPage;
