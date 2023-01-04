// component
// import Iconify from '../../components/Iconify';
import SvgColor from '../../components/svg-color';

const getIcon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: getIcon('ic_analytics'),
  },
  {
    title: 'Contact',
    path: '/dashboard/contact',
    icon: getIcon('ic_user'),
  },
  {
    title: 'About',
    path: '/dashboard/about',
    icon: getIcon('ic_about'),
  },
  {
    title: 'Services',
    path: '/dashboard/service',
    icon: getIcon('ic_cart'),
  },
  {
    title: 'Our project',
    path: '/dashboard/project',
    icon: getIcon('ic_project'),
  },

  {
    title: 'Blogs',
    path: '/dashboard/blogpage',
    icon: getIcon('ic_blog'),
  },
];

export default navConfig;
