import { Box } from '@mui/material';

import Logo from './Logo';
import NavMenu from './NavMenu/NavMenu';

const Header = () => (
  <Box className='header'>
    <Logo />
    <NavMenu />
  </Box>
);

export default Header;
