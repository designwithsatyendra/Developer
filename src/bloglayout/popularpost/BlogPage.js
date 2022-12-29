import { Grid, Container, Box, Typography } from '@mui/material';
import Page from '../../components/Page';
import { BlogPostCard } from '../../sections/@dashboard/blog';
import POSTS from '../../_mock/blog';

export default function BlogPage() {
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

          <Grid container sx={{ mb: 5 }} spacing={3}>
            {POSTS.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </Container>
      </Page>
    </>
  );
}
