import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/style.scss';
import { Suspense } from 'react';

const IndexPage = React.lazy(() => import('./pages/index'));
const AboutPage = React.lazy(() => import('./pages/about'));
const SkillsPage = React.lazy(() => import('./pages/skills'));
const ContactPage = React.lazy(() => import('./pages/contact'));

const router = createBrowserRouter([
  { path: '/', element: <IndexPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/skills', element: <SkillsPage /> },
  { path: '/contact', element: <ContactPage /> },
]);

const domNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(domNode);

root.render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
