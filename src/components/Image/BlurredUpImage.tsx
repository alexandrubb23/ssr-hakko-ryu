import { Box, styled } from '@mui/material';

import useProgressiveImg, {
  type UseProgressiveImg,
} from '@hooks/useProgressiveImg';
import type { SxThemeProps } from 'types/style';

type BlurredUpImageProps = UseProgressiveImg & {
  // TODO: Remove sx
  sx?: SxThemeProps;
  className?: string;
  animate?: string;
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

const BlurredUpImage = (props: BlurredUpImageProps) => {
  const [src, { blur }] = useProgressiveImg(props);

  if (!src) return null;

  return (
    <Box data-aos={props.animate}>
      <BoxStyled
        blur={blur}
        component='img'
        src={src}
        className={props.className}
        sx={{
          ...(props.sx || {}),
        }}
      />
    </Box>
  );
};

export default BlurredUpImage;
