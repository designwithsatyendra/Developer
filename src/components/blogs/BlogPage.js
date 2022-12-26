import { Button, Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../Page';
import Iconify from '../Iconify';
import { BlogPostCard } from '../../sections/@dashboard/blog';
// mock
import POSTS from '../../_mock/blog';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Page title="Blogs">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Blog
            </Typography>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Post
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {POSTS.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>
      </Page>
    </>
  );
}
