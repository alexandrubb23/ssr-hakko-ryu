import { Box, Typography } from '@mui/material';
import { Link } from 'react-router';

import LogoIcon from '@assets/images/logo.png';

const Logo = () => (
  <Box
    className='logo-box'
    sx={{
      padding: 2,
      textAlign: 'center',
    }}
  >
    <Link to='/'>
      <Box component='img' src={LogoIcon} height={50} />
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          fontSize: '1rem !important',
          padding: 0,
        }}
      >
        Senshinkan
      </Typography>
    </Link>
  </Box>
);

export default Logo;
