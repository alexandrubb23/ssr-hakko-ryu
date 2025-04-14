import { createTheme } from '@mui/material';

import Jarene from '@assets/fonts/Jarene.otf';
import Rubik from '@assets/fonts/Rubik.ttf';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 866,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#AB96FF',
      // main: '#977efc',
      // main: '#7f61f9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd700',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: '#fff',
    },
  },
  typography: {
    fontFamily: 'Jarene, Arial, sans-serif',
    body1: {
      fontFamily: 'Rubik',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --bar-width: 40px;
          --bar-height: 5px;
          --hamburger-gap: 8px;
          --foreground-color: #fff;
          --background-color: #000;
          --hamburger-margin: 18px;
          --animation-timing: 300ms ease-in-out;
          --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
        }
        @font-face {
          font-family: 'Jarene';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Jarene'), url(${Jarene}) format('opentype');
        }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Rubik'), url(${Rubik}) format('opentype');
        }
        body {
          background-color: #000;
          background-size: cover;
          background-position: center;
          color: #e7e7e7;
          font-size: clamp(12px, 3vw, 24px);
        }
        h2 {
          font-size: clamp(3rem, calc(7vw + 1rem), 5rem) !important;
        }
        h3 {
          font-size: clamp(2rem, calc(7vw + 1rem), 2.375rem) !important;
        }      
      `,
    },
  },
});

export default theme;
