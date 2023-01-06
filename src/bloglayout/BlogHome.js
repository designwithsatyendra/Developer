import { Box, Typography, Button, Link } from '@mui/material';
import React from 'react';

const BlogHome = () => (
  <>
    <Typography variant="h5" sx={{ mb: 5 }}>
      Satyendra Rajpoot React Ecommerce Website Series!!
    </Typography>
    <Typography variant="caption">27-12-2022</Typography>
    <Box>
      <iframe
        width="450"
        height="315"
        src="https://www.youtube.com/embed/OXWCzLpcGN4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <Typography variant="h5">Satyendra Rajpoot React Ecommerce Website Series!!</Typography>
      <Typography variant="body2" sx={{ mb: 5 }}>
        Hello guys today we are back with an amazing Design With Satya LoadingBar which is built using the Html,Css.So,
        are you excited for this video!!:-) if yes then please watch the video without skipping. In this video i have
        explained How to create beautiful loading bar using by html,css.
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Link
          style={{ textDecoration: 'none' }}
          href="https://github.com/designwithsatyendra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="large" type="submit" variant="containedInherit">
            Get Source Code
          </Button>
        </Link>
      </Box>
    </Box>
  </>
);

export default BlogHome;
