import { Typography } from '@mui/material';

import MediaItem from '@components/MediaObject/MediaItem';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const PhoneMediaItem = () => {
  return (
    <MediaItem body='+40 735 538 558' icon={LocalPhoneIcon} title='Phone'>
      <Typography>Sensei Alexandru Barbulescu</Typography>
    </MediaItem>
  );
};

export default PhoneMediaItem;
