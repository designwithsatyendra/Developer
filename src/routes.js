import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Contact from './pages/Contact';
import DashboardApp from './pages/DashboardApp';
import Service from './components/service/Service';
import About from './pages/About';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Education from './pages/Education';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: 'service', element: <Service /> },
        { path: 'project', element: <Project /> },
        { path: 'experience', element: <Experience /> },
        { path: 'education', element: <Education /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
