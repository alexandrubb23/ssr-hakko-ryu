import { Box, Stack, Typography } from '@mui/material';

import alexHighQualityImage from '@assets/images/high-res-gust-2.jpg';
import alexLowQualityImage from '@assets/images/low-res-gust-2.jpg';
import BlurredUpImage from '@components/Image/BlurredUpImage';

import AddressMediaItem from './AddressMediaItem';
import EmailMediaItem from './EmailMediaItem';
import PhoneMediaItem from './PhoneMediaItem';
import SocialMediaItem from './SocialMediaItem';

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BlurredUpImage
        highQualitySrc={alexHighQualityImage}
        lowQualitySrc={alexLowQualityImage}
      />
      <Stack
        spacing={2}
        sx={{ padding: 2 }}
        direction={{ xs: 'column', sm: 'row' }}
        data-aos='fade'
      >
        <Box>
          <Typography variant='h4'>Contact Us</Typography>
          <Typography variant='body1'>
            We would love to hear from you! Please reach out to us at:
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <AddressMediaItem />
          <EmailMediaItem />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <SocialMediaItem />
          <PhoneMediaItem />
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
