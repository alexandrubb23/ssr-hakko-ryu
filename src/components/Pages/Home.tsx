import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import { Box, Grid, Typography } from '@mui/material';

type Quote = {
  quote: string;
  author: string;
};

const quotes: Quote[] = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci',
  },
  {
    quote: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: 'Success is not in what you have, but who you are.',
    author: 'Bo Bennett',
  },
  {
    quote:
      'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'The road to success and the road to failure are almost exactly the same.',
    author: 'Colin R. Davis',
  },
  {
    quote:
      'Success is not how high you have climbed, but how you make a positive difference to the world.',
    author: 'Roy T. Bennett',
  },
  {
    quote: 'Words are just opinions. Actions are the real truth.',
    author: 'Marcus Aurelius',
  },
];

import desktopLowQualityImage from '@assets/images/108-small.jpg';
import desktopHighQualityImage from '@assets/images/108.webp';

import mobileLowQuality from '@assets/images/180-small.jpg';
import mobileHighQuality from '@assets/images/180.webp';
import BlurredUpImage from '@components/Image/BlurredUpImage';
import useIsMobile from '@hooks/isMobile';
import useDeviceImageType from '@hooks/useDeviceImageType';
import Quotes from '@components/Quotes/Quotes';

const Home = () => {
  const isMobile = useIsMobile();
  const { imageLowQuality, imageHighQuality } = useDeviceImageType(
    isMobile ? mobileLowQuality : desktopLowQualityImage,
    isMobile ? mobileHighQuality : desktopHighQualityImage
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: {
              lg: 5,
            },
          }}
        >
          <Typography
            variant='h1'
            align='left'
            data-aos='fade'
            sx={{
              paddingBottom: 0,
            }}
          >
            Hakko Denshin Ryu Ju Jutsu Senshinkan Romania
          </Typography>

          <Typography variant='hakkoSubtitle' data-aos='fade' align='left'>
            <FormattedMessage id='page.home.subtitle' />
          </Typography>
          <Quotes data={quotes} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <BlurredUpImage
            highQualitySrc={imageHighQuality}
            lowQualitySrc={imageLowQuality}
            sx={{
              position: isMobile ? 'absolute' : 'relative',
              minHeight: '100vh',
              top: 0,
              zIndex: -1,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
