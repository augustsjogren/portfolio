import styles from './page.module.css';
import landing from './landing.module.css';

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <title>Contact</title>

      <p className={styles["page-label"]}>Contact</p>
      <h1 className={styles["page-title"]}>Get in touch.</h1>
      <p className={styles["page-lede"]}>
        The fastest way to reach me is email. I&apos;m also on LinkedIn and
        GitHub. Say hi about code, music, or running.
      </p>

      <div className={landing["landing-link-row"]}>
        <a
          className={[landing["landing-chip"], landing["landing-chip-mail"]].join(" ")}
          href='mailto:hello@augustsjogren.com'
        >
          Say hi <span className={landing.arr}>→</span>
        </a>
        <a
          className={landing["landing-chip"]}
          href='https://www.linkedin.com/in/august-sjogren'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn <span className={landing.arr}>→</span>
        </a>
        <a
          className={landing["landing-chip"]}
          href='https://github.com/augustsjogren'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub <span className={landing.arr}>→</span>
        </a>
      </div>

      <div className={styles["page-footer"]}>
        <span>© August Sjögren</span>
        <span>Malmö, SE</span>
      </div>
    </div>
  );
};

export default ContactPage;
