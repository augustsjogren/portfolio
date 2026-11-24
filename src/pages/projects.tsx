import { Link } from 'react-router-dom';
import { projects, site } from '../content';
import { Heading } from '../components/heading';
import { PageMeta } from '../components/pageMeta';
import { PageFooter } from '../components/pageFooter';
import styles from './page.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.page}>
      <title>{projects.pageTitle}</title>
      <PageMeta
        description={projects.description}
        canonical={`${site.url}/projects`}
      />

      <p className={styles['page-label']}>{projects.title}</p>
      <h1 className={styles['page-title']}>
        <Heading parts={projects.heading} />
      </h1>
      <p className={styles['page-lede']}>{projects.lede}</p>

      <ul className={styles.projects}>
        {projects.items.map((project) => {
          const body = (
            <>
              <span className={styles['project-kind']}>{project.kind}</span>
              <h2>{project.name}</h2>
              <p className={styles['project-desc']}>{project.description}</p>
              <span className={styles['project-cta']}>{project.cta} →</span>
            </>
          );
          return (
            <li key={project.name}>
              {project.external ? (
                <a
                  className={styles['project-card']}
                  href={project.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  {body}
                </a>
              ) : (
                <Link className={styles['project-card']} to={project.href}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <PageFooter />
    </div>
  );
};

export default ProjectsPage;
