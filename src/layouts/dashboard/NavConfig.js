// component
import Iconify from '../../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Contact',
    path: '/dashboard/contact',
    icon: getIcon('fluent:contact-card-ribbon-20-filled'),
  },
  {
    title: 'About',
    path: '/dashboard/about',
    icon: getIcon('cil:contact'),
  },
  {
    title: 'Services',
    path: '/dashboard/service',
    icon: getIcon('cil:contact'),
  },
  {
    title: 'Our project',
    path: '/dashboard/project',
    icon: getIcon('file-icons:microsoft-project'),
  },
  {
    title: 'Experience',
    path: '/dashboard/experience',
    icon: getIcon('file-icons:microsoft-project'),
  },
  {
    title: 'Education',
    path: '/dashboard/education',
    icon: getIcon('medical-icon:i-health-education'),
  },
];

export default navConfig;
