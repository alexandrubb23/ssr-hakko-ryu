import FormattedMessage from '@components/FormattedMessage/FormattedMessage';
import { Grid, Typography } from '@mui/material';

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

import desktopLowQuality from '@assets/images/108-small.jpg';
import desktopHighQuality from '@assets/images/108.webp';

import mobileLowQuality from '@assets/images/180-small.jpg';
import mobileHighQuality from '@assets/images/180.webp';
import BlurredUpImage from '@components/Image/BlurredUpImage';
import Quotes from '@components/Quotes/Quotes';
import useIsMobile from '@hooks/isMobile';
import useDeviceImageType from '@hooks/useDeviceImageType';

const Home = () => {
  const isMobile = useIsMobile();

  const { imageLowQuality, imageHighQuality } = useDeviceImageType({
    mobileLowQuality,
    desktopLowQuality,
    mobileHighQuality,
    desktopHighQuality,
  });

  return (
    <Grid container>
      <Grid
        size={{ xs: 12, lg: 4, xl: 6 }}
        className='flex flex-col justify-center'
      >
        <Typography
          variant='h1'
          align='left'
          data-aos='fade'
          className='pb-0 text-shadow-lg/30'
        >
          Hakko Denshin Ryu Ju Jutsu Senshinkan Romania
        </Typography>

        <Typography variant='h2Inter' data-aos='fade' align='left'>
          <FormattedMessage id='page.home.subtitle' />
        </Typography>
        <Quotes data={quotes} />
      </Grid>
      <Grid size={{ xs: 12, lg: 8, xl: 6 }}>
        <BlurredUpImage
          highQualitySrc={imageHighQuality}
          lowQualitySrc={imageLowQuality}
          className={`min-h-dvh top-0 z-[-1] left-0 ${
            isMobile ? 'absolute' : 'relative'
          }`}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
