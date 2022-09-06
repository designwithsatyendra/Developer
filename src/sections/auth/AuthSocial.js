// material
import { Stack, Button } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  const navConfig = [
    {
      path: '/dashboard/education',
      icon: 'fa:github-alt',
      color: '#1C2CEA',
    },
    {
      path: '/dashboard/education',
      icon: 'entypo-social:linkedin-with-circle',
      color: '#1877F2',
    },
    {
      path: 'https://www.youtube.com/watch?v=OXWCzLpcGN4',
      icon: 'fa:youtube-play',
      color: '#DF3E20',
    },

    {
      path: 'https://www.instagram.com/satyendrapoojarajpoot',
      icon: 'fa6-brands:instagram-square',
      color: '#1877F2',
    },
  ];

  return (
    <>
      <Stack direction="row" mb={2} spacing={2}>
        {navConfig.map((item, id) => (
          <>
            <a href={item.path}>
              <Button key={id} fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon={item.icon} color={item.color} width={22} height={22} />
              </Button>
            </a>
          </>
        ))}
      </Stack>
    </>
  );
}
