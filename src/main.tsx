import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/style.scss';
import { Suspense } from 'react';
import Layout from './components/layout';
import IndexPage from './pages';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import SkillsPage from './pages/skills';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { element: <IndexPage />, index: true },
        { path: 'about', element: <AboutPage /> },
        { path: 'skills', element: <SkillsPage /> },
        { path: 'contact', element: <ContactPage /> },
      ],
    },
  ],
  { basename: '/portfolio' }
);

const domNode = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(domNode);

root.render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
