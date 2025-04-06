import { Button, List, ListItem, SxProps, Typography } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { pages } from '../../../pages';
import { Link, useLocation } from 'react-router';
import useLang from '@store/useLang';
import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import { normalizePath } from '@utils/routes';

interface Props {
  sx?: {
    list?: SxProps<Theme>;
    item?: SxProps<Theme>;
  };
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
  const { lang, toggleLang } = useLang();

  return (
    <>
      <List sx={sx?.list}>
        <ListItemStyle>
          <Button variant='contained' onClick={toggleLang}>
            {lang === 'ro' ? 'EN' : 'RO'}
          </Button>
        </ListItemStyle>
        {pages.map(page => {
          return (
            <ListItemStyle key={page.path} sx={sx?.item}>
              <Typography
                variant='h5'
                sx={{
                  textAlign: 'center',
                  a: {
                    color:
                      location.pathname === page.path ? '#AB96FF' : 'white',
                  },
                  'a:hover': {
                    color: 'inherit',
                  },
                }}
              >
                <Link to={normalizePath(page.path)} onClick={onPageChange}>
                  <FormattedMessage id={`header.menu.${page.path}`} />
                </Link>
              </Typography>
            </ListItemStyle>
          );
        })}
      </List>
    </>
  );
};

export default ListPages;
