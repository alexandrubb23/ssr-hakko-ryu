import { ListItem, SxProps, Typography } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { pages } from '../../../pages';
import { Link, useLocation } from 'react-router';

interface Props {
  sx?: SxProps<Theme>;
  onPageChange?: () => void;
}

const ListItemStyle = styled(ListItem)(({ sx }) => ({
  cursor: 'pointer',
  display: 'block',
  fontSize: '2rem',
  textAlign: 'center',
  transition: '200ms ease-in-out',
  '&:hover': {
    color: '#AB96FF',
    cursor: 'pointer',
    transform: 'scale(1.1)',
  },

  ...(sx as Object),
}));

const ListPages = ({ sx, onPageChange }: Props) => {
  const location = useLocation();
  return (
    <>
      {pages.map(page => (
        <ListItemStyle key={page.label} sx={sx}>
          <Typography
            variant='h5'
            sx={{
              textAlign: 'center',
              a: {
                color: location.pathname === page.path ? '#AB96FF' : 'white',
              },
              'a:hover': {
                color: 'inherit',
              },
            }}
          >
            <Link to={page.path} onClick={onPageChange}>
              {page.label}
            </Link>
          </Typography>
        </ListItemStyle>
      ))}
    </>
  );
};

export default ListPages;
