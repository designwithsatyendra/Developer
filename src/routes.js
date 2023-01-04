import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import NotFound from './pages/Page404';
// dash and blog layouts
const DashboardLayout = React.lazy(() => import('./layouts/dashboard'));
const BlogsLayout = React.lazy(() => import('./bloglayout'));

// ----------------------------------------------------------------------
const DashboardApp = React.lazy(() => import('./pages/DashboardApp'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Service = React.lazy(() => import('./components/service/Service'));
const About = React.lazy(() => import('./pages/About'));
const Project = React.lazy(() => import('./pages/Project'));
const BlogPage = React.lazy(() => import('./bloglayout/Blogs/BlogPage'));
const SourseCode = React.lazy(() => import('./components/soursecode/SourseCode'));
const BlogHome = React.lazy(() => import('./bloglayout/BlogHome'));
const Blog2 = React.lazy(() => import('./bloglayout/Blogs/Blog2'));

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'app',
          element: <DashboardApp />,
        },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: 'service', element: <Service /> },
        { path: 'project', element: <Project /> },
        { path: 'blogpage', element: <BlogPage /> },
        {
          path: 'blogs',
          element: <BlogsLayout />,
          children: [
            {
              path: 'blog1',
              element: <BlogHome />,
            },
            {
              path: 'blog2',
              element: <Blog2 />,
            },
            {
              path: 'sourcecode',
              element: <SourseCode />,
            },
          ],
        },
      ],
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
