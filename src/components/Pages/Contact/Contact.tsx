import { Box, Stack, Typography } from '@mui/material';

import alexHighQualityImage from '@assets/images/high-res-gust-2.jpg';
import alexLowQualityImage from '@assets/images/low-res-gust-2.jpg';
import BlurredUpImage from '@components/Image/BlurredUpImage';

import AddressMediaItem from './AddressMediaItem';
import EmailMediaItem from './EmailMediaItem';
import PhoneMediaItem from './PhoneMediaItem';
import SocialMediaItem from './SocialMediaItem';
import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import MediaItem from '@components/MediaObject/MediaItem';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
        <Box
          sx={{
            maxWidth: {
              sm: 300,
            },
          }}
        >
          <Typography variant='h4'>
            <FormattedMessage id='page.contact.title' />
          </Typography>
          <Typography variant='body1'>
            <FormattedMessage id='page.contact.description' />
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <AddressMediaItem />
          <EmailMediaItem />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <MediaItem
            icon={CalendarMonthIcon}
            localeId={{
              title: 'page.contact.schedule.title',
              description: 'page.contact.schedule.description',
            }}
          />
          <SocialMediaItem />
          <PhoneMediaItem />
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
