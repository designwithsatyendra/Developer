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
    title: 'Blog',
    path: '/dashboard/blogpage',
    icon: getIcon('mingcute:file-certificate-fill'),
  },
];

export default navConfig;
