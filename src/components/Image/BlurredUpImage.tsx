import { Box } from '@mui/material';

import useProgressiveImg, {
  type UseProgressiveImg,
} from '@hooks/useProgressiveImg';
import type { SxThemeProps } from 'types/style';

type BlurredUpImageProps = UseProgressiveImg & {
  sx?: SxThemeProps;
};

const BlurredUpImage = (sources: BlurredUpImageProps) => {
  const [src, { blur }] = useProgressiveImg(sources);

  return (
    <Box
      component='img'
      src={src}
      sx={{
        width: '100%',
        aspectRatio: '16/9',
        filter: blur ? 'blur(20px)' : 'none',
        height: 'auto',
        maxHeight: '100vh',
        objectFit: 'cover',
        objectPosition: 'center',
        transition: blur ? 'none' : 'filter 0.3s ease-out',
        ...(sources?.sx || {}),
      }}
    />
  );
};

export default BlurredUpImage;
