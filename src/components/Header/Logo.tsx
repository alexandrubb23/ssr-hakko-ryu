import { Box, Typography } from '@mui/material';
import { Link } from 'react-router';

import LogoIcon from '@assets/images/logo.png';

const Logo = () => (
  <Box className='logo-box'>
    <Link to='/'>
      <Box component='img' src={LogoIcon} height={50} />
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          fontSize: '1rem',
        }}
      >
        Senshinkan
      </Typography>
    </Link>
  </Box>
);

export default Logo;
