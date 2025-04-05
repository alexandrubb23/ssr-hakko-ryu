import { List } from '@mui/material';
import ListPages from './ListPages';

const DesktopNavMenu = () => {
  return (
    <List
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <ListPages
        sx={{
          width: 'fit-content',
        }}
      />
    </List>
  );
};

export default DesktopNavMenu;
