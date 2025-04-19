import { Box, styled } from '@mui/material';

import useProgressiveImg, {
  type UseProgressiveImg,
} from '@hooks/useProgressiveImg';
import type { SxThemeProps } from 'types/style';

type BlurredUpImageProps = UseProgressiveImg & {
  sx?: SxThemeProps;
};

const BoxStyled = styled(Box, {
  shouldForwardProp: prop => prop !== 'blur',
})<{ blur: boolean; component: React.ElementType; src: string }>(
  ({ blur }) => ({
    width: '100%',
    filter: blur ? 'blur(10px)' : 'none',
    height: '100%',
    maxHeight: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: blur ? 'none' : 'filter 0.3s ease-out',
  })
);

const BlurredUpImage = (sources: BlurredUpImageProps) => {
  const [src, { blur }] = useProgressiveImg(sources);

  if (!src) return null;

  return (
    <BoxStyled
      blur={blur}
      component='img'
      src={src}
      sx={{
        ...(sources.sx || {}),
      }}
    />
  );
};

export default BlurredUpImage;
