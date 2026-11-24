import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/global.css';
import { Suspense } from 'react';
import Layout from './components/layout';
const NotFoundPage = React.lazy(() => import('./pages/404'));
const IndexPage = React.lazy(() => import('./pages/'));
const ContactPage = React.lazy(() => import('./pages/contact'));
const HowIWorkPage = React.lazy(() => import('./pages/how-i-work'));
const SeloriaPage = React.lazy(() => import('./pages/seloria'));
const SeloriaPrivacyPage = React.lazy(() => import('./pages/seloria/privacy'));
const SeloriaSupportPage = React.lazy(() => import('./pages/seloria/support'));
const ProjectsPage = React.lazy(() => import('./pages/projects'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'how-i-work', element: <HowIWorkPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'seloria', element: <SeloriaPage /> },
      { path: 'seloria/privacy', element: <SeloriaPrivacyPage /> },
      { path: 'seloria/support', element: <SeloriaSupportPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
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
