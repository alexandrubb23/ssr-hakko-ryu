import { Box, Stack, Typography } from '@mui/material';

import BlurredUpImage from '@components/Image/BlurredUpImage';

import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import AddressMediaItem from './AddressMediaItem';
import EmailMediaItem from './EmailMediaItem';
import PhoneMediaItem from './PhoneMediaItem';
import SocialMediaItem from './SocialMediaItem';
import ScheduleMediaItem from './ScheduleMediaItem';
import contactLowQualityImage from '@assets/images/philip-and-alex-coste-small.jpg';
import contactHighQualityImage from '@assets/images/philip-and-alex-coste.webp';

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
        highQualitySrc={contactHighQualityImage}
        lowQualitySrc={contactLowQualityImage}
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
              sm: 250,
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
          <AddressMediaItem />
          <ScheduleMediaItem />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <EmailMediaItem />
          <PhoneMediaItem />
          <SocialMediaItem />
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
