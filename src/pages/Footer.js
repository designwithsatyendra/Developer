import React from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import AuthSocial from '../sections/auth/AuthSocial';
import Page from '../components/Page';

function Footer() {
  return (
    <>
      <Page title="Dashboard: Footer">
        <Container maxWidth="xl" style={{ padding: '10px' }}>
          <Stack alignItems="center" justifyContent="space-between" mb={5}>
            <AuthSocial />
            <Typography variant="body2">@2022 Satyendra.All right reserved.</Typography>
          </Stack>
        </Container>
      </Page>
    </>
  );
}

export default Footer;
