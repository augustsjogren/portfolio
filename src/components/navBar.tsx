import { nav } from '../content';
import { HeaderLink } from './HeaderLink';
import styles from './navbar.module.css';

export const NavBar = () => {
  return (
    <div className={styles['navbar-container']}>
      <div className={styles['navbar-links']}>
        {nav.map((item) => (
          <HeaderLink key={item.to} to={item.to}>
            {item.label}
          </HeaderLink>
        ))}
      </div>
    </div>
  );
};
