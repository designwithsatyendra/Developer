import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';

const Project = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'appllication/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate('/login', { replace: true });
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <Page title="Project">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              {userData.name}
            </Typography>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              Add Project
            </Button>
          </Stack>
        </Container>
      </Page>
    </>
  );
};

export default Project;
