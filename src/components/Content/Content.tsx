import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router';
const Content = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        padding: location.pathname === '/' ? 0 : 2,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Content;
