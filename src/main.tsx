import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages';
import AboutPage from './pages/about';
import SkillsPage from './pages/skills';
import ContactPage from './pages/contact';

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
