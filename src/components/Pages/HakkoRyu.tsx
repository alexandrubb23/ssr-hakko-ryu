import { Box, Typography } from '@mui/material';

import alexHighQualityImage from '@assets/images/high-res-gust-2.jpg';
import alexLowQualityImage from '@assets/images/low-res-gust-2.jpg';
import image3 from '@assets/images/gust-3.jpg';

import BlurredUpImage from '../Image/BlurredUpImage';

const HakkoRyu = () => {
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
        highQualitySrc={alexHighQualityImage}
        lowQualitySrc={alexLowQualityImage}
      />

      <Typography
        align='center'
        color='primary'
        variant='h4'
        gutterBottom
        data-aos='fade'
      >
        Hakko Ryu
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
        In 1941, he presented his own method, making a synthesis between the
        Japanese martial tradition and the needs of our time. He became thus the
        Shodai Soke (初代宗家: founder) of Hakko Ryu. "Hakko" (八光) can be
        translated by Eighth Light, and "Ryu" (流), by School, Style.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        The meaning of this school's name is that true efficiency is invisible
        to the eyes as are the ultra-violet rays (eighth colour on the spectrum
        of light, invisible but very powerful).
      </Typography>

      <Box
        component='img'
        src={image3}
        sx={{
          maxWidth: '100%',
          height: 'auto',
          maxHeight: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
          aspectRatio: '16/9',
        }}
        data-aos='fade'
      />
      <Typography color='primary' variant='h4' gutterBottom data-aos='fade'>
        Ju Jutsu
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        The term Ju-Justu (柔術) is a Japanese word which refers to a kind, a
        group of disciplines or arts (術) whose efficiency lies in an
        appropriate and precise gesture (柔) whatever the situation may be. It
        is not only a self-defence method which can be traced back to the
        Samurai (侍) period, but it is also a way of improving oneself by
        practicing in a traditional way.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        For a very long time oriental people have understood that suppleness and
        adaptability mean life, whereas hardness and stiffness are often
        synonymous with death: Shirobei Akiyama, a doctor from Nagasaki, is said
        to have observed a willow tree during a snowy winter. The branches of
        the tree did not resist the weight of the snow and so bent allowing the
        snow to eventually fall off them when they would then go back to their
        original (natural) position. On the other hand, the cherry tree, which
        resisted the weight of the snow without bending, would often have its
        branches broken when the accumulated snow became too heavy. Akiyama is
        also said to have, later on, founded a ju-jutsu style he named Yoshin
        Ryu (楊心流): the willow heart style/school. This non-resistance
        principle also influenced Jigoro Kano when he created his Kodokan Judo
        (講道館柔道) some 300 years later.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        But let's come back to Ju-Jutsu: around 1600, after centuries of wars,
        conflicts and unrest, a long era of relative peace was established in
        Edo (currently Tokyo) and spread throughout the country. Influenced by
        the Bushido (武士道: honour code of the Samurai) and the spiritual value
        of some masters, the Ju-Jutsu Ryuha (流派: schools/styles) were at the
        origin of new researches with a more educational, philosophical or even
        sometimes religious aim. The martial techniques/arts (Bugei, 武芸)
        became Budo (武道: the Path of the Combat) and the support for spiritual
        improvement.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        More then just making oneself able to defeat one or even several
        opponents, Ju-Jutsu allows oneself to develop qualities such as
        observation, control, stability, adaptability, respect for others,
        health … and harmony. This is still the challenge that traditional
        Ju-Jutsu schools offer in our modern world.
      </Typography>
    </Box>
  );
};

export default HakkoRyu;
