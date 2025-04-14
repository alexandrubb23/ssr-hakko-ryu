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
      <Typography
        align='center'
        color='primary'
        variant='h4'
        gutterBottom
        data-aos='fade'
      >
        Hakko Denshin Ryu Ju Jutsu
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        In 1997, many practitioners, willing to preserve the spirit and
        teachings of Shodai Soke Okuyama, formed a new association called Kokodo
        Renmei (皇光道連盟) and founded a new school: the Hakko Denshin Ryu
        (八光伝心流) whose name can be translated as "Eighth Light Original
        Spirit School".
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        The founders of Kokodo Renmei (皇光道連盟) are (from left to right):
        Michael J. LaMonica, Antonio Garcia and Yasuhiro Irie (入江安博).
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        The direction of Hakko Denshin Ryu is represented by : Michael J.
        LaMonica, Soke for America, and Antonio Garcia, Soke for Europe.
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        As Hakko Ryu, Hakko Denshin Ryu is composed of three parts:
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
      <Typography
        align='center'
        color='primary'
        variant='h4'
        gutterBottom
        data-aos='fade'
      >
        Ju Jutsu 柔術
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
      <Typography
        align='center'
        color='primary'
        variant='h4'
        gutterBottom
        data-aos='fade'
      >
        Shiatsu 指圧
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        Shi (指) means "finger" and atsu (圧), "pressure". Shiatsu is a
        technique aiming at maintaining or recovering the energetical balance
        our body needs to be healthy.
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
      <Typography
        align='center'
        color='primary'
        variant='h4'
        gutterBottom
        data-aos='fade'
      >
        Goshin Taiso 護身体操
      </Typography>
      <Typography
        variant='body1'
        color='text.primary'
        align='left'
        data-aos='fade'
      >
        Goshin (護身) signifie "protection, défense" et taiso (体操)
        "gymnastique". Le Goshin Taiso est une gymnastique visant également à
        maintenir l'équilibre des forces qui nous animent. Il se pratique seul
        et permet aussi à chacun de poser un bilan énergétique. Goshin (護身)
        means "protection" or "defence" and taiso (体操) "gymnastic". Goshin
        Taiso is a gymnastic used to maintain the equilibrium of the forces
        present in our body. It is practised alone and allows any individual to
        make his own energetical evaluation.
      </Typography>
    </Box>
  );
};

export default HakkoRyu;
