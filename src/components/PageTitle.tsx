import React, { useLayoutEffect } from 'react';

export const PageTitle = ({ title }: { title: string }) => {
  useLayoutEffect(() => {
    document.title = title;
  }, []);

  return <div>PageTitle</div>;
};
