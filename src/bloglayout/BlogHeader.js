import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import TopHeader from '../components/TopHeader';

function BlogHeader(props) {
  const { sections } = props;

  return (
    <>
      <TopHeader />
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        {sections.map((section) => (
          <Link
            noWrap
            key={section.title}
            variant="subtitle1"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

BlogHeader.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogHeader;
