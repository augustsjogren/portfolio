import { useLayoutEffect } from 'react';

export const PageTitle = ({ title }: { title: string }) => {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);

  return <div>PageTitle</div>;
};
