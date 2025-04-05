import { Box, Stack, styled } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { PAGE_TRANSITION_DURATION } from './constants/animationsTiming';
import useBackgroundImage from './hooks/useBackgroundImage';
import useBlur from '@hooks/useBlur';

const BoxStyled = styled(Box, {
  shouldForwardProp: prop => prop !== 'bgImage' && prop !== 'blur',
})<{ bgImage?: string; blur: boolean }>(
  ({ bgImage, blur }) =>
    bgImage && {
      position: 'relative',
      minHeight: 'calc(100vh  - 218px)',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: blur ? 'blur(20px)' : 'none',
        transition: blur ? 'none' : 'filter 0.3s ease-out',
        zIndex: -1,
      },
    }
);

const App = () => {
  const blur = useBlur();
  const bgImage = useBackgroundImage();

  useEffect(() => {
    AOS.init({
      duration: PAGE_TRANSITION_DURATION,
    });
  }, []);

  return (
    <BoxStyled bgImage={bgImage} blur={blur}>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Header />
        <Content />
        <Footer />
      </Stack>
    </BoxStyled>
  );
};

export default App;
