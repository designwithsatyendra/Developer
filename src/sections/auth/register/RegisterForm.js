import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard/app', { replace: true });
  };

  return (
    <>
      <Stack spacing={3} sx={{ my: 2 }}>
        <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2}>
          <TextField name="name" type="text" fullWidth id="outlined-basic" label="Frist Name" variant="outlined" />
          <TextField name="phone" type="phone" fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
        </Stack>
        <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2}>
          <TextField name="email" type="email" fullWidth id="outlined-basic" label="Email" variant="outlined" />
          <TextField name="domain" type="text" fullWidth id="outlined-basic" label="Your Domain" variant="outlined" />
        </Stack>
        <TextField name="password" label="Password" type="password" />
        <TextField name="password" label="Cpassword" type="password" />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Register
      </LoadingButton>
    </>
  );
}
