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
        filter: blur ? 'blur(10px)' : 'none',
        height: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',

        top: 0,
        zIndex: -1,
        objectPosition: 'center',
        transition: blur ? 'none' : 'filter 0.3s ease-out',
        ...(sources?.sx || {}),
      }}
    />
  );
};

export default BlurredUpImage;
