import { Box, Grid, Typography } from "@mui/material";

import BlurredUpImage from "@components/Image/BlurredUpImage";

import hakkoRyuLowQualityImage from "@assets/images/53-small.webp";
import hakkoRyuHighQualityImage from "@assets/images/53.webp";

import hakkoDenshinRyuLowQualityImage from "@assets/images/200-small.webp";
import hakkoDenshinRyuHighQualityImage from "@assets/images/200.webp";

import shiatsuLowQualityImage from "@assets/images/21-small.webp";
import shiatsuHighQualityImage from "@assets/images/21.webp";

import goshinTaisoLowQualityImage from "@assets/images/89-small.webp";
import goshinTaisoHighQualityImage from "@assets/images/89.webp";

const Strong = ({ children }: { children: React.ReactNode }) => (
  <Box fontWeight="fontWeightBold" display="inline">
    {children}
  </Box>
);

const HakkoRyu = () => {
  return (
    <Box>
      {/* Column 1 - Hakko Ryu Introduction */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 0 }}>
          <BlurredUpImage
            lowQualitySrc={hakkoRyuLowQualityImage}
            highQualitySrc={hakkoRyuHighQualityImage}
            sx={{
              aspectRatio: "auto 360 / 240",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 1 }}>
          <Typography
            align="center"
            color="primary"
            variant="h1"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            Hakko Ryu
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Hakkō-ryū</Strong> (八光流) or&nbsp;
            <Strong>Hakkō-ryū Jūjutsu</Strong> (八光流柔術) is a school or
            'style' of jujutsu descended from <Strong>Daito-ryu</Strong>,
            founded in <Strong>1941</Strong> by&nbsp;
            <Strong>Okuyama Ryuho</Strong> (1901–1987), a student of&nbsp;
            <Strong>Sokaku Takeda</Strong> and a practitioner of&nbsp;
            <Strong>shiatsu</Strong>. This style of self-defense focuses on
            the&nbsp;
            <Strong>qi meridian points</Strong> sensitive to pain, allowing a
            defender to create sharp distracting pain to an attacker without
            causing serious injury. It can therefore be considered a&nbsp;
            <Strong>humanitarian martial technique</Strong>.
          </Typography>
        </Grid>
      </Grid>

      {/* Column 2 - Meaning of the Name */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 1 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={hakkoDenshinRyuLowQualityImage}
            highQualitySrc={hakkoDenshinRyuHighQualityImage}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 0 }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Typography
            align="center"
            color="primary"
            variant="h1"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            Meaning of the Name
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Hakko Ryu</Strong> is a Japanese term that can be translated
            as&nbsp;
            <Strong>"The Style of the Eighth Light"</Strong> or
            specifically&nbsp;
            <Strong>"eighth light school"</Strong>. In the color spectrum, there
            are normally&nbsp;
            <Strong>seven bands of color</Strong> that are visible.&nbsp;
            <Strong>Hakko</Strong>, meaning the "eighth light", refers to
            the&nbsp;
            <Strong>ultraviolet band</Strong> — a band of light that is
            invisible to humans but responsible for causing sunburn while at the
            beach.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            This invisible yet powerful band of light is used as an analogy for
            Hakko Ryu, whereby&nbsp;
            <Strong>
              "the faint and weak in appearance comes surprising strength"
            </Strong>
            . The number eight can also represent <Strong>infinity</Strong> in
            Japan, so the name suggests an&nbsp;
            <Strong>infinite number of techniques</Strong> can be derived from
            it.&nbsp;
            <Strong>Ryu</Strong> means the school or system of martial art.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Hakko Ryu Jujutsu</Strong> training employs strategies to
            defend oneself using <Strong>subtle movements</Strong> rather than
            strength, yet powerful in execution — not unlike the ultraviolet
            rays of the sun.
          </Typography>
        </Grid>
      </Grid>

      {/* Column 3 - Hakko Denshin Ryu */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 0 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={shiatsuLowQualityImage}
            highQualitySrc={shiatsuHighQualityImage}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 1 }}
          gap={2}
          display="flex"
          flexDirection="column"
        >
          <Typography
            align="center"
            color="primary"
            variant="h1"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            Hakko Denshin Ryu Jujutsu
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Hakko Denshin Ryu Jujutsu</Strong> (八光伝心流柔術) is a
            Japanese martial art founded in <Strong>1997</Strong> by&nbsp;
            <Strong>Yasuhiro Irie</Strong>, <Strong>Michael LaMonica</Strong>,
            and <Strong>Antonio Garcia</Strong> — all of them high-ranking
            practitioners of <Strong>Hakko Ryu</Strong>, the school from which
            it descends, which is in turn based in part on&nbsp;
            <Strong>Daitō-ryū Aiki-Jutsu</Strong>.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            The name <Strong>Hakko Denshin Ryu</Strong> means
            <Strong>"Heart and Spirit (Soul) of Hakko Ryu"</Strong>. In Japan,
            it is known as&nbsp;
            <Strong>Kokodo</Strong> (皇光道).
          </Typography>
        </Grid>
      </Grid>

      {/* Column 4 - History */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 1 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={shiatsuLowQualityImage}
            highQualitySrc={shiatsuHighQualityImage}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 0 }}>
          <Typography
            align="center"
            color="primary"
            variant="h2"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            History
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            The school was founded by <Strong>Yasuhiro Irie</Strong>, &nbsp;
            <Strong>Michael LaMonica</Strong>, and&nbsp;
            <Strong>Antonio Garcia</Strong> in&nbsp;
            <Strong>1997</Strong>. Each of them received the degree of&nbsp;
            <Strong>Sandaikichu</Strong> from the founder of Hakko Ryu before
            leaving the Hakko Ryu organization. Upon creating Hakko Denshin Ryu,
            they each assumed the title of director (<Strong>"Soke"</Strong>) of
            the new system in their respective geographical areas (
            <Strong>Japan</Strong>,&nbsp;<Strong>USA</Strong>,&nbsp;
            <Strong>Europe</Strong>) and formed a federation called{" "}
            <Strong>Kokodo Renmei</Strong>.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            In the <Strong>1990s</Strong>, a former Hakko-ryu Sihan and student
            of Yasuhiro Irie, <Strong>Roy Hobbs</Strong>, received the&nbsp;
            <Strong>Menkyo Kaiden</Strong> (full teaching license) degree
            in&nbsp;
            <Strong>Kokodo Jujutsu</Strong> and, with Irie's permission, created
            a new descendant of Hakko Ryu called&nbsp;
            <Strong>Dentokan Jujutsu</Strong>.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            Another descendant of Hakko Ryu called&nbsp;
            <Strong>'Hakko Densho Ryu'</Strong>&nbsp; was founded by{" "}
            <Strong>Palumbo</Strong> in <Strong>Colorado</Strong>. This system
            is not affiliated with the other schools.
          </Typography>
        </Grid>
      </Grid>

      {/* Column 5 - Philosophy */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 0 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={shiatsuLowQualityImage}
            highQualitySrc={shiatsuHighQualityImage}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 1 }}
          gap={2}
          display="flex"
          flexDirection="column"
        >
          <Typography
            align="center"
            color="primary"
            variant="h2"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            Philosophy
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Hakko Denshin Ryu</Strong> is based on the same fundamental
            principles as traditional Hakko Ryu, enriched with philosophies that
            promote not only&nbsp;
            <Strong>physical strength</Strong> but also&nbsp;
            <Strong>mental resilience</Strong>&nbsp; and{" "}
            <Strong>personal growth</Strong>.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            Our curriculum incorporates both <Strong>unarmed techniques</Strong>
            &nbsp; and training with traditional Japanese weapons and objects
            such as the <Strong>tambo</Strong>,&nbsp;<Strong>jo</Strong>,&nbsp;
            <Strong>katana</Strong>, <Strong>tanto</Strong>,&nbsp;
            <Strong>sensu (fan)</Strong>, <Strong>kasa (umbrella)</Strong>
            ,&nbsp;
            <Strong>walking cane</Strong>, <Strong>paper scroll</Strong>, and
            many more. These tools symbolize the <Strong>adaptability</Strong>
            &nbsp; and <Strong>grace</Strong>
            inherent in Hakko Denshin Ryu.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            At the heart of our practice are the principles of&nbsp;
            <Strong>datsuryoku</Strong>&nbsp; (effortless power) and{" "}
            <Strong>kuzushi</Strong> (balance breaking). We use&nbsp;
            <Strong>pain as a tool of distraction</Strong>, blending it
            seamlessly with techniques that emphasize <Strong>humility</Strong>
            &nbsp; and <Strong>harmony</Strong>.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Hakko Ryu Denshin Ryu</Strong> is a practice that goes
            beyond the dojo. It is a <Strong>philosophy</Strong> that guides
            decision-making, supports&nbsp;
            <Strong>mental well-being</Strong>, and enriches&nbsp;
            <Strong>social interactions</Strong>. We aim to empower our
            students, cultivating not just skilled practitioners but&nbsp;
            <Strong>confident, humble individuals</Strong> who embody&nbsp;
            <Strong>respect</Strong>
            and <Strong>tradition</Strong> in all areas of life.
          </Typography>
        </Grid>
      </Grid>

      {/* Column 6 - Master Okuyama Ryuho */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 1 }}>
          <BlurredUpImage
            lowQualitySrc={hakkoRyuLowQualityImage}
            highQualitySrc={hakkoRyuHighQualityImage}
            sx={{
              aspectRatio: "auto 360 / 240",
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 0 }}
          gap={2}
          display="flex"
          flexDirection="column"
        >
          <Typography
            align="center"
            color="primary"
            variant="h2"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            Okuyama Ryuho
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            Master <Strong>Okuyama Ryuho</Strong> (奥山龍峰) was born in&nbsp;
            <Strong>1901</Strong>
            &nbsp;and died in <Strong>1987</Strong>. In addition to&nbsp;
            <Strong>traditional Japanese medicine</Strong>&nbsp; and{" "}
            <Strong>oratorical science</Strong>, he studied several&nbsp;
            <Strong>Ju-Jutsu</Strong>&nbsp; and <Strong>weapon Ryuha</Strong>{" "}
            (流派: schools/styles), especially&nbsp;
            <Strong>Daito Ryu Aikijujutsu</Strong> (大東流合気柔術) that he
            learned from&nbsp;
            <Strong>Matsuda Toshimi</Strong>, then directly under&nbsp;
            <Strong>Takeda Sokaku</Strong>
            (武田惣角) for a short period.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            In <Strong>1941</Strong>, he presented his own method, making a
            synthesis between the <Strong>Japanese martial tradition</Strong>
            &nbsp; and the <Strong>needs of our time</Strong>. He became
            the&nbsp;
            <Strong>Shodai Soke</Strong> (初代宗家: founder) of&nbsp;
            <Strong>Hakko Ryu</Strong>.<Strong>"Hakko"</Strong> (八光) can be
            translated as&nbsp;<Strong>Eighth Light</Strong>, and&nbsp;
            <Strong>"Ryu"</Strong> (流) means <Strong>School</Strong> or&nbsp;
            <Strong>Style</Strong>.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            The meaning of this school's name is that&nbsp;
            <Strong>true efficiency is invisible to the eyes</Strong>, just as
            are the <Strong>ultra-violet rays</Strong> (eighth color on the
            spectrum of light, invisible but very powerful).
          </Typography>
        </Grid>
      </Grid>

      {/* Column 7 - Ju Jutsu */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 0 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={hakkoDenshinRyuLowQualityImage}
            highQualitySrc={hakkoDenshinRyuHighQualityImage}
          />
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 1 }}
          gap={2}
          display="flex"
          flexDirection="column"
        >
          <Typography
            align="center"
            color="primary"
            variant="h2"
            padding="0 16px"
            margin={0}
            gutterBottom
            data-aos="fade"
          >
            Ju Jutsu 柔術
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            The term <Strong>Ju-Jutsu</Strong> (柔術) is a Japanese word which
            refers to a kind or group of disciplines or arts (術) whose
            efficiency lies in an&nbsp;
            <Strong>appropriate and precise gesture</Strong> (柔) whatever the
            situation may be. It is not only a&nbsp;
            <Strong>self-defense method</Strong> which can be traced back to
            the&nbsp;
            <Strong>Samurai</Strong> (侍) period, but it is also a way of&nbsp;
            <Strong>improving oneself</Strong> by practicing in a traditional
            way.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            For a very long time, oriental people have understood that&nbsp;
            <Strong>suppleness</Strong>&nbsp; and <Strong>adaptability</Strong>{" "}
            mean life, whereas&nbsp;
            <Strong>hardness</Strong> and&nbsp;
            <Strong>stiffness</Strong> are often synonymous with death.&nbsp;
            <Strong>Shirobei Akiyama</Strong>, a doctor from Nagasaki, is said
            to have observed a <Strong>willow tree</Strong> during a snowy
            winter. The branches of the tree did not resist the weight of the
            snow and so bent, allowing the snow to eventually fall off them when
            they would then return to their original position.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            On the other hand, the <Strong>cherry tree</Strong>, which resisted
            the weight of the snow without bending, would often have its
            branches broken when the accumulated snow became too heavy. Akiyama
            later founded a ju-jutsu style he named&nbsp;
            <Strong>Yoshin Ryu</Strong> (楊心流): the&nbsp;
            <Strong>"willow heart style/school"</Strong>. This&nbsp;
            <Strong>non-resistance principle</Strong> also influenced&nbsp;
            <Strong>Jigoro Kano</Strong>&nbsp; when he created his{" "}
            <Strong>Kodokan Judo</Strong> (講道館柔道) some 300 years later.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            Around <Strong>1600</Strong>, after centuries of wars, conflicts and
            unrest, a long era of <Strong>relative peace</Strong> was
            established in <Strong>Edo</Strong> (currently Tokyo) and spread
            throughout the country. Influenced by the <Strong>Bushido</Strong>
            &nbsp; (武士道: honor code of the Samurai) and the spiritual values
            of some masters, the <Strong>Ju-Jutsu Ryuha</Strong>&nbsp; (流派:
            schools/styles) were at the origin of new research with a more&nbsp;
            <Strong>educational</Strong>, <Strong>philosophical</Strong>, or
            even sometimes&nbsp;
            <Strong>religious</Strong> aim.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            The martial techniques/arts (<Strong>Bugei</Strong>, 武芸)
            became&nbsp;
            <Strong>Budo</Strong>
            (武道: the Path of Combat) and the support for&nbsp;
            <Strong>spiritual improvement</Strong>. More than just making
            oneself able to defeat one or even several opponents,&nbsp;
            <Strong>Ju-Jutsu</Strong> allows one to develop qualities such
            as&nbsp;
            <Strong>observation</Strong>, <Strong>control</Strong>,&nbsp;
            <Strong>stability</Strong>, <Strong>adaptability</Strong>,&nbsp;
            <Strong>respect for others</Strong>, <Strong>health</Strong>…
            and&nbsp;
            <Strong>harmony</Strong>. This is still the challenge that
            traditional Ju-Jutsu schools offer in our modern world.
          </Typography>
        </Grid>
      </Grid>

      {/* Column 8 - Shiatsu */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 1 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={shiatsuLowQualityImage}
            highQualitySrc={shiatsuHighQualityImage}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 0 }}>
          <Typography
            align="center"
            color="primary"
            variant="h4"
            gutterBottom
            data-aos="fade"
          >
            Shiatsu 指圧
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Shi</Strong> (指) means <Strong>"finger"</Strong> and&nbsp;
            <Strong>atsu</Strong> (圧) means <Strong>"pressure"</Strong>.&nbsp;
            <Strong>Shiatsu</Strong> is a technique aiming at maintaining or
            recovering the <Strong>energetic balance</Strong> our body needs to
            be healthy.
          </Typography>
        </Grid>
      </Grid>

      {/* Column 9 - Goshin Taiso */}
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 0, md: 0 }}>
          <BlurredUpImage
            animate="fade"
            lowQualitySrc={goshinTaisoLowQualityImage}
            highQualitySrc={goshinTaisoHighQualityImage}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 1 }}>
          <Typography
            align="center"
            color="primary"
            variant="h4"
            gutterBottom
            data-aos="fade"
          >
            Goshin Taiso 護身体操
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            align="left"
            data-aos="fade"
          >
            <Strong>Goshin</Strong> (護身) means <Strong>"protection"</Strong>
            &nbsp;or&nbsp;
            <Strong>"defense"</Strong> and <Strong>taiso</Strong> (体操)
            means&nbsp;
            <Strong>"gymnastics"</Strong>. <Strong>Goshin Taiso</Strong> is a
            gymnastic system used to maintain the equilibrium of the forces
            present in our body. It is practiced alone and allows any individual
            to make their own
            <Strong>energetic evaluation</Strong>.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HakkoRyu;
