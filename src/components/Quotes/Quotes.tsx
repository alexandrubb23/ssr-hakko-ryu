import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

import { getQuoteDisplayTime } from '@utils/time';
import { Box } from '@mui/material';
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

  return (
    <Box
      sx={{
        minHeight: '3rem',
        overflow: 'hidden',
        padding: 2,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          fontSize: '1.5rem',

          transition: 'opacity 0.5s ease',
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
            <Box
              sx={{
                fontStyle: 'italic',
              }}
              component='span'
            >
              "{data[currentQuote].quote}"
            </Box>
            <Box component='span'> - {data[currentQuote].author}</Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Quotes;
