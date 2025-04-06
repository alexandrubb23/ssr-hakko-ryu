import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Box, SvgIcon } from '@mui/material';

import MediaItem from '@components/MediaObject/MediaItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialMediaItem = () => {
  return (
    <MediaItem
      icon={WebAssetIcon}
      localeId={{
        title: 'page.contact.social.title',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          marginTop: 1,
        }}
      >
        <a href='https://www.facebook.com/hakkodenshinryuromania'>
          <SvgIcon component={FacebookIcon} fontSize='small' />
        </a>
        <a href='https://www.instagram.com/hakkodenshinryuromania/'>
          <SvgIcon component={YouTubeIcon} fontSize='small' />
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=+40735538558&text=Hi, I contacted you Through your website."'
          target='_blank'
        >
          <SvgIcon component={WhatsAppIcon} fontSize='small' />
        </a>
      </Box>
    </MediaItem>
  );
};

export default SocialMediaItem;
