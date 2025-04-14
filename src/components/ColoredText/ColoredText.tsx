import { Box } from '@mui/material';

interface ColoredTextProps {
  text: string;
  color: string;
}

const ColoredText = ({ text, color }: ColoredTextProps) => {
  return (
    <Box
      component='span'
      sx={{
        color,
      }}
    >
      {text}
    </Box>
  );
};

export default ColoredText;
