import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 5)',
});

const StyledTitle = styled('div')({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textDecoration: 'none',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function BlogPostCard({ post }) {
  const { cover, title, createdAt, url } = post;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ position: 'relative' }}>
        <StyledCardMedia>
          <StyledCover alt={title} src={cover} />
        </StyledCardMedia>
        <CardContent
          sx={{
            pt: 4,
          }}
        >
          <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
            {createdAt}
          </Typography>
          <NavLink style={{ textDecoration: 'none' }} to={url}>
            <StyledTitle color="inherit" variant="subtitle2">
              {title}
            </StyledTitle>
          </NavLink>
        </CardContent>
      </Card>
    </Grid>
  );
}
