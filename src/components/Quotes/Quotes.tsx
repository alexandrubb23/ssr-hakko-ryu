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
            <blockquote cite='https://www.huxley.net/bnw/four.html'>
              <Typography
                variant='body2'
                sx={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  textShadow:
                    '0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5)',
                }}
              >
                {quote}
              </Typography>
            </blockquote>
            <Typography
              variant='body2'
              sx={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                textShadow:
                  '0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5)',
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
