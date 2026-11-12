
import styles from './navbar.module.css';
import headerLinkStyles from './headerLink.module.css';
import { Link } from 'react-router-dom';
import { HeaderLink } from './HeaderLink';

export const NavBar = () => {
  return (
    <div className={styles['navbar-container']}>
      <div className={styles['navbar-brand']}>
        <Link to='/' className={headerLinkStyles['header-link']}>
          AS
        </Link>
      </div>

      <div className={styles['navbar-links']}>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='about'>About</HeaderLink>
        <HeaderLink to='skills'>Skills</HeaderLink>
        <HeaderLink to='contact'>Contact</HeaderLink>
      </div>
    </div>
  );
};
