import { Typography } from '@mui/material';
import MediaObject from './MediaObject';

import type { MediaObjectProps } from './MediaObject';
import { PropsWithChildren } from 'react';

interface MediaItemProps extends MediaObjectProps {
  body?: React.ReactNode;
  title: string;
}

const MediaItem = ({
  body,
  children,
  icon,
  title,
}: PropsWithChildren<MediaItemProps>) => {
  return (
    <MediaObject icon={icon}>
      <Typography variant='h6'>{title}</Typography>
      {body && <Typography variant='body1'>{body}</Typography>}
      {children}
    </MediaObject>
  );
};

export default MediaItem;
