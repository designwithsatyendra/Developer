import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, Box, TextField, Button } from '@mui/material';

// ----------------------------------------------------------------------
import { UserContext } from '../../../App';

export default function LoginForm() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      console.log('error');
    } else {
      dispatch({ type: 'USER', payload: true });
      console.log('logged');
      navigate('/dashboard/app');
    }
  };

  return (
    <Box>
      <form method="POST">
        <Stack spacing={3}>
          <TextField
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <Link variant="subtitle2" underline="hover">
            Forgot password?{state}
          </Link>
        </Stack>

        <Button onClick={loginUser} fullWidth size="large" type="submit" variant="contained">
          Signin
        </Button>
      </form>
    </Box>
  );
}
