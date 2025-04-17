import { Grid, Typography } from '@mui/material';

import BlurredUpImage from '@components/Image/BlurredUpImage';

import senshinkanLowQualityImage from '@assets/images/279-small.webp';
import senshinkanHighQualityImage from '@assets/images/279.webp';
const Senshinkan = () => {
  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BlurredUpImage
          lowQualitySrc={senshinkanLowQualityImage}
          highQualitySrc={senshinkanHighQualityImage}
          sx={{
            width: {
              lg: '80%',
              md: '100%',
              sm: '80%',
              xs: '80%',
            },
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 0 }}>
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
      </Grid>
    </Grid>
  );
};

export default Senshinkan;
