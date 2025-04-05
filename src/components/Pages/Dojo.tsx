import { Box, Typography } from '@mui/material';

import dojoHighQualityImage from '@assets/images/dojo-kids.jpg';
import dojoLowQualityImage from '@assets/images/low-res-dojo-kids.jpg';

import BlurredUpImage from '../Image/BlurredUpImage';

const Dojo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <BlurredUpImage
        highQualitySrc={dojoHighQualityImage}
        lowQualitySrc={dojoLowQualityImage}
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

export default Dojo;
