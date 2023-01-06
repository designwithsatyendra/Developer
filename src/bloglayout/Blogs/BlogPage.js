import React, { useState } from 'react';
import { Grid, Container, Box, Typography, Button, Stack } from '@mui/material';
import Page from '../../components/Page';
import { BlogPostCard, BlogPostsSort } from '../../sections/@dashboard/blog';
import POSTS from '../../_mock/blog';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function BlogPage() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [numberofelement, setnumberofelement] = useState(8);
  const slicedata = POSTS.slice(0, numberofelement);
  const LoadData = () => {
    setnumberofelement(numberofelement + numberofelement);
    if (numberofelement >= slicedata.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  return (
    <>
      <Page title="Blogs">
        <Container>
          <Box sx={{ mt: 5 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography className="about" variant="h6">
              MyWork And SourceCode.
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 5, textAlign: 'center' }}>
            DesignWithSatya works and Youtube videos source code. Just click on any video and get the source code and we
            have technical article also. Have a great day.
          </Typography>
          <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" gutterBottom>
              Blogs
            </Typography>
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack>

          <Grid container sx={{ mb: 5 }} spacing={3}>
            {slicedata.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
          {isCompleted ? (
            ''
          ) : (
            <Button onClick={() => LoadData()} sx={{ mb: 5 }} size="small" type="submit" variant="contained">
              View More
            </Button>
          )}
        </Container>
      </Page>
    </>
  );
}
