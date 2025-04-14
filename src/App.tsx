import 'aos/dist/aos.css';
import { Box, Stack, styled } from '@mui/material';
import { useEffect } from 'react';
import AOS from 'aos';

import './App.css';
import { PAGE_TRANSITION_DURATION } from './constants/animationsTiming';
import CenterSpinner from '@components/Spinner/CenterSpinner';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useBackgroundImage from './hooks/useBackgroundImage';
import useBlur from '@hooks/useBlur';
import useLangStore from '@store/useLangStore';

const BoxStyled = styled(Box, {
  shouldForwardProp: prop => prop !== 'bgImage' && prop !== 'blur',
})<{ bgImage?: string; blur: boolean }>(
  ({ bgImage, blur, theme }) =>
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
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('lg')]: {
          aspectRatio: '10 / 9',
        },
        filter: blur ? 'blur(20px)' : 'none',
        transition: blur ? 'none' : 'filter 0.3s ease-out',
        zIndex: -1,
        opacity: 0.8,
      },
    }
);

const StackStyled = styled(Stack, {
  shouldForwardProp: prop => prop !== 'hydrated',
})<{
  hydrated: boolean;
}>(({ hydrated }) => ({
  display: hydrated ? 'flex' : 'none',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'space-between',
  gap: 4,
  opacity: 0,
  animation: `fadeIn ${PAGE_TRANSITION_DURATION / 1000}s ease-in forwards`,
}));

const App = () => {
  const blur = useBlur();
  const { hydrated } = useLangStore();
  const bgImage = useBackgroundImage();

  useEffect(() => {
    AOS.init({
      duration: PAGE_TRANSITION_DURATION,
    });
  }, []);

  return (
    <BoxStyled bgImage={bgImage} blur={blur}>
      {!hydrated && <CenterSpinner />}
      <StackStyled hydrated={hydrated}>
        <Header />
        <Content />
        <Footer />
      </StackStyled>
    </BoxStyled>
  );
};

export default App;
