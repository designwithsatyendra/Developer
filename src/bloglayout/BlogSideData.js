import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './Sidebar';

const sidebar = {
  title: 'About',
  description:
    'Satyendra Singh, I am working as a web developer And I am a Youtuber too. I want to share with you my experiences during Colleges,',
  archives: [
    { title: 'How To get source code', url: '/dashboard/blogs/sourcecode' },
    { title: 'Amazing Design Using HTML-CSS LoadingBar', url: '/dashboard/blogs/blog' },
    { title: 'Create Animated Website Using HTML5 & CSS3 in 2021', url: '/dashboard/blogs/blog1' },
    { title: 'React JS 17.0.2 in one video By Design With Satya', url: '/dashboard/blogs/blog2' },
    { title: 'JavaScript in one video By Design With Satya', url: '/dashboard/blogs/blog3' },
    { title: 'We Can Create Login Form using Html / Css', url: '/dashboard/blogs/blog4' },
  ],
  tutorials: [
    {
      title: 'Html || Html5',
      url: '',
    },
    {
      title: 'Css || Css3',
      url: '',
    },
    {
      title: 'JavaScript || EcmaScript15',
      url: '',
    },
    {
      title: 'React JS || Next JS',
      url: '',
    },
    {
      title: 'Material UI',
      url: '',
    },
    {
      title: 'Git || GitLab',
      url: '',
    },
    {
      title: 'Node JS || Express JS',
      url: '',
    },
    {
      title: 'Java Programming || Spring Boot',
      url: '',
    },
  ],
  latestnews: [
    {
      title:
        'Sara Ali Khan drops holiday pictures with Ibrahim Ali Khan, fans say he looks more like Saif Ali Khan than Saif Ali Khan',
      url: '',
    },
    {
      title: 'Rs 500cr crypto scam: Many fall to promise of 200% returns',
      url: '',
    },
    {
      title: 'How Britain fell in love with chicken tikka masala',
      url: '',
    },
  ],
  social: [
    { name: 'GitHub', url: 'https://github.com/designwithsatyendra', icon: GitHubIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/satyendra_pooja_rajpoot/', icon: InstagramIcon },
    { name: 'Youtube', url: 'https://www.youtube.com/watch?v=OXWCzLpcGN4', icon: YouTubeIcon },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/satyendra-singh-48ba751b7/', icon: LinkedInIcon },
  ],
};
console.log(sidebar.title);
const theme = createTheme();
const BlogSideData = () => (
  <ThemeProvider theme={theme}>
    <Sidebar
      title={sidebar.title}
      description={sidebar.description}
      archives={sidebar.archives}
      tutorials={sidebar.tutorials}
      social={sidebar.social}
      latestnews={sidebar.latestnews}
    />
  </ThemeProvider>
);

export default BlogSideData;
