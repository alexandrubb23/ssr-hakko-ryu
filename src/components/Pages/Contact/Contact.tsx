import { Box, Grid, Stack, Typography } from '@mui/material';

import BlurredUpImage from '@components/Image/BlurredUpImage';

import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import AddressMediaItem from './AddressMediaItem';
import EmailMediaItem from './EmailMediaItem';
import PhoneMediaItem from './PhoneMediaItem';
import SocialMediaItem from './SocialMediaItem';
import ScheduleMediaItem from './ScheduleMediaItem';
import contactLowQualityImage from '@assets/images/philip-and-alex-coste-small.jpg';
import contactHighQualityImage from '@assets/images/--254.jpg';

const Contact = () => {
  return (
    <Grid container spacing={2} alignItems='center'>
      {/* Text on the left */}
      <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 0 }}>
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}
          >
            <AddressMediaItem />
            <ScheduleMediaItem />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <EmailMediaItem />
            <PhoneMediaItem />
            <SocialMediaItem />
          </Box>
        </Stack>
      </Grid>

      {/* Image on the right */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          component='img'
          src={contactHighQualityImage}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '100vh',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          data-aos='fade-left'
        />
      </Grid>
    </Grid>
  );

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
