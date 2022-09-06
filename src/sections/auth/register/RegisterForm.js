import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await axios.post('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    // I need to change the data to res
    if (data.status === 422 || !data) {
      console.log('INvalid Registration');
    } else {
      console.log('Successfull Registration');
      navigate('/login');
    }
  };

  return (
    <>
      <form method="POST" autoComplete="off">
        <Box>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="name"
                type="text"
                value={user.name}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="frist name"
                variant="outlined"
              />
              <TextField
                name="phone"
                type="number"
                value={user.phone}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="phone"
                variant="outlined"
              />
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="work"
                type="text"
                value={user.work}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="jo role"
                variant="outlined"
              />
              <TextField
                name="email"
                type="text"
                value={user.email}
                onChange={handleInputs}
                fullWidth
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
            </Stack>

            <TextField
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              fullWidth
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <TextField
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handleInputs}
              fullWidth
              id="outlined-basic"
              label="password"
              variant="outlined"
            />

            <Button onClick={PostData} fullWidth size="large" type="submit" variant="contained">
              Register
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default RegisterForm;
