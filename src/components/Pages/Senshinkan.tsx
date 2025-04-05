import { Box, Typography } from '@mui/material';

import senshinkanHighQualityImage from '@assets/images/high-res-senshinkan.jpg';
import senshinkanLowQualityImage from '@assets/images/low-res-senshinkan.jpg';

import BlurredUpImage from '../Image/BlurredUpImage';
const Senshinkan = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
      data-aos='fade'
    >
      <BlurredUpImage
        highQualitySrc={senshinkanHighQualityImage}
        lowQualitySrc={senshinkanLowQualityImage}
      />

      <Typography color='primary' variant='h4' gutterBottom>
        Senshinkan Romania (洗心館)
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        Master Okuyama Ryuho (奥山龍峰) was born in 1901 and died in 1987. In
        addition to traditional Japanese medicine and oratorical science, he
        studied several Ju-Jutsu and weapon Ryuha (流派: schools/styles),
        especially Daito Ryu Aikijujutsu (大東流合気柔術) that he learned from
        Matsuda Toshimi, then directly under Takeda Sokaku (武田惣角) for a
        short period.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        Master Okuyama Ryuho (奥山龍峰) was born in 1901 and died in 1987. In
        addition to traditional Japanese medicine and oratorical science, he
        studied several Ju-Jutsu and weapon Ryuha (流派: schools/styles),
        especially Daito Ryu Aikijujutsu (大東流合気柔術) that he learned from
        Matsuda Toshimi, then directly under Takeda Sokaku (武田惣角) for a
        short period.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        Master Okuyama Ryuho (奥山龍峰) was born in 1901 and died in 1987. In
        addition to traditional Japanese medicine and oratorical science, he
        studied several Ju-Jutsu and weapon Ryuha (流派: schools/styles),
        especially Daito Ryu Aikijujutsu (大東流合気柔術) that he learned from
        Matsuda Toshimi, then directly under Takeda Sokaku (武田惣角) for a
        short period.
      </Typography>
    </Box>
  );
};

export default Senshinkan;
