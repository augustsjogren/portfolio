import styles from './navbar.module.css';
import { HeaderLink } from './HeaderLink';

export const NavBar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-links"]}>
        <HeaderLink to='/'>Home</HeaderLink>
        <HeaderLink to='about'>About</HeaderLink>
        <HeaderLink to='how-i-work'>How I work</HeaderLink>
        <HeaderLink to='contact'>Contact</HeaderLink>
      </div>
    </div>
  );
};
