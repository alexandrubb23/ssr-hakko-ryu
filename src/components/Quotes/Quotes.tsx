import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import { getQuoteDisplayTime } from '@utils/time';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

export type Quote = {
  quote: string;
  author: string;
};

interface Props {
  data: Quote[];
}

const Quotes = ({ data }: Props) => {
  const [key, setKey] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  useInterval(() => {
    setCurrentQuote(prev => {
      const nextQuote = prev + 1;
      return nextQuote >= data.length ? 0 : nextQuote;
    });

    setKey(prev => prev + 1);
  }, getQuoteDisplayTime(data[currentQuote].quote));

  const { author, quote } = data[currentQuote];

  return (
    <Box
      sx={{
        minHeight: 250,
        overflow: 'hidden',
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <>
            <Typography
              variant='body2'
              sx={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                fontStyle: 'italic',
              }}
            >
              {quote}
            </Typography>
            <Typography
              variant='body2'
              align='right'
              sx={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              —{author},
            </Typography>
          </>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Quotes;
