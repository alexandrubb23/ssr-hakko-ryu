import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';
import { List, ListItem, SxProps, Typography } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import { normalizePath } from '@utils/routes';
import { Link, useLocation } from 'react-router';
import { pages } from '../../../pages';

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

  return (
    <>
      <List sx={sx?.list}>
        <ListItemStyle
          sx={{
            paddingTop: 0,
          }}
        >
          <LanguageSwitcher />
        </ListItemStyle>
        {pages.map(page => {
          return (
            <ListItemStyle key={page.path} sx={sx?.item}>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  a: {
                    color:
                      location.pathname === normalizePath(page.path)
                        ? '#AB96FF'
                        : 'white',
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
