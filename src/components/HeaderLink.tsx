import type { PropsWithChildren } from 'react';
import { NavLink, type To } from 'react-router-dom';
import styles from './headerLink.module.css';

export const HeaderLink = ({ children, to }: PropsWithChildren<{ to: To }>) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [isActive ? styles.active : '', styles['header-link']].join(' ')
      }
    >
      {children}
    </NavLink>
  );
};
