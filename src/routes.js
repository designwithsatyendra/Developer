import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

// blogs layouts
import BlogsLayout from './bloglayout';
import NotFound from './pages/Page404';
import SourseCode from './components/soursecode/SourseCode';
import Blog from './bloglayout/BlogHome';
import Blog1 from './bloglayout/popularpost/Blog1';
import Blog2 from './bloglayout/popularpost/Blog2';
import Blog3 from './bloglayout/popularpost/Blog3';
import Blog4 from './bloglayout/popularpost/Blog4';
// ----------------------------------------------------------------------
const DashboardApp = React.lazy(() => import('./pages/DashboardApp'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Service = React.lazy(() => import('./components/service/Service'));
const About = React.lazy(() => import('./pages/About'));
const Project = React.lazy(() => import('./pages/Project'));
const BlogPage = React.lazy(() => import('./bloglayout/popularpost/BlogPage'));

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
              path: 'blog',
              element: <Blog />,
            },
            {
              path: 'blog1',
              element: <Blog1 />,
            },
            {
              path: 'blog2',
              element: <Blog2 />,
            },
            {
              path: 'blog3',
              element: <Blog3 />,
            },
            {
              path: 'blog4',
              element: <Blog4 />,
            },
            {
              path: 'sourcecode',
              element: <SourseCode />,
            },
          ],
        },
      ],
    },
    // blogs layout
    // {
    //   path: '/blog',
    //   element: <BlogsLayout />,
    //   children: [
    //     {
    //       path: 'app',
    //       element: <BlogPage />,
    //     },
    //   ],
    // },
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
