import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
const Content = () => {
  return (
    <Box
      id='main'
      sx={{
        margin: '0 auto',
        maxWidth: {
          xl: '1000px',
          lg: '900px',
          md: '800px',
          sm: '100%',
          xs: '100%',
        },
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Content;
