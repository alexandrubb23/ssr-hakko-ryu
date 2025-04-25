import { Box, Grid, Typography } from '@mui/material';

import hakkoDenshinRyuHighQualityImage from '@assets/images/200.webp';
import hakkoDenshinRyuLowQualityImage from '@assets/images/200-small.webp';
import BlurredUpImage from '@components/Image/BlurredUpImage';

const Dojo = () => {
  return (
    <Grid container spacing={2} alignItems='center'>
      {/* Text on the left */}
      <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 0 }}>
        <Typography color='primary' variant='h1' gutterBottom>
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

      {/* Image on the right */}
      <Grid size={{ xs: 12, md: 6 }}>
        <BlurredUpImage
          lowQualitySrc={hakkoDenshinRyuLowQualityImage}
          highQualitySrc={hakkoDenshinRyuHighQualityImage}
          sx={{
            aspectRatio: 'auto 360 / 240',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Dojo;
