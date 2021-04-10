import React from 'react';

import { Box, Typography, Link } from 'components/atoms';
import { Header, Footer } from 'components/organisms';

import { useStyles } from './About.styles';

const About = () => {
  const classes = useStyles();

  const backgroundImage = {
    backgroundImage: 'url("https://thehueandcry.com/wp-content/uploads/thumbprint-banner.jpg");',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
    <Header/>
      <Box className={classes.aboutHero} style={backgroundImage}/>
      <Box maxWidth={900} m="auto" mb={14} px={2}>
        <Typography variant="h1" className={classes.title}>Hue and Cry</Typography>
        <Box mt={2}>
          <Typography variant="h2" gutterBottom>
            a \ The pursuit of a suspect or a written proclamation for the capture of a suspect.
          </Typography>

          <Typography variant="h2">
            b \ A loud outcry formerly used in the pursuit of one who is suspected of a crime.
          </Typography>

          <Typography className={classes.cite}>
            Merriam Webster dictionary
          </Typography>

          <Box mt={6}/>

          <Typography className={classes.bodyText}>
            <strong>The mission</strong> is to bring awareness to cases of unsolved crimes against women and girls. Hue and Cry is a true crime blog — but you won’t find stories of serial killers or any focus on the people that commit crimes here. The focus is on victims who have yet to see justice, those of unsolved crimes. Stories of both well-known and lesser-known cases, with a emphasis on crimes that are committed against women of color.
          </Typography>

          <Typography className={classes.bodyText}>
            Links and sources are provided at the end of each article so you can dig deeper and continue with your own search for the truth. The more people know the more likely something will be solved, and hopefully one day all of the victims in these stories will get the justice they deserve.
          </Typography>

          <Typography className={classes.bodyText}>
            Note: I am not a professional writer or journalist. Just a true crime obsessee who wanted to re-tell stories that I heard, read, watched, and couldn’t stop thinking about. All my knowledge comes from articles, podcasts or shows cited at the bottom of each article.
          </Typography>

          <Typography className={classes.bodyText}>
            If you have any questions feel free to <Link href="mailto:hello@thehueandcry.com" className={classes.link}>contact me</Link>.
          </Typography>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default About;
