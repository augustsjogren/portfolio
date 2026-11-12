import type { PropsWithChildren } from 'react';
import { NavLink, type To } from 'react-router-dom';

export const HeaderLink = ({ children, to }: PropsWithChildren<{ to: To }>) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [isActive ? 'active' : '', 'header-link'].join(' ')
      }
    >
      {children}
    </NavLink>
  );
};
