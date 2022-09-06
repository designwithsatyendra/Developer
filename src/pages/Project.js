import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';

const Project = () => (
  <>
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Project
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Project
          </Button>
        </Stack>
      </Container>
    </Page>
  </>
);

export default Project;
