import type { Link } from '../content';
import landing from '../pages/landing.module.css';

export const LinkChips = ({ links }: { links: Link[] }) => (
  <div className={landing['landing-link-row']}>
    {links.map((link) => (
      <a
        key={link.label}
        className={
          link.mail
            ? [landing['landing-chip'], landing['landing-chip-mail']].join(' ')
            : landing['landing-chip']
        }
        href={link.href}
        {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {link.label} <span className={landing.arr}>→</span>
      </a>
    ))}
  </div>
);
