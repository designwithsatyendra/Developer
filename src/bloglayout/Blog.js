import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from './BlogBannerDown';
import FeaturedPost from './BlogBanner';
import Header from './Header';

const sections = [
  { title: 'HTML5', url: '#' },
  { title: 'CSS3', url: '#' },
  { title: 'JAVASCRIPT', url: '#' },
  { title: 'REACT JS', url: '#' },
  { title: 'NEXTJS', url: '#' },
];
const mainFeaturedPost = {
  title: 'SATYENDRA SINGH',
  description: 'STORE OF WEB DEVELOPER AND TECHNOLOGIES OR NEW THINGS',
  image: '/assets/images/covers/success.jpg',
  imageText: 'description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'HTML,CSS TUTORIALS',
    date: 'Nov 12',
    description: 'Create Beatiful Responsive Website By Using Html,Css',
    image: '/assets/images/covers/cover_1.jpg',
    imageLabel: 'htmltutorial',
  },
  {
    title: 'REACT JS TUTORIALS',
    date: 'Nov 11',
    description: 'Building User Interfaces Based on UI Components',
    image: '/assets/images/covers/cover_6.jpg',
    imageLabel: 'Image Text',
  },
];

export default function Blog() {
  return (
    <>
      <Header title="Blog" sections={sections} />

      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </main>
    </>
  );
}
