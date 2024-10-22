import React from 'react';

export const IconListItem = ({
  icon,
  href,
  text,
}: {
  icon: React.ReactNode;
  href?: string;
  text: string;
}) => {
  if (href) {
    return (
      <li>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          {icon}
          <span>{text}</span>
        </a>
      </li>
    );
  }

  return (
    <li>
      {icon}
      <span>{text}</span>
    </li>
  );
};
