import profileImage from '../images/Aggebagge_web.webp';
import styles from './landing.module.css';

const IndexPage = () => {
  return (
    <div className={styles.landing}>
      <title>Home</title>

      <section className={styles["landing-hero"]}>
        <div className={styles["landing-hero-text"]}>
          <p className={styles["landing-hello"]}>Hej! I&apos;m August.</p>
          <h1 className={styles["landing-title"]}>
            Runner, beatmaker, <em className={styles["landing-accent"]}>builder</em> of
            odd things.
          </h1>
          <p className={styles["landing-lede"]}>
            By day I build web apps: full stack, from idea to deploy. The rest
            of the time I&apos;m making <strong>music</strong>, chasing a faster{' '}
            <strong>5k</strong>, or taking something apart to see how it works.
          </p>
        </div>
        <div className={styles["landing-portrait-wrap"]}>
          <img
            className={styles["landing-portrait"]}
            src={profileImage}
            alt='Portrait of August'
          />
          <span className={styles["landing-sticker"]}>Malmö, SE</span>
        </div>
      </section>

      <section className={styles["landing-section"]} aria-labelledby='now-heading'>
        <p className={styles["landing-section-label"]} id='now-heading'>
          Currently
        </p>
        <ul className={styles["landing-now-list"]}>
          <li>
            <span className={styles.dot} />
            <span>
              <b>Making:</b> a track that refuses to leave the 8-bar loop stage
            </span>
          </li>
          <li>
            <span className={styles.dot} />
            <span>
              <b>Running:</b> chasing a sub-20 5k before winter
            </span>
          </li>
          <li>
            <span className={styles.dot} />
            <span>
              <b>Building:</b> a small web app nobody asked for (someone always
              asks)
            </span>
          </li>
        </ul>
      </section>

      <section className={styles["landing-section"]} aria-labelledby='links-heading'>
        <p className={styles["landing-section-label"]} id='links-heading'>
          Find me
        </p>
        <div className={styles["landing-link-row"]}>
          <a
            className={styles["landing-chip"]}
            href='https://github.com/augustsjogren'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub <span className={styles.arr}>→</span>
          </a>
          <a
            className={styles["landing-chip"]}
            href='https://www.linkedin.com/in/august-sjogren'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn <span className={styles.arr}>→</span>
          </a>
          <a
            className={[styles["landing-chip"], styles["landing-chip-mail"]].join(" ")}
            href='mailto:hello@augustsjogren.com'
          >
            Say hi <span className={styles.arr}>→</span>
          </a>
        </div>
      </section>

      <footer className={styles["landing-footer"]}>
        <span>© August Sjögren</span>
        <span>built with too much coffee</span>
      </footer>
    </div>
  );
};

export default IndexPage;
