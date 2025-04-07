import Quotes from '@components/Quotes/Quotes';
import { Typography } from '@mui/material';

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
];

const Home = () => {
  return (
    <>
      <Typography color='primary' variant='h2' align='center' data-aos='fade'>
        Hakko Denshin Ryu Ju Jutsu
      </Typography>
      <Typography variant='h3' data-aos='fade' align='center'>
        Senshinkan Romania
      </Typography>
      <Typography variant='h4' data-aos='fade' align='center'>
        <Quotes data={quotes} />
      </Typography>
    </>
  );
};

export default Home;
