import { Box } from '@mui/material';
import useMenuStore from '@store/useMenuStore';
import { Outlet, useLocation } from 'react-router';
const Content = () => {
  const location = useLocation();
  const isIsOpen = useMenuStore(state => state.isOpen);

  const isHomePage = location.pathname === '/';

  return (
    <Box
      sx={{
        padding: isHomePage ? 0 : 2,
        filter: !isHomePage && isIsOpen ? 'blur(20px)' : 'none',
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Content;
